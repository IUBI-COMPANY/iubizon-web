import { Input } from "@/components/ui/Input";
import { Form } from "@/components/ui/Form";
import { ObjectSchema } from "yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormUtils } from "@/hooks/useFormUtils";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

interface Props {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  repairsFormData: Partial<RepairsContact>;
  setRepairsFormData: (data: object) => void;
  stepsCompleted: number[];
  setStepsCompleted: (steps: number[]) => void;
  addLocalStorageData: (data: object) => void;
  addStepToLocalStorage: (step: number, steps: number[]) => void;
}

interface DeviceFormData {
  productName: string;
  deviceFault: string;
  otherFault?: string;
}

export const DeviceInformation = ({
  currentStep,
  setCurrentStep,
  repairsFormData,
  setRepairsFormData,
  stepsCompleted,
  setStepsCompleted,
  addLocalStorageData,
  addStepToLocalStorage,
}: Props) => {
  const schema: ObjectSchema<DeviceFormData> = yup.object({
    productName: yup.string().required(),
    deviceFault: yup.string().required(),
    otherFault: yup.string().when("deviceFault", {
      is: "other",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<DeviceFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      productName: repairsFormData?.product_name || "",
      deviceFault: repairsFormData?.device_fault || "",
      otherFault: repairsFormData?.other_fault || "",
    },
  });

  const { required, error, errorMessage } = useFormUtils({ errors, schema });

  const isOtherFault = watch("deviceFault") === "other";

  const onSubmit = (formData: DeviceFormData) => {
    if (!stepsCompleted.includes(currentStep))
      setStepsCompleted([...stepsCompleted, currentStep]);
    setRepairsFormData({ ...repairsFormData, ...formData });
    addLocalStorageData(formData);
    setCurrentStep(currentStep + 1);
    addStepToLocalStorage(currentStep + 1, [...stepsCompleted, currentStep]);
  };

  return (
    <div className="w-full">
      <div className="text-2xl text-center text-secondary font-semibold">
        Datos del equipo
      </div>
      <div className="mt-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Controller
                  name="productName"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Input
                      label="Modelo del Proyector"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                      placeholder="Epson, BenQ, Optoma, etc."
                    />
                  )}
                />
              </div>
              <div className="sm:col-span-2">
                <Controller
                  name="deviceFault"
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
                        { label: "No enciende", value: "off" },
                        { label: "No proyecta imagen", value: "no-image" },
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
                {isOtherFault && (
                  <div className="mt-3">
                    <Controller
                      name="otherFault"
                      control={control}
                      render={({ field: { onChange, value, name } }) => (
                        <Input
                          label="Describa la falla"
                          name={name}
                          value={value}
                          onChange={onChange}
                          placeholder="Describa la falla del equipo"
                        />
                      )}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                block
                variant="secondary"
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Atrás
              </Button>
              <Button block variant="primary" type="submit">
                {currentStep === 2 ? "Finalizar" : "Siguiente"}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
