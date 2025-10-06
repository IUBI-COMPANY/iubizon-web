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
import { RepairStep1 } from "@/components/ui/RepairsContactForm";

interface Props {
  globalStep: number;
  repairsFormData: Partial<Repair>;
  setRepairsFormData: (data: Partial<Repair>) => void;
  addLocalStorageData: (data: object) => void;
  setCurrentStepToLocalStorage: (step: number) => void;
  current?: number;
  hideControls?: boolean;
}

export const ClientInformation = ({
  globalStep,
  repairsFormData,
  setRepairsFormData,
  addLocalStorageData,
  setCurrentStepToLocalStorage,
}: Props) => {
  const schema: ObjectSchema<RepairStep1> = yup.object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
    phone_prefix: yup.string().required(),
    phone_number: yup
      .string()
      .required()
      .test("is-valid-phone", "Número de teléfono inválido", function (value) {
        const { phone_prefix } = this.parent;
        return regexPhoneByCountries(phone_prefix).test(value);
      }),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RepairStep1>({
    resolver: yupResolver(schema),
    defaultValues: {
      first_name: repairsFormData?.first_name || "",
      last_name: repairsFormData?.last_name || "",
      email: repairsFormData?.email || "",
      phone_prefix: "+51",
      phone_number: repairsFormData?.phone_number || undefined,
    },
  });

  const { required, error, errorMessage } = useFormUtils({ errors, schema });

  const regexPhoneByCountries = (phone_prefix: string) => {
    const country = countriesISO.find(
      (country) => country.phonePrefix === phone_prefix,
    );
    const regex = country?.regex || "^\\d{4,}$";
    return new RegExp(regex);
  };

  const onSubmit = (formData: RepairStep1) => {
    setRepairsFormData({ ...repairsFormData, ...formData });
    addLocalStorageData(formData);
    setCurrentStepToLocalStorage(globalStep + 1);
  };

  return (
    <div className="w-full">
      <div className="text-2xl text-center text-secondary font-semibold">
        Datos de contacto
      </div>
      <div className="mt-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-4">
              <div className="sm:col-span-2">
                <Controller
                  name="first_name"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Input
                      label="Nombres"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                      placeholder="Tus nombres"
                    />
                  )}
                />
              </div>
              <div className="sm:col-span-2">
                <Controller
                  name="last_name"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Input
                      label="Apellidos"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                      placeholder="Tus apellidos"
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
                  name="phone_prefix"
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
                  name="phone_number"
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
            <div className="mt-2 grid grid-cols-1 gap-3">
              {globalStep !== 0 && (
                <Button block disabled variant="secondary" type="button">
                  Atrás
                </Button>
              )}
              <Button block variant="primary" type="submit">
                Siguiente
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
