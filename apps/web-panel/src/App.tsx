import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BaseLayout from "@/app/dashboard";
import ProductsPage from "@/app/dashboard/productos";
import BannersPage from "@/app/dashboard/banners";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardContent />} />
            <Route path="productos" element={<ProductsPage />} />
            <Route path="banners" element={<BannersPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function DashboardContent() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Bienvenido al panel de administración
        </p>
      </div>
    </div>
  );
}
