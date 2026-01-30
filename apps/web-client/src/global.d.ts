interface Phone {
  number: string; // Cambiado a string para soportar números internacionales
  prefix: string;
}

interface Contact {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: Phone;
  message?: string;
  termsAndConditions: boolean;
  hostname: string;
}

// ==================== ENUMS Y TIPOS AUXILIARES ====================

type LeadStatus =
  | "new" // Nuevo lead
  | "contacted" // Contactado
  | "qualified" // Calificado
  | "proposal" // Propuesta enviada
  | "negotiation" // En negociación
  | "won" // Ganado
  | "lost" // Perdido
  | "follow_up" // Seguimiento
  | "cancelled"; // Cancelado

type LeadSource =
  | "website"
  | "phone"
  | "email"
  | "whatsapp"
  | "facebook"
  | "instagram"
  | "tiktok"
  | "google_ads"
  | "organic_search"
  | "referral"
  | "walk_in" // Cliente llega directamente
  | "other";

type AttendanceType =
  | "go_to_store" // Cliente va a la tienda
  | "home_visit" // Visita a domicilio
  | "send_to_store" // Enviar equipo a tienda
  | "quotation" // Solo cotización
  | "remote_support" // Soporte remoto
  | "on_site_service" // Servicio en sitio (para organizaciones)
  | "other";

type Priority = "low" | "medium" | "high" | "urgent";

type ServiceType =
  | "maintenance" // Mantenimiento
  | "repair" // Reparación
  | "installation" // Instalación
  | "calibration" // Calibración
  | "cleaning" // Limpieza
  | "diagnosis" // Diagnóstico
  | "warranty" // Garantía
  | "training" // Capacitación
  | "other";

type LostReason =
  | "price_too_high" // Precio muy alto
  | "competitor" // Se fue con competencia
  | "timing" // Mal timing
  | "no_response" // No respondió
  | "no_budget" // Sin presupuesto
  | "not_interested" // No interesado
  | "other";

// ==================== INTERFACES AUXILIARES ====================

interface ContactInfo {
  first_name: string;
  last_name: string;
  full_name?: string; // Computed field: first_name + last_name
  social_reason?: string; // Para organizaciones (razón social)
  email: string;
  phone: {
    prefix: string; // Ej: "+51"
    number: string; // Cambiado a string
  };
  alternate_phone?: {
    prefix: string;
    number: string;
  };
  position?: string; // Cargo en la organización
}

interface AddressInfo {
  street?: string;
  department?: string; // Región/Departamento
  province?: string;
  district?: string;
  postal_code?: string;
  reference?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

interface DocumentInfo {
  type: "DNI" | "RUC" | "CE" | "PASSPORT" | "OTHER";
  number: string;
  verified?: boolean; // Si se verificó el documento
}

interface ProductItem {
  id: string;
  name?: string; // Nombre del producto
  quantity: number;
  brand: string;
  model: string;
  serial_number?: string;
  condition?: "new" | "reconditioned" | "used"; // Estado del producto
  type: "sale" | "technical_service";
  service_type?: ServiceType;
  unit_price?: number;
  total_price?: number;
  discount?: number; // Descuento en porcentaje
  tax?: number; // Impuesto aplicado
  notes?: string; // Notas específicas del producto
}

interface ServiceDetails {
  service_type?: ServiceType;
  description?: string;
  problem_description?: string; // Descripción del problema
  estimated_cost?: number;
  final_cost?: number; // Costo final después de servicio
  warranty_included?: boolean;
  warranty_months?: number; // Meses de garantía
  parts_needed?: string[];
  labor_hours?: number; // Horas de mano de obra
  urgency_level?: "normal" | "express" | "emergency";
}

// Tipos específicos de entrega
type DeliveryType =
  | "store_pickup" // Recojo en tienda
  | "home_delivery" // Entrega a domicilio (Lima)
  | "province_shipping"; // Envío a provincias

interface DeliveryInfo {
  type: DeliveryType;

  // Para home_delivery - Entrega a domicilio
  home_delivery?: {
    preferred_date?: string; // ISO 8601
    preferred_time?: string;
    address: {
      district: string; // Distrito de Lima
      street: string; // Dirección completa
    };
  };

  // Para province_shipping - Envío a provincias
  province_shipping?: {
    address: {
      department: string; // Departamento
      province: string; // Provincia
      district: string; // Distrito
      street: string; // Dirección completa
    };
    estimated_delivery_days?: number; // 3-5 días
    courier_service?: string; // Nombre del courier
  };

  // Para store_pickup - No requiere campos adicionales
  // Solo se muestra la información del local
}

interface VisitSchedule {
  preferred_date?: string; // ISO 8601
  preferred_time?: string;
  confirmed_date?: string; // ISO 8601
  confirmed_time?: string;
  completed_date?: string; // ISO 8601 - Fecha real de completación
  duration_minutes?: number;
  technician_assigned?: string; // ID del técnico
  visit_status?:
    | "scheduled"
    | "in_progress"
    | "completed"
    | "cancelled"
    | "rescheduled";
  cancellation_reason?: string;
}

interface LeadTracking {
  source: LeadSource;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer_url?: string;
  landing_page?: string;
  ip_address?: string;
  user_agent?: string;
  device_type?: "desktop" | "mobile" | "tablet";
}

interface LeadTimestamps {
  created_at: string; // ISO 8601
  updated_at: string; // ISO 8601
  last_contact_at?: string; // ISO 8601
  converted_at?: string; // ISO 8601 - Cuando se convierte en cliente
  closed_at?: string; // ISO 8601 - Cuando se cierra (won o lost)
  first_response_at?: string; // ISO 8601 - Primera respuesta del equipo
}

interface SalesMetrics {
  // Métricas específicas de ventas
  opportunity_value?: number; // Valor de la oportunidad
  probability?: number; // Probabilidad de cierre (0-100)
  forecast_category?: "pipeline" | "best_case" | "commit" | "closed";
  sales_cycle_days?: number; // Días en el ciclo de ventas
  touchpoints?: number; // Número de interacciones
}

// ==================== INTERFAZ PRINCIPAL ====================

interface LeadForIubizon extends Partial<DefaultFirestoreProps> {
  // ========================================
  // 📋 INFORMACIÓN BÁSICA DEL LEAD
  // ========================================
  client_id?: string; // ID del cliente (iubizon) en sistema
  lead_type: "sale" | "technical_service";
  client_type: "individual" | "organization";
  status: LeadStatus;
  priority?: Priority;
  archived: boolean;

