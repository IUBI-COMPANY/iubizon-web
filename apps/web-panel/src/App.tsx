import BaseLayout from "@/app/dashboard/page.tsx";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BaseLayout />
    </ThemeProvider>
  );
}
