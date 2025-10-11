import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Docs from "./pages/Docs";
import DocsHome from "./pages/DocsHome";
import DocsManifest from "./pages/DocsManifest";
import DocsRolesGuide from "./pages/DocsRolesGuide";
import DocsGlossary from "./pages/DocsGlossary";
import DocsQuickstart from "./pages/DocsQuickstart";
import DocsProjectStatus from "./pages/DocsProjectStatus";
import DocsDigitalDignity from "./pages/DocsDigitalDignity";
import DocsFounderStory from "./pages/DocsFounderStory";
import DocsIsabellaAI from "./pages/DocsIsabellaAI";
import DocsCreativity from "./pages/DocsCreativity";
import DocsTitans from "./pages/DocsTitans";
import DocsKorima from "./pages/DocsKorima";
import DocsAPIEndpoints from "./pages/DocsAPIEndpoints";
import DocsModels from "./pages/DocsModels";
import DocsExamples from "./pages/DocsExamples";
import DocsInfrastructure from "./pages/DocsInfrastructure";
import DocsDatabase from "./pages/DocsDatabase";
import DocsNetwork from "./pages/DocsNetwork";
import DocsAPI from "./pages/DocsAPI";
import DocsComponents from "./pages/DocsComponents";
import DocsConfig from "./pages/DocsConfig";
import DocsArchitecture from "./pages/DocsArchitecture";
import DocsAnubis from "./pages/DocsAnubis";
import DocsDekateotl from "./pages/DocsDekateotl";
import DocsImplementationRoadmap from "./pages/DocsImplementationRoadmap";
import DocsIdNvida from "./pages/DocsIdNvida";
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
            {/* Dominio 0: Prólogo y Portal Universal */}
            <Route path="manifest" element={<DocsManifest />} />
            <Route path="roles-guide" element={<DocsRolesGuide />} />
            <Route path="glossary" element={<DocsGlossary />} />
            {/* Dominio I: El Propósito */}
            <Route path="project-status" element={<DocsProjectStatus />} />
            <Route path="digital-dignity" element={<DocsDigitalDignity />} />
            <Route path="founder-story" element={<DocsFounderStory />} />
            <Route path="isabella-ai" element={<DocsIsabellaAI />} />
            <Route path="creativity" element={<DocsCreativity />} />
            <Route path="titans" element={<DocsTitans />} />
            {/* Dominio II: La Gobernanza */}
            <Route path="architecture" element={<DocsArchitecture />} />
            <Route path="anubis" element={<DocsAnubis />} />
            <Route path="dekateotl" element={<DocsDekateotl />} />
            <Route path="id-nvida" element={<DocsIdNvida />} />
            <Route path="implementation-roadmap" element={<DocsImplementationRoadmap />} />
            {/* Existing routes */}
            <Route path="quickstart" element={<DocsQuickstart />} />
            <Route path="korima" element={<DocsKorima />} />
            <Route path="api-endpoints" element={<DocsAPIEndpoints />} />
            <Route path="models" element={<DocsModels />} />
            <Route path="examples" element={<DocsExamples />} />
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
