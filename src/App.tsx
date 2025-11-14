import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import IsabellaAI from "./pages/IsabellaAI";
import Economy from "./pages/Economy";
import Marketplace from "./pages/Marketplace";
import DreamSpacesBuilder from "./pages/DreamSpacesBuilder";
import ANUBIS from "./pages/ANUBIS";
import DAO from "./pages/DAO";
import University from "./pages/University";
import KAOSMusic from "./pages/KAOSMusic";
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
import DocsQuantumSentinel from "./pages/DocsQuantumSentinel";
import DocsKnowledgeCells from "./pages/DocsKnowledgeCells";
import DocsImplementationRoadmap from "./pages/DocsImplementationRoadmap";
import DocsIdNvida from "./pages/DocsIdNvida";
import DocsWeb45 from "./pages/DocsWeb45";
import DocsDreamSpaces from "./pages/DocsDreamSpaces";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider defaultOpen={true}>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="sticky top-0 z-50 h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center px-4">
                <SidebarTrigger />
              </header>
              <main className="flex-1">
                <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/isabella" element={<IsabellaAI />} />
          <Route path="/economy" element={<Economy />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/dreamspaces" element={<DreamSpacesBuilder />} />
          <Route path="/anubis" element={<ANUBIS />} />
          <Route path="/dao" element={<DAO />} />
          <Route path="/university" element={<University />} />
          <Route path="/kaos" element={<KAOSMusic />} />
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
            <Route path="dreamspaces" element={<DocsDreamSpaces />} />
            <Route path="creativity" element={<DocsCreativity />} />
            <Route path="titans" element={<DocsTitans />} />
            {/* Dominio II: La Gobernanza */}
            <Route path="architecture" element={<DocsArchitecture />} />
            <Route path="knowledge-cells" element={<DocsKnowledgeCells />} />
            <Route path="anubis" element={<DocsAnubis />} />
            <Route path="dekateotl" element={<DocsDekateotl />} />
            <Route path="quantum-sentinel" element={<DocsQuantumSentinel />} />
            <Route path="id-nvida" element={<DocsIdNvida />} />
            <Route path="implementation-roadmap" element={<DocsImplementationRoadmap />} />
            {/* Dominio III: Contexto Global */}
            <Route path="web45" element={<DocsWeb45 />} />
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
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
