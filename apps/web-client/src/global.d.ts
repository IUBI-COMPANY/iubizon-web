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

interface RepairsContact extends Contact {
  product_name: string;
  device_fault: string;
  other_fault?: string;
  service_type: string;
  visit_date?: string;
  visit_time?: string;
  department?: string;
  province?: string;
  district?: string;
  address?: string;
}
