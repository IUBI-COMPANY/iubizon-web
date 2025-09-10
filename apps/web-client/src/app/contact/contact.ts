export type Phone = {
  numberPhone: string;
  phoneCode: string;
};

export type ContactFormData = {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: Phone;
  message?: string;
  agreeToPolicies: boolean;
  host: "iubizon.com";
};
