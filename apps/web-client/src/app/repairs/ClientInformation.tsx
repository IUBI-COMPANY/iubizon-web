"use client";

import React from "react";
import { Input } from "@/components/ui/Input";
import * as yup from "yup";
import { Form } from "@/components/ui/Form";
import { ObjectSchema } from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormUtils } from "@/hooks/useFormUtils";
import { Select } from "@/components/ui/Select";
import countriesISO from "@/data-list/countriesISO.json";
import { Button } from "@/components/ui/Button";

interface Props {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  stepsCompleted: number[];
  setStepsCompleted: (steps: number[]) => void;
  addLocalStorageForm: (data: object) => void;
  current?: number;
  hideControls?: boolean;
}

interface ClientFormData {
  fullName: string;
  email: string;
  phone: Phone;
}

export const ClientInformation = ({
  currentStep,
  setCurrentStep,
  stepsCompleted,
  setStepsCompleted,
  addLocalStorageForm,
}: Props) => {
  const schema: ObjectSchema<ClientFormData> = yup.object({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.object({
      prefix: yup.string().required(),
      number: yup.number().required(),
    }),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ClientFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      phone: {
        prefix: "+51",
      },
    },
  });

  const { required, error, errorMessage } = useFormUtils({ errors, schema });

  const onSubmit = (formData: ClientFormData) => {
    if (!stepsCompleted.includes(currentStep))
      setStepsCompleted([...stepsCompleted, currentStep]);
    addLocalStorageForm(formData);
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="w-full">
      <div className="text-2xl text-center text-secondary font-semibold">
        Datos de contacto
      </div>
      <div className="mt-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-4">
              <div className="sm:col-span-4">
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Input
                      label="Nombres completos"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                      placeholder="Tu nombre y apellidos"
                    />
                  )}
                />
              </div>
              <div className="sm:col-span-4">
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Input
                      label="Email"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      onChange={onChange}
                      type="email"
                      required={required(name)}
                      placeholder="tucorreo@ejemplo.com"
                    />
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-4">
              <div className="sm:col-span-1">
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
              <div className="sm:col-span-3">
                <Controller
                  name="phone.number"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Input
                      label="Teléfono"
                      placeholder="9XXXXXXXX"
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
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button block disabled variant="secondary" type="button">
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
