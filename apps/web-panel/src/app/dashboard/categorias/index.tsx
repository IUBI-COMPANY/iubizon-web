import { useState } from "react";
import {
  IconPlus,
  IconTrash,
  IconEdit,
  IconFolders,
  IconEye,
  IconEyeOff,
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
import { Checkbox } from "@/components/ui/checkbox";

// Datos ficticios de categorías
const initialCategories: Category[] = [
  {
    id: "cat-1",
    name: "Proyectores",
    slug: "proyectores",
    description: "Proyectores para negocios, educación y uso personal",
    parentId: null,
    level: 0,
    order: 1,
    imageUrl: "/images/education-projectors.jpg",
    icon: "projector",
    isActive: true,
    seo: {
      title: "Proyectores - iubizon",
      description:
        "Encuentra los mejores proyectores para tu negocio o institución educativa",
      keywords: ["proyectores", "epson", "viewsonic", "multimedia"],
    },
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2025-01-10"),
  },
  {
    id: "cat-2",
    name: "Proyectores Educativos",
    slug: "proyectores-educativos",
    description: "Proyectores ideales para salones de clase y auditorios",
    parentId: "cat-1",
    level: 1,
    order: 1,
    imageUrl: "/images/education-projectors.jpg",
    icon: "school",
    isActive: true,
    seo: {
      title: "Proyectores Educativos - iubizon",
      description: "Proyectores especializados para instituciones educativas",
      keywords: ["proyectores educativos", "aula", "colegio", "universidad"],
    },
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2025-01-10"),
  },
  {
    id: "cat-3",
    name: "Proyectores Empresariales",
    slug: "proyectores-empresariales",
    description:
      "Proyectores para presentaciones corporativas y salas de reuniones",
    parentId: "cat-1",
    level: 1,
    order: 2,
    imageUrl: "/images/epson-banner.jpg",
    icon: "briefcase",
    isActive: true,
    seo: {
      title: "Proyectores Empresariales - iubizon",
      description: "Proyectores profesionales para tu empresa",
      keywords: [
        "proyectores empresariales",
        "negocios",
        "presentaciones",
        "oficina",
      ],
    },
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2025-01-10"),
  },
  {
    id: "cat-4",
    name: "Accesorios",
    slug: "accesorios",
    description: "Accesorios y complementos para proyectores",
    parentId: null,
    level: 0,
    order: 2,
    imageUrl: "/images/accesorios.png",
    icon: "plug",
    isActive: true,
    seo: {
      title: "Accesorios para Proyectores - iubizon",
      description:
        "Cables, controles remotos y más accesorios para proyectores",
      keywords: ["accesorios", "cables", "controles", "soportes"],
    },
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2025-01-10"),
  },
  {
    id: "cat-5",
    name: "Cables y Conectores",
    slug: "cables-conectores",
    description: "Cables HDMI, VGA y otros conectores",
    parentId: "cat-4",
    level: 1,
    order: 1,
    imageUrl: "/images/powerCable.png",
    icon: "cable",
    isActive: true,
    createdAt: new Date("2024-02-05"),
    updatedAt: new Date("2025-01-10"),
  },
  {
    id: "cat-6",
    name: "Controles Remotos",
    slug: "controles-remotos",
    description: "Controles remotos originales y universales",
    parentId: "cat-4",
    level: 1,
    order: 2,
    imageUrl: "/images/remoteControl.png",
    icon: "remote",
    isActive: false,
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2025-01-10"),
  },
  {
    id: "cat-7",
    name: "Proyectores de Corta Distancia",
    slug: "proyectores-corta-distancia",
    description: "Proyectores de corta distancia para aulas pequeñas",
    parentId: "cat-2",
    level: 2,
    order: 1,
    imageUrl: "/images/education-projectors.jpg",
    icon: "projector-short",
    isActive: true,
    seo: {
      title: "Proyectores de Corta Distancia - iubizon",
      description:
        "Proyectores de corta distancia ideales para espacios reducidos",
      keywords: ["proyectores corta distancia", "ultra corto", "educación"],
    },
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2025-01-10"),
  },
  {
    id: "cat-8",
    name: "Proyectores Estándar",
    slug: "proyectores-estandar-educativos",
    description: "Proyectores estándar para aulas medianas y grandes",
    parentId: "cat-2",
    level: 2,
    order: 2,
    imageUrl: "/images/education-projectors.jpg",
    icon: "projector-standard",
    isActive: true,
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2025-01-10"),
  },
  {
    id: "cat-9",
    name: "Proyectores Portátiles",
    slug: "proyectores-portatiles-empresariales",
    description: "Proyectores compactos y ligeros para presentaciones móviles",
    parentId: "cat-3",
    level: 2,
    order: 1,
    imageUrl: "/images/epson-banner.jpg",
    icon: "briefcase-portable",
    isActive: true,
    seo: {
      title: "Proyectores Portátiles Empresariales - iubizon",
      description: "Proyectores ligeros y fáciles de transportar",
      keywords: ["proyectores portátiles", "móviles", "presentaciones"],
    },
    createdAt: new Date("2024-03-05"),
    updatedAt: new Date("2025-01-10"),
  },
  {
    id: "cat-10",
    name: "Proyectores de Instalación Fija",
    slug: "proyectores-instalacion-fija",
    description: "Proyectores de alto rendimiento para salas de conferencias",
    parentId: "cat-3",
    level: 2,
    order: 2,
    imageUrl: "/images/epson-banner.jpg",
    icon: "projector-fixed",
    isActive: true,
    createdAt: new Date("2024-03-05"),
    updatedAt: new Date("2025-01-10"),
  },
  {
    id: "cat-11",
    name: "Cables HDMI",
    slug: "cables-hdmi",
    description: "Cables HDMI de diferentes longitudes y versiones",
    parentId: "cat-5",
    level: 2,
    order: 1,
    imageUrl: "/images/powerCable.png",
    icon: "cable-hdmi",
    isActive: true,
    createdAt: new Date("2024-03-10"),
    updatedAt: new Date("2025-01-10"),
  },
  {
    id: "cat-12",
    name: "Cables VGA",
    slug: "cables-vga",
    description: "Cables VGA para equipos legacy",
    parentId: "cat-5",
    level: 2,
    order: 2,
    imageUrl: "/images/powerCable.png",
    icon: "cable-vga",
    isActive: true,
    createdAt: new Date("2024-03-10"),
    updatedAt: new Date("2025-01-10"),
  },
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  // Estado del formulario
  const [formData, setFormData] = useState<
    Omit<Category, "id" | "createdAt" | "updatedAt">
  >({
    name: "",
    slug: "",
    description: "",
    parentId: null,
    level: 0,
    order: 1,
    imageUrl: "",
    icon: "",
    isActive: true,
    seo: {
      title: "",
      description: "",
      keywords: [],
    },
  });

  // Resetear formulario
  const resetForm = () => {
    setFormData({
      name: "",
      slug: "",
      description: "",
      parentId: null,
      level: 0,
      order: 1,
      imageUrl: "",
      icon: "",
      isActive: true,
      seo: {
        title: "",
        description: "",
        keywords: [],
      },
    });
    setEditingCategory(null);
  };

  // Generar slug automáticamente del nombre
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  // Actualizar slug cuando cambia el nombre
  const handleNameChange = (name: string) => {
    setFormData({
      ...formData,
      name,
      slug: generateSlug(name),
    });
  };

  // Agregar categoría
  const handleAddCategory = () => {
    const newCategory: Category = {
      ...formData,
      id: `cat-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setCategories([...categories, newCategory]);
    setIsSheetOpen(false);
    resetForm();
  };

  // Editar categoría
  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      slug: category.slug,
      description: category.description,
      parentId: category.parentId,
      level: category.level,
      order: category.order || 1,
      imageUrl: category.imageUrl,
      icon: category.icon,
      isActive: category.isActive,
      seo: category.seo || { title: "", description: "", keywords: [] },
    });
    setIsSheetOpen(true);
  };

  // Actualizar categoría
  const handleUpdateCategory = () => {
    if (editingCategory) {
      setCategories(
        categories.map((c) =>
          c.id === editingCategory.id
            ? {
                ...formData,
                id: c.id,
                createdAt: c.createdAt,
                updatedAt: new Date(),
              }
            : c,
        ),
      );
      setIsSheetOpen(false);
      resetForm();
    }
  };

  // Eliminar categoría
  const handleDeleteCategory = (id: string) => {
    // Verificar si tiene subcategorías
    const hasChildren = categories.some((c) => c.parentId === id);
    if (hasChildren) {
      alert("No se puede eliminar una categoría que tiene subcategorías");
      return;
    }
    setCategories(categories.filter((c) => c.id !== id));
  };

  // Obtener nombre de la categoría padre
  const getParentName = (parentId: string | null | undefined) => {
    if (!parentId) return "Ninguna (Raíz)";
    const parent = categories.find((c) => c.id === parentId);
    return parent ? parent.name : "Desconocida";
  };

  // Obtener categorías raíz para el selector de padre
  const getRootCategories = () => {
    return categories.filter((c) => c.level === 0);
  };

  // Obtener categorías ordenadas jerárquicamente
  const getHierarchicalCategories = () => {
    const result: Category[] = [];

    // Primero agregar categorías raíz ordenadas
    const rootCategories = categories
      .filter((c) => c.level === 0)
      .sort((a, b) => (a.order || 0) - (b.order || 0));

    // Función recursiva para agregar subcategorías
    const addChildren = (parentId: string, level: number) => {
      const children = categories
        .filter((c) => c.parentId === parentId)
        .sort((a, b) => (a.order || 0) - (b.order || 0));

      children.forEach((child) => {
        result.push(child);
        // Recursivamente agregar hijos de este hijo
        addChildren(child.id, level + 1);
      });
    };

    // Para cada categoría raíz, agregar sus hijos
    rootCategories.forEach((root) => {
      result.push(root);
      addChildren(root.id, 1);
    });

    return result;
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Categorías</h1>
          <p className="text-muted-foreground">
            Organiza y gestiona las categorías de productos
          </p>
        </div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button onClick={resetForm}>
              <IconPlus className="mr-2 h-4 w-4" />
              Agregar Categoría
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto sm:max-w-[540px]">
            <SheetHeader>
              <SheetTitle>
                {editingCategory ? "Editar Categoría" : "Nueva Categoría"}
              </SheetTitle>
              <SheetDescription>
                {editingCategory
                  ? "Actualiza la información de la categoría"
                  : "Completa los datos para agregar una nueva categoría"}
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre de la Categoría</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="Ej: Proyectores Educativos"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="slug">Slug (URL amigable)</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  placeholder="proyectores-educativos"
                />
                <p className="text-xs text-muted-foreground">
                  Se genera automáticamente del nombre
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descripción</Label>
                <Input
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Descripción breve de la categoría"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="parentId">Categoría Padre</Label>
                <Select
                  value={formData.parentId || "none"}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      parentId: value === "none" ? null : value,
                      level: value === "none" ? 0 : 1,
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una categoría padre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Ninguna (Raíz)</SelectItem>
                    {getRootCategories().map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="order">Orden</Label>
                <Input
                  id="order"
                  type="number"
                  value={formData.order}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      order: parseInt(e.target.value) || 1,
                    })
                  }
                  placeholder="1"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="imageUrl">URL de Imagen</Label>
                <Input
                  id="imageUrl"
                  value={formData.imageUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, imageUrl: e.target.value })
                  }
                  placeholder="/images/categoria.jpg"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="icon">Icono</Label>
                <Input
                  id="icon"
                  value={formData.icon}
                  onChange={(e) =>
                    setFormData({ ...formData, icon: e.target.value })
                  }
                  placeholder="projector"
                />
              </div>

              {/* SEO Section */}
              <div className="border-t pt-4 mt-4">
                <h3 className="text-sm font-semibold mb-3">SEO</h3>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="seo-title">Título SEO</Label>
                    <Input
                      id="seo-title"
                      value={formData.seo?.title || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          seo: { ...formData.seo, title: e.target.value },
                        })
                      }
                      placeholder="Título para buscadores"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="seo-description">Descripción SEO</Label>
                    <Input
                      id="seo-description"
                      value={formData.seo?.description || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          seo: {
                            ...formData.seo,
                            description: e.target.value,
                          },
                        })
                      }
                      placeholder="Descripción para buscadores"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="seo-keywords">
                      Palabras clave (separadas por coma)
                    </Label>
                    <Input
                      id="seo-keywords"
                      value={formData.seo?.keywords?.join(", ") || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          seo: {
                            ...formData.seo,
                            keywords: e.target.value
                              .split(",")
                              .map((k) => k.trim())
                              .filter((k) => k.length > 0),
                          },
                        })
                      }
                      placeholder="proyector, educación, multimedia"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, isActive: !!checked })
                  }
                />
                <Label htmlFor="isActive" className="cursor-pointer">
                  Categoría activa
                </Label>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                className="flex-1"
                onClick={
                  editingCategory ? handleUpdateCategory : handleAddCategory
                }
              >
                {editingCategory ? "Actualizar" : "Agregar"}
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
          </SheetContent>
        </Sheet>
      </div>

      {/* Estadísticas rápidas */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Categorías
            </CardTitle>
            <IconFolders className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Categorías Raíz
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {categories.filter((c) => c.level === 0).length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subcategorías</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {categories.filter((c) => c.level > 0).length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Activas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {categories.filter((c) => c.isActive).length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabla de categorías */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Categorías</CardTitle>
          <CardDescription>
            {categories.length} categorías en el sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Categoría Padre</TableHead>
                  <TableHead className="text-center">Nivel</TableHead>
                  <TableHead className="text-center">Orden</TableHead>
                  <TableHead className="text-center">Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center h-24">
                      No hay categorías disponibles
                    </TableCell>
                  </TableRow>
                ) : (
                  getHierarchicalCategories().map((category) => (
                    <TableRow key={category.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center overflow-hidden flex-shrink-0">
                            {category.imageUrl ? (
                              <img
                                src={category.imageUrl}
                                alt={category.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <IconFolders className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                          <div
                            style={{ marginLeft: `${category.level * 24}px` }}
                            className="flex items-center gap-2"
                          >
                            {category.level > 0 && (
                              <span className="text-muted-foreground">
                                {"└─"}
                              </span>
                            )}
                            <div>
                              <p className="font-medium">{category.name}</p>
                              {category.description && (
                                <p className="text-xs text-muted-foreground">
                                  {category.description.slice(0, 50)}
                                  {category.description.length > 50
                                    ? "..."
                                    : ""}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {category.slug}
                      </TableCell>
                      <TableCell>{getParentName(category.parentId)}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline">{category.level}</Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        {category.order}
                      </TableCell>
                      <TableCell className="text-center">
                        {category.isActive ? (
                          <Badge variant="default" className="gap-1">
                            <IconEye className="h-3 w-3" />
                            Activa
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="gap-1">
                            <IconEyeOff className="h-3 w-3" />
                            Inactiva
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditCategory(category)}
                          >
                            <IconEdit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteCategory(category.id)}
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
