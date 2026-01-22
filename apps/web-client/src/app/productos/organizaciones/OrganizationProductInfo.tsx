import { Form } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { InputNumber } from "@/components/ui/InputNumber";
import * as yup from "yup";
import { ObjectSchema } from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormUtils } from "@/hooks/useFormUtils";
import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { OrganizationProductStep1 } from "@/components/ui/OrganizationsProductRequestForm";
import { ArrowRight, Plus, X, GripVertical } from "lucide-react";
import { TextArea } from "@/components/ui/TextArea";
import { useNotification } from "@/components/ui/Notification";

interface ProductItem {
  id: string;
  quantity: number;
  brand_and_model: string;
}

interface Props {
  globalStep: number;
  productFormData: Partial<OrganizationProductStep1>;
  setProductFormData: (data: Partial<OrganizationProductStep1>) => void;
  addLocalStorageData: (data: object) => void;
  setCurrentStepToLocalStorage: (step: number) => void;
}

export const OrganizationProductInfo = ({
  globalStep,
  productFormData,
  setProductFormData,
  addLocalStorageData,
  setCurrentStepToLocalStorage,
}: Props) => {
  const { showNotification, NotificationComponent } = useNotification();

  // Initialize products from product_list or create default
  const initializeProducts = (): ProductItem[] => {
    if (
      productFormData?.product_list &&
      productFormData.product_list.length > 0
    ) {
      return productFormData.product_list;
    }
    return [{ id: crypto.randomUUID(), quantity: 1, brand_and_model: "" }];
  };

  const [products, setProducts] = useState<ProductItem[]>(initializeProducts());

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const schema = yup.object({
    description_more_details: yup.string().notRequired(),
  }) as ObjectSchema<
    Pick<OrganizationProductStep1, "description_more_details">
  >;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Pick<OrganizationProductStep1, "description_more_details">>({
    resolver: yupResolver(schema),
    defaultValues: {
      description_more_details: productFormData?.description_more_details || "",
    },
  });

  const { error, errorMessage } = useFormUtils({ errors, schema });

  const addProduct = () => {
    setProducts([
      ...products,
      { id: crypto.randomUUID(), quantity: 1, brand_and_model: "" },
    ]);
  };

  const removeProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const updateProduct = (
    id: string,
    field: "quantity" | "brand_and_model",
    value: string | number,
  ) => {
    // Ensure quantity is at least 1
    const processedValue =
      field === "quantity" ? Math.max(1, Number(value) || 1) : value;

    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, [field]: processedValue } : p,
      ),
    );
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newProducts = [...products];
    const draggedItem = newProducts[draggedIndex];
    newProducts.splice(draggedIndex, 1);
    newProducts.splice(index, 0, draggedItem);

    setProducts(newProducts);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const onSubmit = (
    formData: Pick<OrganizationProductStep1, "description_more_details">,
  ) => {
    // Validate products
    const hasEmptyProduct = products.some(
      (p) => !p.brand_and_model.trim() || p.quantity < 1,
    );
    if (hasEmptyProduct) {
      showNotification(
        "warning",
        "Por favor completa todos los productos antes de continuar",
        "Productos incompletos",
      );
      return;
    }

    const completeFormData = {
      product_list: products,
      description_more_details: formData.description_more_details,
    };

    setProductFormData({ ...productFormData, ...completeFormData });
    addLocalStorageData(completeFormData);
    setCurrentStepToLocalStorage(globalStep + 1);
  };

  return (
    <div className="w-full">
      <div className="text-2xl text-center text-secondary font-semibold">
        Productos que necesitas
      </div>
      <div className="text-sm text-center text-gray-600 mt-2 mb-6">
        Agrega los productos o proyectores que tu organización requiere
      </div>
      <div className="mt-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mx-auto max-w-xl">
            {/* Products List */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Lista de Productos <span className="text-red-500">*</span>
              </label>
              {products.map((product, index) => (
                <div
                  key={product.id}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDragEnd={handleDragEnd}
                  className={`bg-white border-2 rounded-lg p-4 transition-all ${
                    draggedIndex === index
                      ? "border-primary shadow-lg opacity-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Drag Handle */}
                    <div className="cursor-move pt-2 text-gray-400 hover:text-gray-600">
                      <GripVertical className="w-5 h-5" />
                    </div>

                    {/* Inputs */}
                    <div className="flex-1 grid grid-cols-12 gap-3">
                      <div className="col-span-3">
                        <InputNumber
                          name={`quantity-${product.id}`}
                          label=""
                          value={product.quantity}
                          onChange={(value) =>
                            updateProduct(product.id, "quantity", value)
                          }
                          placeholder="Cant."
                          min={1}
                        />
                      </div>
                      <div className="col-span-9">
                        <Input
                          name={`brand_and_model-${product.id}`}
                          label=""
                          value={product.brand_and_model}
                          onChange={(value) =>
                            updateProduct(product.id, "brand_and_model", value)
                          }
                          placeholder="Marca y Modelo (Ej: Epson PowerLite 980W)"
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 pt-2">
                      {index === products.length - 1 && (
                        <button
                          type="button"
                          onClick={addProduct}
                          className="p-1.5 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                          title="Agregar producto"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      )}
                      {products.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeProduct(product.id)}
                          className="p-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                          title="Eliminar producto"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-xs text-gray-500 mt-2">
                💡 Arrastra los productos para reordenarlos
              </p>
            </div>

            {/* Additional Details */}
            <div className="sm:col-span-2">
              <Controller
                name="description_more_details"
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <TextArea
                    label="Información adicional (Opcional)"
                    name={name}
                    value={value}
                    error={error(name)}
                    helperText={
                      errorMessage(name) ||
                      "Puedes agregar detalles sobre el uso, plazos, presupuesto u otra información relevante"
                    }
                    required={false}
                    onChange={onChange}
                    placeholder="Información adicional sobre tu solicitud..."
                    rows={4}
                  />
                )}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button type="submit" size="md" variant="primary">
                <div className="flex gap-2 items-center justify-center">
                  Continuar
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Button>
            </div>
          </div>
        </Form>
      </div>
      {NotificationComponent}
    </div>
  );
};
