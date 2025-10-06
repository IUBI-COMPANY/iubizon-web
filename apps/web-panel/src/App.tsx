import BaseLayout from "@/app/dashboard";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BaseLayout />
    </ThemeProvider>
  );
}