  // ========================================
  // 👤 INFORMACIÓN DE CONTACTO
  // ========================================
  contact: ContactInfo;
  document?: DocumentInfo;
  organization_info?: {
    company_name?: string;
    tax_id?: string; // RUC
    industry?: string;
    employee_count?: string;
    website?: string;
    contact_person?: string;
    contact_position?: string;
  };

  // ========================================
  // 📍 DIRECCIÓN Y UBICACIÓN
  // ========================================
  address?: AddressInfo;

  // ========================================
  // 🛍️ PRODUCTOS Y SERVICIOS
  // ========================================
  products?: ProductItem[];
  description_more_details?: string;
  estimated_value?: number;
  currency?: "PEN" | "USD";

  // Entrega de productos
  delivery?: DeliveryInfo;

  // Solo cotización (sin compra inmediata)
  quote_only?: boolean; // Si true, el cliente solo quiere cotización

  // ========================================
  // 🔧 DETALLES DE SERVICIO TÉCNICO
  // ========================================
  service_details?: ServiceDetails;
  equipment_brand?: string;
  equipment_model?: string;
  equipment_serial?: string;
  failure_description?: string;
  warranty_status?: "in_warranty" | "out_of_warranty" | "unknown";
  service_completed?: boolean;
  service_completion_date?: string; // ISO 8601

  // ========================================
  // 📅 AGENDA Y VISITAS
  // ========================================
  visit_schedule?: VisitSchedule;

  // ========================================
  // 💰 INFORMACIÓN FINANCIERA Y VENTAS
  // ========================================
  financial?: {
    subtotal?: number;
    tax_amount?: number;
    total_amount?: number;
    paid_amount?: number;
    balance?: number;
    invoice_number?: string;
    invoice_date?: string; // ISO 8601
    payment_status?: "pending" | "partial" | "paid" | "overdue";
  };

  // Cotizaciones y propuestas
  quote_sent?: boolean;
  quote_number?: string;
  quote_amount?: number;
  quote_valid_until?: string; // ISO 8601
  discount_percentage?: number;
  discount_amount?: number;
  payment_terms?: string;
  payment_method?: "cash" | "card" | "bank_transfer" | "installments" | "other";

  // Fechas de cierre
  expected_close_date?: string; // ISO 8601
  actual_close_date?: string; // ISO 8601

  // Razones de ganancia/pérdida
  won_reason?: string;
  lost_reason?: LostReason;
  lost_details?: string;
  competitor_name?: string;

  // ========================================
  // 📊 MÉTRICAS Y ANALYTICS
  // ========================================
  metrics?: SalesMetrics;

  // ========================================
  // 📞 COMUNICACIÓN Y SEGUIMIENTO
  // ========================================
  communication_preference?: "email" | "phone" | "whatsapp";
  preferred_contact_time?: string;
  language?: "es" | "en";
  terms_and_conditions: boolean;
  privacy_policy_accepted?: boolean;

  // Estado de emails
  email_sent_to_user?: boolean;
  email_sent_to_advisor?: boolean;
  last_email_sent_at?: string; // ISO 8601

  // Seguimiento
  next_follow_up_date?: string; // ISO 8601
  follow_up_count?: number;
  reminder_set?: boolean;
  reminder_date?: string; // ISO 8601

  // ========================================
  // 👥 ASIGNACIÓN Y GESTIÓN
  // ========================================
  assigned_to?: string; // ID del asesor/vendedor
  created_by?: string;
  team_id?: string;
  department?: "sales" | "technical_service" | "customer_service";

  // ========================================
  // 📝 NOTAS E HISTORIAL
  // ========================================
  notes?: string;
  internal_comments?: string;
  history?: LeadHistoryEntry[];

  // ========================================
  // ⭐ FEEDBACK Y SATISFACCIÓN
  // ========================================
  customer_rating?: number; // 1-5 estrellas
  customer_feedback?: string;
  nps_score?: number; // 0-10

  // ========================================
  // 🔍 TRACKING Y ATRIBUCIÓN
  // ========================================
  tracking: LeadTracking;
  hostname?: string;

  // ========================================
  // 📎 ARCHIVOS Y ETIQUETAS
  // ========================================
  tags?: string[];
  attachments?: {
    id: string;
    name: string;
    url: string;
    type: string;
    size: number;
    uploaded_at: string; // ISO 8601
  }[];
}

// ==================== TIPOS AUXILIARES ADICIONALES ====================

interface LeadHistoryEntry {
  action: string; // Ej: "status_changed", "contacted", "quote_sent"
  user_id: string;
  user_name?: string;
  timestamp: string; // ISO 8601
  old_value?: unknown;
  new_value?: unknown;
  details?: Record<string, unknown>;
}
