export type Phone = {
  number: number;
  countryCode: string;
};

export type ContactFormData = {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: Phone;
  message?: string;
  termsAndConditions: boolean;
  hostname: string;
};
