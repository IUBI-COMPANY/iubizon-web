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

interface TechnicalService {
  full_name: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_prefix?: string;
  phone_number?: string;
  product_name?: string;
  description_device_fault?: string;
  description_other_fault?: string;
  service_type?: string;
  visit_date?: string;
  visit_time?: string;
  department?: string;
  province?: string;
  district?: string;
  address?: string;
  status: string;
  terms_and_conditions: boolean;
}
