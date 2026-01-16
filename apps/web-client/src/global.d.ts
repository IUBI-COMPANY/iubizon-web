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

interface TechnicalService extends DefaultFirestoreProps {
  // Generic Fields
  id: string;
  product_name: string;
  description_device_fault: string;
  description_other_fault?: string;
  first_name?: string;
  last_name?: string;
  visit_date?: string;
  visit_time?: string;
  department?: string;
  province?: string;
  district?: string;
  address?: string;
  phone_prefix?: string;
  phone_number?: string;
  email: string;
  status: string;
  terms_and_conditions: boolean;
  archived: boolean;
  email_sent_to_user?: boolean;
  email_sent_to_advisor?: boolean;
  createdBy?: string;

  // Conditional fields for individual or Organization
  client_type: "individual" | "organization";
  attendance_type:
    | "go_to_store"
    | "home_visit"
    | "send_to_store"
    | "quotation"
    | "other";
  service_type: "maintenance" | "repair" | "installation" | "other";
  document_type: "DNI" | "RUC" | "CE" | "PASSPORT" | "OTHER";
  document_number: string;
  full_name_or_social_reason: string;
  quantity?: number;
}
