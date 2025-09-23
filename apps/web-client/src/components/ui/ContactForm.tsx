"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/Checkbox";
import { useFormUtils } from "@/hooks/useFormUtils";
import { Input } from "@/components/ui/Input";
import * as yup from "yup";
import { ObjectSchema } from "yup";
import { Select } from "@/components/ui/Select";
import countriesISO from "@/data-list/countriesISO.json";
import { TextArea } from "@/components/ui/TextArea";
import { Form } from "@/components/ui/Form";
import { useTransition } from "react";
import { SendIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  serverActionSendContactEmail: (
    formData: Omit<Contact, "hostname">,
  ) => Promise<void>;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: Phone;
  message: string;
  termsAndConditions: boolean;
}

export const ContactForm = ({
  serverActionSendContactEmail,
}: ContactFormProps) => {
  const [isPending, startTransition] = useTransition();

  const schema: ObjectSchema<FormData> = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.object({
      prefix: yup.string().required(),
      number: yup.number().required(),
    }),
    message: yup.string().required(),
    termsAndConditions: yup
      .boolean()
      .required()
      .oneOf([true], "Debes aceptar los términos y condiciones"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      phone: {
        prefix: "+51",
      },
      termsAndConditions: false,
    },
  });

  const { required, error, errorMessage } = useFormUtils({ errors, schema });

  const onSubmit = (formData: FormData) => {
    startTransition(async () => {
      await serverActionSendContactEmail(formData);
    });
  };

  return (
    <div className="w-full min-h-screen isolate bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-10">
          <h1 className="text-[2.3em] sm:text-[2.5em] font-semibold tracking-tight text-balance text-secondary leading-13">
            Contáctanos
          </h1>
          <p className="text-base text-foreground">
            Déjanos un mensaje para ponernos en contacto contigo.
          </p>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-3 md:gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <Controller
                name="firstName"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    label="Nombres"
                    placeholder="Ingresa tus nombres"
                    name={name}
                    value={value}
                    error={error(name)}
                    helperText={errorMessage(name)}
                    required={required(name)}
                    onChange={onChange}
                    autoComplete="given-name"
                  />
                )}
              />
            </div>
            <div className="md:col-span-2">
              <Controller
                name="lastName"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    label="Apellidos"
                    placeholder="Ingresa tus apellidos"
                    name={name}
                    value={value}
                    error={error(name)}
                    helperText={errorMessage(name)}
                    required={required(name)}
                    onChange={onChange}
                    autoComplete="family-name"
                  />
                )}
              />
            </div>
            <div className="md:col-span-4">
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    label="Correo Electrónico"
                    placeholder="Ingresa tu correo electrónico"
                    type="email"
                    name={name}
                    value={value}
                    error={error(name)}
                    helperText={errorMessage(name)}
                    required={required(name)}
                    onChange={onChange}
                    autoComplete="email"
                  />
                )}
              />
            </div>
            <div className="md:col-span-1">
              <Controller
                name="phone.prefix"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <Select
                    label="Prefijo"
                    placeholder="Selecciona un país"
                    name={name}
                    value={value}
                    error={error(name)}
                    helperText={errorMessage(name)}
                    required={required(name)}
                    onChange={onChange}
                    options={countriesISO.map((iso) => ({
                      label: `${iso.name} (${iso.phonePrefix})`,
                      value: iso.phonePrefix,
                    }))}
                  />
                )}
              />
            </div>
            <div className="md:col-span-3">
              <Controller
                name="phone.number"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    label="Teléfono"
                    placeholder="Ingresa tu numero de teléfono"
                    type="number"
                    name={name}
                    value={value}
                    error={error(name)}
                    helperText={errorMessage(name)}
                    required={required(name)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <div className="md:col-span-4">
              <Controller
                name="message"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <TextArea
                    label="Mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    name={name}
                    value={value}
                    error={error(name)}
                    helperText={errorMessage(name)}
                    required={required(name)}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            {/* Terms and Conditions - Full Width */}
            <div className="md:col-span-4">
              <Controller
                name="termsAndConditions"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <Checkbox
                    name={name}
                    checked={value}
                    error={error(name)}
                    helperText={errorMessage(name)}
                    required={required(name)}
                    onChange={onChange}
                  >
                    <div>
                      Acepto los{" "}
                      <a
                        href="#"
                        className="hover:text-slate-800 font-semibold underline"
                      >
                        términos y condiciones
                      </a>
                    </div>
                  </Checkbox>
                )}
              />
            </div>
            <div className="md:col-span-4">
              <Button
                type="submit"
                disabled={isPending}
                loading={isPending}
                block
              >
                {isPending ? (
                  "Enviando mensaje..."
                ) : (
                  <div className="flex gap-2 items-center leading-1">
                    <SendIcon className="w-[1.2em]" /> Enviar mensaje
                  </div>
                )}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
