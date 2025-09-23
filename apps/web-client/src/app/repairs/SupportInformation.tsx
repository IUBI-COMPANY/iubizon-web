import { ObjectSchema } from "yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormUtils } from "@/hooks/useFormUtils";
import { twMerge } from "tailwind-merge";
import React from "react";
import { Form } from "@/components/ui/Form";
import { Switch } from "@/components/ui/Switch";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { Button } from "@/components/ui/Button";

interface Props {
  repairFormData: object;
  setRepairFormData: (formData: SupportFormData) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

interface SupportFormData {
  visitType: string;
}

export const SupportInformation = ({
  repairFormData,
  setRepairFormData,
  currentStep,
  setCurrentStep,
}: Props) => {
  const schema: ObjectSchema<SupportFormData> = yup.object({
    visitType: yup.string().required(),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<SupportFormData>({
    resolver: yupResolver(schema),
  });

  const repairVisitType = watch("visitType");

  const { required, error, errorMessage } = useFormUtils({ errors, schema });
  const onSubmit = (formData: SupportFormData) => {
    setRepairFormData({ ...repairFormData, ...formData });
  };

  return (
    <div className="w-full">
      <div className="mt-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Controller
                  name="visitType"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <RadioGroup
                      label="¿Qué tipo de servicio deseas?"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                      options={[
                        {
                          label: "Realizar visita a nuestro local",
                          value: "local",
                        },
                        { label: "Visita técnica a domicilio", value: "house" },
                      ]}
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
