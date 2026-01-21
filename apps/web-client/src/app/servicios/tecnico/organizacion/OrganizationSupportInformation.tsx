import React from "react";
import * as yup from "yup";
import { ObjectSchema } from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormUtils } from "@/hooks/useFormUtils";
import { Form } from "@/components/ui/Form";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { Button } from "@/components/ui/Button";
import { TimePicker } from "@/components/ui/TimePicker";
import { DatePicker } from "@/components/ui/DatePicker";
import { Input } from "@/components/ui/Input";
import { Alert } from "@/components/ui/Alert";
import { Select } from "@/components/ui/Select";
import { peruUbigeo } from "@/data-list/ubigeos";
import { Checkbox } from "@/components/ui/Checkbox";
import { sendTechnicalServiceEmail } from "./actions";
import { ArrowLeft, SendIcon } from "lucide-react";
import { BusinessAddress } from "@/components/ui/BusinessAddress";
import { OrganizationRepairStep3 } from "@/components/ui/OrganizationsTechnicalServiceForm";

interface Props {
  globalStep: number;
  repairsFormData: Partial<TechnicalService>;
  setRepairsFormData: (data: Partial<TechnicalService>) => void;
  addLocalStorageData: (data: object) => void;
  setCurrentStepToLocalStorage: (step: number) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const OrganizationSupportInformation = ({
  globalStep,
  repairsFormData,
  setRepairsFormData,
  addLocalStorageData,
  setCurrentStepToLocalStorage,
  loading,
  setLoading,
}: Props) => {
  const schema = yup.object({
    attendance_type: yup.string().required(),
    visit_date: yup.string().when("attendance_type", {
      is: "home_visit",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    visit_time: yup.string().when("attendance_type", {
      is: "home_visit",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    district: yup.string().when("attendance_type", {
      is: "home_visit || send_to_store",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    address: yup.string().when("attendance_type", {
      is: "home_visit || send_to_store",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    department: yup.string().when("attendance_type", {
      is: "send_to_store",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    province: yup.string().when("attendance_type", {
      is: "send_to_store",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    terms_and_conditions: yup.boolean().required(),
  }) as ObjectSchema<OrganizationRepairStep3>;

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<OrganizationRepairStep3>({
    resolver: yupResolver(schema),
    defaultValues: {
      attendance_type: repairsFormData?.attendance_type || "go_to_store",
      visit_date: repairsFormData?.visit_date || "",
      visit_time: repairsFormData?.visit_time || "",
      department: repairsFormData?.department || "",
      province: repairsFormData?.province || "",
      district: repairsFormData?.district || "",
      address: repairsFormData?.address || "",
    },
  });

  const { required, error, errorMessage } = useFormUtils({ errors, schema });

  const isLocalVisit = watch("attendance_type") === "go_to_store";
  const isHouseVisit = watch("attendance_type") === "home_visit";
  const isShipping = watch("attendance_type") === "send_to_store";

  const departmentSelected = watch("department");
  const _departmentSelected = peruUbigeo.find(
    (dep) => dep.name === departmentSelected,
  );
  const provinceSelected = watch("province");
  const _provinceSelected = _departmentSelected?.provinces.find(
    (prov) => prov.name === provinceSelected,
  );

  const districtsByLimaProvince = peruUbigeo[13].provinces[0].districts;

  const onSubmit = async (formData: OrganizationRepairStep3) => {
    setLoading(true);
    setRepairsFormData({ ...repairsFormData, ...formData });
    addLocalStorageData(formData);

    const data: TechnicalService = JSON.parse(
      localStorage.getItem("organization_formData") || "{}",
    );

    try {
      await sendTechnicalServiceEmail(data);
      setLoading(false);
      setTimeout(() => {
        setCurrentStepToLocalStorage(globalStep + 1);
      }, 150);
    } catch (error) {
      console.error("Error sending repair email: ", error);
      setLoading(false);

      alert(
        "Hubo un error al enviar la solicitud. Por favor, inténtelo nuevamente o contacte con soporte.",
      );
    }
  };

  return (
    <div className="w-full">
      <div className="text-2xl text-center text-secondary font-semibold">
        Tipo de servicio
      </div>
      <div className="mt-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Controller
                  name="attendance_type"
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
                          label: "Quiero ir al local",
                          value: "go_to_store",
                        },
                        {
                          label: "Quiero una visita técnica a mi domicilio",
                          value: "home_visit",
                          message: "Solo para Lima",
                        },
                        {
                          label: "Quiero enviar mi producto al local",
                          value: "send_to_store",
                          message: "Solo para provincias",
                        },
                        {
                          label: "Solicitar cotización",
                          value: "quotation",
                        },
                        {
                          label: "Otro",
                          value: "other",
                        },
                      ]}
                    />
                  )}
                />

                {isLocalVisit && <BusinessAddress />}
                {isHouseVisit && (
                  <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 my-6">
                    <div className="sm:col-span-1">
                      <Controller
                        name="visit_date"
                        control={control}
                        render={({ field: { onChange, value, name } }) => (
                          <DatePicker
                            label="Dinos qué día podemos visitarte"
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
                    <div className="sm:col-span-1">
                      <Controller
                        name="visit_time"
                        control={control}
                        render={({ field: { onChange, value, name } }) => (
                          <TimePicker
                            label="Dinos a qué hora podemos visitarte"
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
                )}
                {isShipping && (
                  <>
                    <BusinessAddress />
                    <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2 my-6">
                      <Alert
                        type="info"
                        message="Necesitamos tu dirección para poder reenviarte tu equipo una vez hagamos culminado con el servicio."
                      />
                      <div className="sm:col-span-1">
                        <Controller
                          name="department"
                          control={control}
                          render={({ field: { onChange, value, name } }) => (
                            <Select
                              label="Departamento"
                              placeholder="Ej. Lima"
                              name={name}
                              value={value}
                              error={error(name)}
                              helperText={errorMessage(name)}
                              required={required(name)}
                              onChange={onChange}
                              options={peruUbigeo.map((dep) => ({
                                value: dep.name,
                                label: dep.name,
                              }))}
                            />
                          )}
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <Controller
                          name="province"
                          control={control}
                          render={({ field: { onChange, value, name } }) => (
                            <Select
                              label="Provincia"
                              placeholder="Ej. Lima"
                              name={name}
                              value={value}
                              error={error(name)}
                              helperText={errorMessage(name)}
                              required={required(name)}
                              onChange={onChange}
                              options={
                                _departmentSelected?.provinces.map((prov) => ({
                                  value: prov.name,
                                  label: prov.name,
                                })) || []
                              }
                            />
                          )}
                        />
                      </div>
                    </div>
                  </>
                )}
                {(isHouseVisit || isShipping) && (
                  <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6 my-6">
                    <div className="sm: col-span-2">
                      <Controller
                        name="district"
                        control={control}
                        render={({ field: { onChange, value, name } }) => (
                          <Select
                            label="Distrito"
                            placeholder="Ej. Chorrillos"
                            name={name}
                            value={value}
                            error={error(name)}
                            helperText={errorMessage(name)}
                            required={required(name)}
                            onChange={onChange}
                            options={
                              _provinceSelected?.districts.map((dist) => ({
                                value: dist.name,
                                label: dist.name,
                              })) ||
                              districtsByLimaProvince.map((dist) => ({
                                value: dist.name,
                                label: dist.name,
                              }))
                            }
                          />
                        )}
                      />
                    </div>
                    <div className="sm: col-span-4">
                      <Controller
                        name="address"
                        control={control}
                        render={({ field: { onChange, value, name } }) => (
                          <Input
                            label="Dirección"
                            placeholder="Av. Huaylas 123"
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
                )}
                <div className="sm: col-span-2">
                  <Controller
                    name="terms_and_conditions"
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
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    block
                    variant="secondary"
                    type="button"
                    disabled={loading}
                    onClick={() => setCurrentStepToLocalStorage(globalStep - 1)}
                  >
                    <div className="flex gap-2 items-center justify-center">
                      <ArrowLeft /> <span>Atrás</span>
                    </div>
                  </Button>
                  <Button
                    block
                    variant="primary"
                    type="submit"
                    loading={loading}
                  >
                    <div className="flex gap-2 items-center justify-center">
                      <SendIcon /> <span>Enviar solicitud</span>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
