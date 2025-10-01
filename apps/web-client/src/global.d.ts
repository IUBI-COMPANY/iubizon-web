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

interface RepairsContact
  extends Omit<Contact, "hostname" | "termsAndConditions" | "message"> {
  productName: string;
  deviceFault: string;
  otherFault?: string;
  serviceType: string;
  visitDate?: string;
  visitTime?: string;
  department?: string;
  province?: string;
  district?: string;
  address?: string;
}
