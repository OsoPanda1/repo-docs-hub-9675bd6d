import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Docs from "./pages/Docs";
import DocsHome from "./pages/DocsHome";
import DocsQuickstart from "./pages/DocsQuickstart";
import DocsInfrastructure from "./pages/DocsInfrastructure";
import DocsDatabase from "./pages/DocsDatabase";
import DocsNetwork from "./pages/DocsNetwork";
import DocsAPI from "./pages/DocsAPI";
import DocsComponents from "./pages/DocsComponents";
import DocsConfig from "./pages/DocsConfig";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/docs" element={<Docs />}>
            <Route index element={<DocsHome />} />
            <Route path="quickstart" element={<DocsQuickstart />} />
            <Route path="infrastructure" element={<DocsInfrastructure />} />
            <Route path="database" element={<DocsDatabase />} />
            <Route path="network" element={<DocsNetwork />} />
            <Route path="api" element={<DocsAPI />} />
            <Route path="components" element={<DocsComponents />} />
            <Route path="config" element={<DocsConfig />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
