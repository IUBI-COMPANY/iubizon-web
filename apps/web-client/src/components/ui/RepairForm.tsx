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
import { SendIcon, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface RepairRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: Phone;
  projectorBrand: string;
  projectorModel: string;
  issueDescription: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  district: string;
  city: string;
  termsAndConditions: boolean;
  hostname?: string;
}

interface RepairFormProps {
  serverActionSendRepairRequest: (
    formData: Omit<RepairRequest, "hostname">,
  ) => Promise<void>;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: Phone;
  projectorBrand: string;
  projectorModel: string;
  issueDescription: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  district: string;
  city: string;
  termsAndConditions: boolean;
}

const projectorBrands = [
  { value: "epson", label: "Epson" },
  { value: "benq", label: "BenQ" },
  { value: "viewsonic", label: "ViewSonic" },
  { value: "optoma", label: "Optoma" },
  { value: "sony", label: "Sony" },
  { value: "panasonic", label: "Panasonic" },
  { value: "lg", label: "LG" },
  { value: "acer", label: "Acer" },
  { value: "otro", label: "Otro" },
];

export const RepairForm = ({
  serverActionSendRepairRequest,
}: RepairFormProps) => {
  const [isPending, startTransition] = useTransition();

  const schema: ObjectSchema<FormData> = yup.object({
    firstName: yup.string().required("Nombres es requerido"),
    lastName: yup.string().required("Apellidos es requerido"),
    email: yup.string().email("Email inválido").required("Email es requerido"),
    phone: yup.object({
      prefix: yup.string().required("Prefijo es requerido"),
      number: yup.number().required("Número es requerido"),
    }),
    projectorBrand: yup.string().required("Marca del proyector es requerida"),
    projectorModel: yup.string().required("Modelo del proyector es requerido"),
    issueDescription: yup
      .string()
      .required("Descripción del problema es requerida"),
    preferredDate: yup.string().required("Fecha preferida es requerida"),
    preferredTime: yup.string().required("Horario preferido es requerido"),
    address: yup.string().required("Dirección es requerida"),
    district: yup.string().required("Distrito es requerido"),
    city: yup.string().required("Ciudad es requerida"),
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
      await serverActionSendRepairRequest(formData);
    });
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Wrench className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Solicita tu Servicio Técnico
        </h2>
        <p className="text-gray-600">
          Completa el formulario y nuestro equipo técnico se pondrá en contacto
          contigo
        </p>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          {/* Datos de Contacto */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-2">
                1
              </div>
              Datos de Contacto
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
              <div className="grid grid-cols-3 gap-2">
                <Controller
                  name="phone.prefix"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Select
                      label="Prefijo"
                      placeholder="País"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                      options={countriesISO.map((iso) => ({
                        label: `${iso.phonePrefix}`,
                        value: iso.phonePrefix,
                      }))}
                    />
                  )}
                />
                <div className="col-span-2">
                  <Controller
                    name="phone.number"
                    control={control}
                    render={({ field: { onChange, value, name } }) => (
                      <Input
                        label="Teléfono"
                        placeholder="Número de teléfono"
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
              </div>
            </div>
          </div>

          {/* Equipo a Reparar */}
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm mr-2">
                2
              </div>
              Equipo a Reparar
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Controller
                name="projectorBrand"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <Select
                    label="Marca del Proyector"
                    placeholder="Selecciona la marca"
                    name={name}
                    value={value}
                    error={error(name)}
                    helperText={errorMessage(name)}
                    required={required(name)}
                    onChange={onChange}
                    options={projectorBrands}
                  />
                )}
              />
              <Controller
                name="projectorModel"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    label="Modelo del Proyector"
                    placeholder="Ej: EX3210, VS340, etc."
                    name={name}
                    value={value}
                    error={error(name)}
                    helperText={errorMessage(name)}
                    required={required(name)}
                    onChange={onChange}
                  />
                )}
              />
              <div className="md:col-span-2">
                <Controller
                  name="issueDescription"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <TextArea
                      label="Descripción del Problema"
                      placeholder="Describe detalladamente el problema que presenta tu proyector..."
                      rows={4}
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
            </div>
          </div>

          {/* Datos de Visita */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-2">
                3
              </div>
              Datos de Visita Técnica
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Controller
                name="preferredDate"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    label="Fecha Preferida"
                    placeholder="dd/mm/aaaa"
                    type="text"
                    name={name}
                    value={value}
                    error={error(name)}
                    helperText={errorMessage(name)}
                    required={required(name)}
                    onChange={onChange}
                  />
                )}
              />
              <Controller
                name="preferredTime"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <Select
                    label="Horario Preferido"
                    placeholder="Selecciona un horario"
                    name={name}
                    value={value}
                    error={error(name)}
                    helperText={errorMessage(name)}
                    required={required(name)}
                    onChange={onChange}
                    options={[
                      {
                        value: "morning",
                        label: "Mañana (8:00 AM - 12:00 PM)",
                      },
                      {
                        value: "afternoon",
                        label: "Tarde (12:00 PM - 6:00 PM)",
                      },
                      { value: "evening", label: "Noche (6:00 PM - 9:00 PM)" },
                    ]}
                  />
                )}
              />
              <Controller
                name="address"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    label="Dirección Completa"
                    placeholder="Av/Jr/Calle, número, referencia"
                    name={name}
                    value={value}
                    error={error(name)}
                    helperText={errorMessage(name)}
                    required={required(name)}
                    onChange={onChange}
                  />
                )}
              />
              <div className="grid grid-cols-2 gap-2">
                <Controller
                  name="district"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Input
                      label="Distrito"
                      placeholder="Distrito"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                    />
                  )}
                />
                <Controller
                  name="city"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Input
                      label="Ciudad"
                      placeholder="Ciudad"
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
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="pt-4">
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
                      className="hover:text-slate-800 font-semibold underline text-blue-600"
                    >
                      términos y condiciones
                    </a>{" "}
                    del servicio técnico
                  </div>
                </Checkbox>
              )}
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              disabled={isPending}
              loading={isPending}
              block
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
            >
              {isPending ? (
                "Enviando solicitud..."
              ) : (
                <div className="flex gap-2 items-center justify-center">
                  <SendIcon className="w-5 h-5" /> Solicitar Servicio Técnico
                </div>
              )}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};
