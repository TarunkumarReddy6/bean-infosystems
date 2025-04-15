
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ApplicationDevelopment from "./pages/services/ApplicationDevelopment";
import ConsultingServices from "./pages/services/ConsultingServices";
import AdvisoryServices from "./pages/services/AdvisoryServices";
import Clients from "./pages/Clients";
import Careers from "./pages/Careers";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
          <Route path="/services/application-development" element={<MainLayout><ApplicationDevelopment /></MainLayout>} />
          <Route path="/services/consulting-services" element={<MainLayout><ConsultingServices /></MainLayout>} />
          <Route path="/services/advisory-services" element={<MainLayout><AdvisoryServices /></MainLayout>} />
          <Route path="/clients" element={<MainLayout><Clients /></MainLayout>} />
          <Route path="/careers" element={<MainLayout><Careers /></MainLayout>} />
          <Route path="/product" element={<MainLayout><Product /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
