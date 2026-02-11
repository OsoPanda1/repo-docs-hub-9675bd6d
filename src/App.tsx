import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
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
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import TAMVCrumbs from "./pages/TAMVCrumbs";
import NubiWallets from "./pages/NubiWallets";
// TAMV Omniverso modules
import SalaXRDedicatoria from "./pages/SalaXRDedicatoria";
import EnciclopediaDIGYTAMV from "./pages/EnciclopediaDIGYTAMV";
import GaleriaLogros from "./pages/GaleriaLogros";
import MotorEconomico from "./pages/MotorEconomico";
import UTAMV from "./pages/UTAMV";
// New unified pages
import CivilizationHub from "./pages/CivilizationHub";
import GovernancePage from "./pages/GovernancePage";
import IsabellaDashboard from "./pages/IsabellaDashboard";
import ProtocoloInmortal from "./pages/ProtocoloInmortal";
import TAMVStatusReport from "./pages/TAMVStatusReport";
// New navigation pages
import Trending from "./pages/Trending";
import Lives from "./pages/Lives";
import Events from "./pages/Events";
import Security from "./pages/Security";
import TAMVApiExplorer from "./pages/TAMVApiExplorer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/isabella" element={<ProtectedRoute><IsabellaAI /></ProtectedRoute>} />
          <Route path="/economy" element={<ProtectedRoute><Economy /></ProtectedRoute>} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/dreamspaces" element={<DreamSpacesBuilder />} />
          <Route path="/anubis" element={<ProtectedRoute><ANUBIS /></ProtectedRoute>} />
          <Route path="/dao" element={<ProtectedRoute><DAO /></ProtectedRoute>} />
          <Route path="/university" element={<University />} />
          <Route path="/kaos" element={<KAOSMusic />} />
          {/* New Navigation Routes */}
          <Route path="/trending" element={<Trending />} />
          <Route path="/lives" element={<Lives />} />
          <Route path="/events" element={<Events />} />
          <Route path="/security" element={<ProtectedRoute><Security /></ProtectedRoute>} />
          <Route path="/api-explorer" element={<TAMVApiExplorer />} />
          {/* TAMV Omniverso - Core Modules */}
          <Route path="/sala-dedicatoria" element={<SalaXRDedicatoria />} />
          <Route path="/enciclopedia" element={<EnciclopediaDIGYTAMV />} />
          <Route path="/galeria-logros" element={<GaleriaLogros />} />
          <Route path="/motor-economico" element={<MotorEconomico />} />
          <Route path="/utamv" element={<UTAMV />} />
          <Route path="/tamvcrumbs" element={<TAMVCrumbs />} />
          <Route path="/nubiwallets" element={<NubiWallets />} />
          {/* New Unified Hub Pages */}
          <Route path="/civilization" element={<ProtectedRoute><CivilizationHub /></ProtectedRoute>} />
          <Route path="/governance" element={<ProtectedRoute><GovernancePage /></ProtectedRoute>} />
          <Route path="/isabella-dashboard" element={<ProtectedRoute><IsabellaDashboard /></ProtectedRoute>} />
          <Route path="/protocolo-inmortal" element={<ProtocoloInmortal />} />
          <Route path="/status" element={<TAMVStatusReport />} />
          <Route path="/docs" element={<Docs />}>
            <Route index element={<DocsHome />} />
            <Route path="manifest" element={<DocsManifest />} />
            <Route path="roles-guide" element={<DocsRolesGuide />} />
            <Route path="glossary" element={<DocsGlossary />} />
            <Route path="project-status" element={<DocsProjectStatus />} />
            <Route path="digital-dignity" element={<DocsDigitalDignity />} />
            <Route path="founder-story" element={<DocsFounderStory />} />
            <Route path="isabella-ai" element={<DocsIsabellaAI />} />
            <Route path="dreamspaces" element={<DocsDreamSpaces />} />
            <Route path="creativity" element={<DocsCreativity />} />
            <Route path="titans" element={<DocsTitans />} />
            <Route path="architecture" element={<DocsArchitecture />} />
            <Route path="knowledge-cells" element={<DocsKnowledgeCells />} />
            <Route path="anubis" element={<DocsAnubis />} />
            <Route path="dekateotl" element={<DocsDekateotl />} />
            <Route path="quantum-sentinel" element={<DocsQuantumSentinel />} />
            <Route path="id-nvida" element={<DocsIdNvida />} />
            <Route path="implementation-roadmap" element={<DocsImplementationRoadmap />} />
            <Route path="web45" element={<DocsWeb45 />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
