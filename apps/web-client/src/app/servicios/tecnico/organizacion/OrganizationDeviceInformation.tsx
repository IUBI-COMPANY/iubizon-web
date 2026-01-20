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
import { OrganizationRepairStep1 } from "@/components/ui/OrganizationsTechnicalServiceForm";
import { ArrowRight } from "lucide-react";
import { TextArea } from "@/components/ui/TextArea";
import { RadioGroup } from "@/components/ui/RadioGroup";

interface Props {
  globalStep: number;
  repairsFormData: Partial<OrganizationRepairStep1>;
  setRepairsFormData: (data: Partial<OrganizationRepairStep1>) => void;
  addLocalStorageData: (data: object) => void;
  setCurrentStepToLocalStorage: (step: number) => void;
}

export const OrganizationDeviceInformation = ({
  globalStep,
  repairsFormData,
  setRepairsFormData,
  addLocalStorageData,
  setCurrentStepToLocalStorage,
}: Props) => {
  const schema = yup.object({
    service_type: yup
      .string()
      .oneOf(["repair", "maintenance", "installation", "other"] as const)
      .required(),
    quantity: yup.number().required().min(1, "La cantidad debe ser al menos 1"),
    product_name: yup.string().required(),
    description_device_fault: yup.string().when("service_type", {
      is: (val: string) => val === "repair" || val === "maintenance",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    description_other_fault: yup.string().when("service_type", {
      is: (val: string) => val === "other",
      then: (schema) => schema.notRequired(),
      otherwise: (schema) =>
        schema.when("description_device_fault", {
          is: "other",
          then: (schema) => schema.notRequired(),
          otherwise: (schema) => schema.notRequired(),
        }),
    }),
  }) as ObjectSchema<OrganizationRepairStep1>;

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<OrganizationRepairStep1>({
    resolver: yupResolver(schema),
    defaultValues: {
      service_type: repairsFormData?.service_type || "maintenance",
      quantity: repairsFormData?.quantity || 1,
      product_name: repairsFormData?.product_name || "",
      description_device_fault: repairsFormData?.description_device_fault || "",
      description_other_fault: repairsFormData?.description_other_fault || "",
    },
  });

  const { required, error, errorMessage } = useFormUtils({ errors, schema });

  const serviceType = watch("service_type");
  const isOtherFault = watch("description_device_fault") === "other";
  const isRepair = serviceType === "repair";
  const isMaintenance = serviceType === "maintenance";
  const isInstallation = serviceType === "installation";
  const isOther = serviceType === "other";
  const isRepairOrMaintenance = isRepair || isMaintenance;

  const getProductLabel = () => {
    if (isInstallation) {
      return "¿Qué equipo desea instalar?";
    }
    if (isOther) {
      return "Marca y modelo del producto";
    }
    return "Marca y Modelo del Proyector";
  };

  const getProductPlaceholder = () => {
    if (isInstallation) {
      return "Ej. Proyector Epson, Pantalla eléctrica, etc.";
    }
    if (isOther) {
      return "Ej. Epson Powerlite-980w, etc.";
    }
    return "Epson Powerlite-980w, Casio - XJ-F100W, BenQ, etc.";
  };

  const onSubmit = (formData: OrganizationRepairStep1) => {
    setRepairsFormData({ ...repairsFormData, ...formData });
    addLocalStorageData(formData);
    setCurrentStepToLocalStorage(globalStep + 1);
  };

  return (
    <div className="w-full">
      <div className="text-2xl text-center text-secondary font-semibold">
        Información del servicio
      </div>
      <div className="mt-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Controller
                  name="service_type"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <RadioGroup
                      label="¿Qué tipo de servicio requiere?"
                      options={[
                        { label: "Mantenimiento", value: "maintenance" },
                        { label: "Reparación", value: "repair" },
                        { label: "Instalación", value: "installation" },
                        { label: "Otros", value: "other" },
                      ]}
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                      direction="horizontal"
                      optionType="button"
                      buttonStyle="solid"
                    ></RadioGroup>
                  )}
                />
              </div>
              <div className="sm:col-span-2">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-4">
                    <Controller
                      name="quantity"
                      control={control}
                      render={({ field: { onChange, value, name } }) => (
                        <Input
                          label="Cantidad"
                          name={name}
                          type="number"
                          value={value}
                          error={error(name)}
                          helperText={errorMessage(name)}
                          required={required(name)}
                          onChange={onChange}
                        />
                      )}
                    />
                  </div>
                  <div className="col-span-8">
                    <Controller
                      name="product_name"
                      control={control}
                      render={({ field: { onChange, value, name } }) => (
                        <Input
                          label={getProductLabel()}
                          name={name}
                          value={value}
                          error={error(name)}
                          helperText={errorMessage(name)}
                          required={required(name)}
                          onChange={onChange}
                          placeholder={getProductPlaceholder()}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
              {isRepairOrMaintenance && (
                <div className="sm:col-span-2">
                  <Controller
                    name="description_device_fault"
                    control={control}
                    render={({ field: { onChange, value, name } }) => (
                      <Select
                        label={
                          isRepair
                            ? "Seleccione la falla del equipo"
                            : "Seleccione el tipo de mantenimiento"
                        }
                        name={name}
                        value={value}
                        error={error(name)}
                        helperText={errorMessage(name)}
                        required={required(name)}
                        onChange={onChange}
                        placeholder={
                          isRepair
                            ? "Ej. No enciende, no proyecta imagen, manchas, etc."
                            : "Ej. Preventivo, correctivo, etc."
                        }
                        options={
                          isRepair
                            ? [
                                { label: "No enciende", value: "off" },
                                {
                                  label: "No proyecta imagen",
                                  value: "no-image",
                                },
                                {
                                  label: "Manchas en la imagen",
                                  value: "spots",
                                },
                                {
                                  label: "Imagen distorsionada",
                                  value: "distorted",
                                },
                                { label: "Ruido excesivo", value: "noise" },
                                {
                                  label: "Sobrecalentamiento",
                                  value: "overheat",
                                },
                                {
                                  label: "Problemas con el lente",
                                  value: "lens",
                                },
                                { label: "Otros", value: "other" },
                              ]
                            : [
                                {
                                  label: "Mantenimiento preventivo",
                                  value: "preventive",
                                },
                                {
                                  label: "Mantenimiento correctivo",
                                  value: "corrective",
                                },
                                {
                                  label: "Limpieza de filtros",
                                  value: "filter-cleaning",
                                },
                                {
                                  label: "Calibración de imagen",
                                  value: "calibration",
                                },
                                { label: "Otros", value: "other" },
                              ]
                        }
                      />
                    )}
                  />
                  {isOtherFault && (
                    <div className="mt-3">
                      <Controller
                        name="description_other_fault"
                        control={control}
                        render={({ field: { onChange, value, name } }) => (
                          <TextArea
                            label={
                              isRepair
                                ? "Describa la falla"
                                : "Describa el tipo de mantenimiento"
                            }
                            name={name}
                            value={value}
                            error={error(name)}
                            helperText={errorMessage(name)}
                            rows={3}
                            onChange={onChange}
                            placeholder={
                              isRepair
                                ? "Describa la falla del equipo"
                                : "Describa el tipo de mantenimiento necesario"
                            }
                          />
                        )}
                      />
                    </div>
                  )}
                </div>
              )}
              {isOther && (
                <div className="sm:col-span-2">
                  <Controller
                    name="description_other_fault"
                    control={control}
                    render={({ field: { onChange, value, name } }) => (
                      <TextArea
                        label="¿Qué tipo de servicio desea?"
                        name={name}
                        value={value}
                        error={error(name)}
                        helperText={errorMessage(name)}
                        required={required(name)}
                        rows={3}
                        onChange={onChange}
                        placeholder="Describa el servicio que necesita"
                      />
                    )}
                  />
                </div>
              )}
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
