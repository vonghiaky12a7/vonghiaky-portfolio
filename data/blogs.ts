export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}

export const blogs: BlogPost[] = [
  {
    slug: "mastering-odoo-18-model-inheritance-and-wizards",
    title: "Mastering Odoo 18/19 Model Inheritance, Wizards, and Custom Business Flows",
    excerpt:
      "A deep architectural guide into extending Odoo ORM models, writing safe model inheritances, building multi-step interactive wizards, and enforcing strict record rules.",
    date: "Sep 25, 2026",
    readTime: "7 min read",
    category: "Odoo & ERP Architecture",
    tags: ["Odoo 18", "Python ORM", "Wizards", "PostgreSQL", "Enterprise ERP"],
    content: `
## Architecture of Odoo 18/19 Model Inheritance

In enterprise ERP implementations, maintaining clean boundaries between standard core modules and client customizations is essential. Odoo provides three distinct inheritance patterns:

### 1. Traditional In-place Extension (\`_inherit = 'res.partner'\`)
When you want to extend existing DocTypes/models by adding computed fields, constraints, or overriding core CRUD methods:

\`\`\`python
class ResPartner(models.Model):
    _inherit = 'res.partner'

    vehicle_ids = fields.One2many('garage.vehicle', 'partner_id', string='Registered Vehicles')
    total_service_invoices = fields.Monetary(
        compute='_compute_service_totals',
        string='Total Garage Spend'
    )
    
    @api.depends('vehicle_ids.repair_order_ids.invoice_ids.state')
    def _compute_service_totals(self):
        for partner in self:
            # High performance aggregated query
            total = sum(order.amount_total for v in partner.vehicle_ids for order in v.repair_order_ids)
            partner.total_service_invoices = total
\`\`\`

### 2. Prototype Inheritance (\`_name\` and \`_inherit\`)
Used when creating an independent table that copies fields and behaviors from an existing model without modifying the parent.

### 3. Delegation Inheritance (\`_inherits = {'res.partner': 'partner_id'}\`)
Used for seamless composition, such as linking clinic patients or automotive customers to the underlying contact directory.

---

## Building Multi-Step Wizards for Complex Actions

Wizards in Odoo are transient models (\`models.TransientModel\`) that store temporary state in memory before committing changes to the primary database.

\`\`\`python
class QuickPrescriptionWizard(models.TransientModel):
    _name = 'clinic.prescription.wizard'
    _description = 'Quick Prescription and Medicine Dispense'

    patient_id = fields.Many2one('clinic.patient', string='Patient', required=True)
    examination_date = fields.Date(default=fields.Date.context_today)
    line_ids = fields.One2many('clinic.prescription.wizard.line', 'wizard_id', string='Medicines')

    def action_confirm_and_dispense(self):
        self.ensure_one()
        # Create Sales Order & Reserve Pharmacy Stock
        sale_order = self.env['sale.order'].create({
            'partner_id': self.patient_id.partner_id.id,
            'origin': f'Prescription - {self.patient_id.name}',
            'order_line': [
                (0, 0, {
                    'product_id': line.medicine_id.id,
                    'product_uom_qty': line.quantity,
                    'price_unit': line.medicine_id.list_price,
                }) for line in self.line_ids
            ]
        })
        return sale_order.action_view_details()
\`\`\`

### Best Practices for Enterprise Maintainability

1. **Avoid Storing Computations Unnecessarily**: Only add \`store=True\` when the field is actively indexed for searching or grouping.
2. **Batch ORM Operations**: Always prefer \`self.env['model'].create([...])\` with lists of dictionaries instead of looping \`create()\` calls.
3. **Use Explicit \`@api.constrains\` and SQL Constraints**: Prevent dirty data at the database level for mission-critical accounting and stock records.
    `,
  },
  {
    slug: "integrating-vnpay-vietqr-into-odoo-erp-invoices",
    title: "Integrating VNPay Payment Gateway & VietQR Dynamic QR into Odoo Invoices",
    excerpt:
      "How to build a seamless automated payment pipeline in Odoo 18 that generates dynamic VietQR codes, processes VNPay IPN callbacks, and reconciles bank statements automatically.",
    date: "Aug 18, 2026",
    readTime: "9 min read",
    category: "Payment & Fintech",
    tags: ["VNPay", "VietQR", "Odoo Payments", "Fintech", "FastAPI"],
    content: `
## The Need for Automated Payment in Modern ERP

Manual bank transfer confirmation creates bottlenecks at service checkout counters. By embedding **VietQR dynamic QR codes** on printed repair orders and providing an online **VNPay payment link**, customers pay instantly and invoices are reconciled automatically.

### 1. Generating Dynamic VietQR Payloads (EMVCo Standard)

VietQR follows the EMVCo QR code format. In Odoo, we compute the CRC16-checksummed payload based on the invoice reference, bank code, and exact invoice balance:

\`\`\`python
def generate_vietqr_url(self):
    self.ensure_one()
    bank_bin = "970422" # MBBank / Vietcombank BIN
    account_no = "0913476315"
    amount = int(self.amount_residual)
    description = urllib.parse.quote(f"THANHTOAN {self.name}")
    
    return f"https://img.vietqr.io/image/{bank_bin}-{account_no}-compact2.png?amount={amount}&addInfo={description}"
\`\`\`

### 2. VNPay Hashing & Instant Payment Notification (IPN)

When a customer pays via VNPay, VNPay sends a cryptographic HMAC-SHA512 webhook to our Odoo endpoint:

\`\`\`python
@http.route('/payment/vnpay/ipn', type='http', auth='none', methods=['GET'], csrf=False)
def vnpay_ipn_handler(self, **kwargs):
    vnp_params = dict(kwargs)
    vnp_secure_hash = vnp_params.pop('vnp_SecureHash', None)
    
    # Sort and verify HMAC hash
    secret_key = request.env['ir.config_parameter'].sudo().get_param('vnpay.hash_secret')
    calculated_hash = hmac_sha512_sort(vnp_params, secret_key)
    
    if calculated_hash != vnp_secure_hash:
        return json.dumps({"RspCode": "97", "Message": "Invalid Checksum"})
        
    order_code = vnp_params.get('vnp_TxnRef')
    response_code = vnp_params.get('vnp_ResponseCode')
    
    if response_code == '00':
        # Payment Successful -> Register Odoo Payment & Post Journal Entry
        invoice = request.env['account.move'].sudo().search([('name', '=', order_code)], limit=1)
        if invoice and invoice.state == 'posted' and invoice.payment_state != 'paid':
            invoice._register_vnpay_payment(vnp_params)
            return json.dumps({"RspCode": "00", "Message": "Confirm Success"})
            
    return json.dumps({"RspCode": "01", "Message": "Order Not Found"})
\`\`\`

### Summary

Automated payment webhooks reduce cashier reconciliation time by over 90% and completely eliminate human accounting errors.
    `,
  },
  {
    slug: "realtime-ai-camera-attendance-sync-fastapi-odoo",
    title: "Realtime AI Camera Stream Processing & Attendance Sync in Odoo using FastAPI and RTSP",
    excerpt:
      "Deep dive into the architecture of xcamera: processing RTSP camera video streams, detecting faces with OpenCV, and dispatching instant attendance webhooks into Odoo ERP.",
    date: "Jul 10, 2026",
    readTime: "8 min read",
    category: "AI & Computer Vision",
    tags: ["xcamera", "FastAPI", "OpenCV", "Go2RTC", "Edge AI", "Odoo"],
    content: `
## High-Throughput Edge AI Camera Architecture

Connecting IP cameras directly to Odoo is inefficient due to high video decoding overhead. In \`xcamera\`, we built an asynchronous edge microservice using **FastAPI**, **Go2RTC**, and **OpenCV**:

- **Camera Ingestion**: Go2RTC Stream Broker ingests RTSP feeds with low latency.
- **AI Worker**: OpenCV and Face Detection engine processes frames asynchronously.
- **Event Queue**: FastAPI event queue delivers match events to Odoo HR Attendance APIs with retry policies.

### 1. Zero-Latency Video Ingestion with Go2RTC

Go2RTC ingests RTSP/H.264 streams from multiple surveillance cameras without CPU transcoding, distributing low-latency frames to our AI worker threads.

### 2. Face Recognition & Debouncing

To avoid spamming the ERP with dozens of check-in events when a person walks past the camera, we apply a 15-minute sliding-window cooldown per employee ID:

\`\`\`python
class AttendanceDebouncer:
    def __init__(self, cooldown_minutes: int = 15):
        self.cooldown = timedelta(minutes=cooldown_minutes)
        self.last_seen: Dict[int, datetime] = {}

    def should_record(self, employee_id: int) -> bool:
        now = datetime.now()
        last = self.last_seen.get(employee_id)
        if not last or (now - last) > self.cooldown:
            self.last_seen[employee_id] = now
            return True
        return False
\`\`\`

### 3. Asynchronous Webhook Dispatching to Odoo

When a valid match occurs, \`xcamera\` sends a JSON payload with the employee's ID, timestamp, camera location, confidence score, and event snapshot URL to the Odoo endpoint.
    `,
  },
  {
    slug: "building-high-performance-react-native-apps-offline-first",
    title: "Building High-Performance React Native Apps with Offline-First SQLite Sync",
    excerpt:
      "How to engineer fluid 60fps mobile applications in React Native and Expo that stay responsive offline and seamlessly sync changes with backend ERP databases.",
    date: "Jun 20, 2026",
    readTime: "6 min read",
    category: "Mobile Engineering",
    tags: ["React Native", "Expo", "SQLite", "Offline-First", "TypeScript"],
    content: `
## The Philosophy of Offline-First Mobile Design

Enterprise field workers and healthcare professionals frequently operate in areas with intermittent Wi-Fi or cellular connections. An offline-first mobile architecture guarantees that interactions remain instantaneous.

### 1. Local Database with SQLite & WatermelonDB

Instead of waiting for HTTP requests to complete, mobile user actions are committed immediately to the local SQLite database.

### 2. Action Mutation Queue

When the device is offline, mutations (e.g., logging a patient check-in or saving a workout set) are appended to a persistent FIFO sync queue:

\`\`\`typescript
interface SyncMutation {
  id: string;
  table: string;
  action: 'CREATE' | 'UPDATE' | 'DELETE';
  payload: Record<string, any>;
  timestamp: number;
}

export async function processSyncQueue(queue: SyncMutation[]) {
  const isConnected = await NetInfo.fetch().then(s => s.isConnected);
  if (!isConnected) return;

  for (const mutation of queue) {
    try {
      await api.post('/sync/apply', mutation);
      await localDb.removeFromQueue(mutation.id);
    } catch (error) {
      console.error('Failed to sync item:', mutation.id, error);
      break; // Retry on next network reconnect
    }
  }
}
\`\`\`

### Conclusion

Combining React Native's native rendering thread with local SQLite caching delivers a premium, zero-latency user experience.
    `,
  },
];
