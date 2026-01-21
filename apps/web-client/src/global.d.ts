interface Phone {
  number: number;
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

type ServiceType =
  | "maintenance"
  | "off-image"
  | "spots"
  | "distorted"
  | "noise"
  | "overheat"
  | "lens"
  | "other";

interface LeadForIubizon extends DefaultFirestoreProps {
  // Generic Fields
  id: string;
  client_id?: string;
  hostname?: string;
  email: string;
  status: string;
  archived: boolean;
  terms_and_conditions: boolean;
  email_sent_to_user?: boolean;
  email_sent_to_advisor?: boolean;
  created_by?: string;

  // Contact Information
  first_name?: string;
  last_name?: string;
  full_name?: string;
  full_name_or_social_reason?: string;
  phone_prefix?: string;
  phone_number?: string;

  // Address Information
  address?: string;
  department?: string;
  province?: string;
  district?: string;

  // Document Information
  document_type?: "DNI" | "RUC" | "CE" | "PASSPORT" | "OTHER";
  document_number?: string;
  document_id?: string;

  // Client/Service Type
  client_type?: "individual" | "organization";

  // Product/Service Information
  product_name?: string;
  product_service_description?: string;
  description_more_details?: string;
  quantity?: number;

  // Service Details (Technical Service)
  service_type?: ServiceType;
  attendance_type?:
    | "go_to_store"
    | "home_visit"
    | "send_to_store"
    | "quotation"
    | "other";

  // Visit/Meeting Information
  visit_date?: string;
  visit_time?: string;

  // Claim Specific Fields
  incident_date?: string;
  incident_time?: string;
  purchase_date?: string;
  invoice_number?: string;
  claim_motive?: string;
  problem_description?: string;
  claimed_amount?: string;
  requested_solution?: string;
}
