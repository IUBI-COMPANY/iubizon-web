import { Input } from "@/components/ui/Input";
import { Form } from "@/components/ui/Form";
import * as yup from "yup";
import { ObjectSchema } from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormUtils } from "@/hooks/useFormUtils";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { RepairStep1 } from "@/components/ui/RetailTechnicalServiceForm";
import { ArrowRight } from "lucide-react";
import { TextArea } from "@/components/ui/TextArea";

interface Props {
  globalStep: number;
  repairsFormData: Partial<RepairStep1>;
  setRepairsFormData: (data: Partial<RepairStep1>) => void;
  addLocalStorageData: (data: object) => void;
  setCurrentStepToLocalStorage: (step: number) => void;
}

export const DeviceInformation = ({
  globalStep,
  repairsFormData,
  setRepairsFormData,
  addLocalStorageData,
  setCurrentStepToLocalStorage,
}: Props) => {
  const schema = yup.object({
    service_type: yup
      .string()
      .oneOf([
        "maintenance",
        "off-image",
        "spots",
        "distorted",
        "noise",
        "overheat",
        "lens",
        "other",
      ] as const)
      .required(),
    quantity: yup.number().required().min(1, "La cantidad debe ser al menos 1"),
    product_name: yup.string().required(),
    description_more_details: yup.string().notRequired(),
  }) as ObjectSchema<RepairStep1>;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RepairStep1>({
    resolver: yupResolver(schema),
    defaultValues: {
      service_type: repairsFormData?.service_type || "maintenance",
      quantity: repairsFormData?.quantity || 1,
      product_name: repairsFormData?.product_name || "",
      description_more_details: repairsFormData?.description_more_details || "",
    },
  });

  const { required, error, errorMessage } = useFormUtils({ errors, schema });

  const onSubmit = (formData: RepairStep1) => {
    setRepairsFormData({ ...repairsFormData, ...formData });
    addLocalStorageData(formData);
    setCurrentStepToLocalStorage(globalStep + 1);
  };

  return (
    <div className="w-full">
      <div className="text-2xl text-center text-secondary font-semibold">
        Datos del equipo a reparar
      </div>
      <div className="mt-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Controller
                  name="product_name"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Input
                      label="Marca y Modelo del Proyector"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                      placeholder="Epson Powerlite-980w, Casio - XJ-F100W, BenQ, etc."
                    />
                  )}
                />
              </div>
              <div className="sm:col-span-2">
                <Controller
                  name="service_type"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Select
                      label="Seleccione la falla del equipo"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                      placeholder="Ej. No enciende, no proyecta imagen, manchas, etc."
                      options={[
                        { label: "Mantenimiento", value: "maintenance" },
                        { label: "No proyecta imagen", value: "off-image" },
                        { label: "Manchas en la imagen", value: "spots" },
                        { label: "Imagen distorsionada", value: "distorted" },
                        { label: "Ruido excesivo", value: "noise" },
                        { label: "Sobrecalentamiento", value: "overheat" },
                        { label: "Problemas con el lente", value: "lens" },
                        { label: "Otros", value: "other" },
                      ]}
                    />
                  )}
                />
              </div>
              <div className="sm:col-span-2">
                <Controller
                  name="description_more_details"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <TextArea
                      label="Describa más detalles (Opcional)"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      rows={3}
                      onChange={onChange}
                      placeholder="Describa más detalles sobre el servicio"
                    />
                  )}
                />
              </div>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-3">
              <Button block variant="primary" type="submit">
                <div className="flex gap-2 items-center justify-center">
                  <ArrowRight /> <span>Siguiente</span>
                </div>
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
