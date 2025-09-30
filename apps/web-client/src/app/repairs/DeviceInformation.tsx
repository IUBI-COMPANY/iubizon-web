import { Input } from "@/components/ui/Input";
import { Form } from "@/components/ui/Form";
import { ObjectSchema } from "yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormUtils } from "@/hooks/useFormUtils";
import React from "react";
import { Button } from "@/components/ui/Button";

interface Props {
  repairFormData: object;
  setRepairFormData: (formData: DeviceFormData) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  stepsCompleted: number[];
  setStepsCompleted: (steps: number[]) => void;
}

interface DeviceFormData {
  productName: string;
  faultDescription: string;
}

export const DeviceInformation = ({
  repairFormData,
  setRepairFormData,
  currentStep,
  setCurrentStep,
  stepsCompleted,
  setStepsCompleted,
}: Props) => {
  const schema: ObjectSchema<DeviceFormData> = yup.object({
    productName: yup.string().required(),
    faultDescription: yup.string().required(),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DeviceFormData>({
    resolver: yupResolver(schema),
  });

  const { required, error, errorMessage } = useFormUtils({ errors, schema });
  const onSubmit = (formData: DeviceFormData) => {
    setRepairFormData({ ...repairFormData, ...formData });
    setCurrentStep(currentStep + 1);
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
                      label="Producto"
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
                  name="faultDescription"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Input
                      label="Descripción del problema"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                      placeholder="Ej. No enciende, no proyecta imagen, manchas, etc."
                    />
                  )}
                />
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
              <Button
                block
                variant="primary"
                type="submit"
                onClick={() =>
                  setStepsCompleted([...stepsCompleted, currentStep])
                }
              >
                {currentStep === 2 ? "Finalizar" : "Siguiente"}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
