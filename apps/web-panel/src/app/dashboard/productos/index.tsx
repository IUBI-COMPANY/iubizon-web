"use client";

import { useState } from "react";
import {
  IconPlus,
  IconTrash,
  IconEdit,
  IconPackage,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Tipo de producto
interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  status: "disponible" | "agotado" | "descontinuado";
  image: string;
}

// Datos ficticios de productos
const initialProducts: Product[] = [
  {
    id: "1",
    name: "Proyector Epson PowerLite 980W",
    sku: "EPSON-980W",
    category: "Proyectores",
    price: 2500,
    stock: 15,
    status: "disponible",
    image: "/productos/980W/1.jpg",
  },
  {
    id: "2",
    name: "Proyector Epson PowerLite 975W",
    sku: "EPSON-975W",
    category: "Proyectores",
    price: 2200,
    stock: 8,
    status: "disponible",
    image: "/productos/975W/1.jpg",
  },
  {
    id: "3",
    name: "Proyector ViewSonic PA503S",
    sku: "VS-PA503S",
    category: "Proyectores",
    price: 1800,
    stock: 0,
    status: "agotado",
    image: "/productos/520/1.jpg",
  },
  {
    id: "4",
    name: "Cable HDMI 3 metros",
    sku: "ACC-HDMI-3M",
    category: "Accesorios",
    price: 45,
    stock: 120,
    status: "disponible",
    image: "/images/powerCable.png",
  },
  {
    id: "5",
    name: "Control Remoto Universal",
    sku: "ACC-REMOTE-001",
    category: "Accesorios",
    price: 35,
    stock: 50,
    status: "disponible",
    image: "/images/remoteControl.png",
  },
  {
    id: "6",
    name: "Proyector Epson L210W",
    sku: "EPSON-L210W",
    category: "Proyectores",
    price: 3200,
    stock: 5,
    status: "disponible",
    image: "/productos/L210W/1.jpg",
  },
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Estado del formulario
  const [formData, setFormData] = useState<Omit<Product, "id">>({
    name: "",
    sku: "",
    category: "Proyectores",
    price: 0,
    stock: 0,
    status: "disponible",
    image: "",
  });

  // Resetear formulario
  const resetForm = () => {
    setFormData({
      name: "",
      sku: "",
      category: "Proyectores",
      price: 0,
      stock: 0,
      status: "disponible",
      image: "",
    });
    setEditingProduct(null);
  };

  // Agregar producto
  const handleAddProduct = () => {
    const newProduct: Product = {
      ...formData,
      id: Date.now().toString(),
    };
    setProducts([...products, newProduct]);
    setIsSheetOpen(false);
    resetForm();
  };

  // Editar producto
  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      sku: product.sku,
      category: product.category,
      price: product.price,
      stock: product.stock,
      status: product.status,
      image: product.image,
    });
    setIsSheetOpen(true);
  };

  // Actualizar producto
  const handleUpdateProduct = () => {
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? { ...formData, id: p.id } : p,
        ),
      );
      setIsSheetOpen(false);
      resetForm();
    }
  };

  // Eliminar producto
  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Obtener color del badge según el estado
  const getStatusBadgeVariant = (status: Product["status"]) => {
    switch (status) {
      case "disponible":
        return "default";
      case "agotado":
        return "destructive";
      case "descontinuado":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Productos</h1>
          <p className="text-muted-foreground">
            Gestiona tu inventario de productos
          </p>
        </div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button onClick={resetForm}>
              <IconPlus className="mr-2 h-4 w-4" />
              Agregar Producto
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto sm:max-w-[540px]">
            <SheetHeader>
              <SheetTitle>
                {editingProduct ? "Editar Producto" : "Nuevo Producto"}
              </SheetTitle>
              <SheetDescription>
                {editingProduct
                  ? "Actualiza la información del producto"
                  : "Completa los datos para agregar un nuevo producto"}
              </SheetDescription>
            </SheetHeader>
            <div className="px-6">
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre del Producto</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Ej: Proyector Epson PowerLite"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sku">SKU</Label>
                  <Input
                    id="sku"
                    value={formData.sku}
                    onChange={(e) =>
                      setFormData({ ...formData, sku: e.target.value })
                    }
                    placeholder="Ej: EPSON-980W"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Categoría</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData({ ...formData, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Proyectores">Proyectores</SelectItem>
                      <SelectItem value="Accesorios">Accesorios</SelectItem>
                      <SelectItem value="Pantallas">Pantallas</SelectItem>
                      <SelectItem value="Soportes">Soportes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price">Precio (S/)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        price: parseFloat(e.target.value),
                      })
                    }
                    placeholder="0.00"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="stock">Stock</Label>
                  <Input
                    id="stock"
                    type="number"
                    value={formData.stock}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stock: parseInt(e.target.value),
                      })
                    }
                    placeholder="0"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="status">Estado</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value: Product["status"]) =>
                      setFormData({ ...formData, status: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="disponible">Disponible</SelectItem>
                      <SelectItem value="agotado">Agotado</SelectItem>
                      <SelectItem value="descontinuado">
                        Descontinuado
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="image">URL de Imagen</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    placeholder="/productos/ejemplo/1.jpg"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  className="flex-1"
                  onClick={
                    editingProduct ? handleUpdateProduct : handleAddProduct
                  }
                >
                  {editingProduct ? "Actualizar" : "Agregar"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSheetOpen(false);
                    resetForm();
                  }}
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Estadísticas rápidas */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Productos
            </CardTitle>
            <IconPackage className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{products.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Disponibles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {products.filter((p) => p.status === "disponible").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stock Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {products.reduce((acc, p) => acc + p.stock, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Valor Inventario
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              S/{" "}
              {products
                .reduce((acc, p) => acc + p.price * p.stock, 0)
                .toLocaleString("es-PE", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabla de productos */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Productos</CardTitle>
          <CardDescription>
            {products.length} productos en el inventario
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Producto</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead className="text-right">Precio</TableHead>
                  <TableHead className="text-center">Stock</TableHead>
                  <TableHead className="text-center">Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center h-24">
                      No hay productos disponibles
                    </TableCell>
                  </TableRow>
                ) : (
                  products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center overflow-hidden">
                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <IconPackage className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                          <span className="font-medium">{product.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {product.sku}
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell className="text-right font-medium">
                        S/{" "}
                        {product.price.toLocaleString("es-PE", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className={
                            product.stock === 0
                              ? "text-destructive"
                              : product.stock < 10
                                ? "text-yellow-600"
                                : ""
                          }
                        >
                          {product.stock}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant={getStatusBadgeVariant(product.status)}>
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditProduct(product)}
                          >
                            <IconEdit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <IconTrash className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
