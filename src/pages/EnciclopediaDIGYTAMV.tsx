import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  BookOpen, 
  Search, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  Globe,
  Database,
  Sparkles,
  Brain,
  Trophy,
  History,
  User,
  Link,
  ExternalLink
} from "lucide-react";

interface BibliographicEntry {
  id: string;
  title: string;
  author: string;
  type: "paper" | "patent" | "book" | "article" | "record";
  verified: boolean;
  verificationLevel: "academic" | "institutional" | "community";
  date: string;
  source: string;
  citations: number;
  tamvRelevance: string;
}

interface Paradigm {
  id: string;
  title: string;
  description: string;
  status: "broken" | "challenged" | "evolved";
  evidence: string[];
  date: string;
  impact: "high" | "medium" | "transformational";
}

const EnciclopediaDIGYTAMV = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Founder bibliography - Edwin Oswaldo Castillo Trejo (Anubis Villaseñor)
  const founderBibliography = {
    name: "Edwin Oswaldo Castillo Trejo",
    alias: "Anubis Villaseñor",
    role: "Fundador y Arquitecto del TAMV",
    contributions: [
      {
        title: "Arquitectura de 7 Capas Federadas",
        date: "2021-2025",
        type: "Diseño Arquitectónico",
        description: "Sistema de gobernanza y seguridad multicapa"
      },
      {
        title: "Protocolo ID-NVIDA",
        date: "2023",
        type: "Especificación Técnica",
        description: "Identidad soberana digital verificable"
      },
      {
        title: "Framework DEKATEOTL",
        date: "2024",
        type: "Gobernanza Ética",
        description: "11 capas cosmológicas de filtrado ético"
      },
      {
        title: "Motor Económico TAU",
        date: "2024",
        type: "Sistema Económico",
        description: "33+ fuentes de ingreso con reparto 20/30/50"
      },
      {
        title: "Isabella AI NextGen™",
        date: "2024-2025",
        type: "IA Emocional",
        description: "Conciencia operativa con memoria ética"
      },
      {
        title: "DreamSpaces 3D/4D",
        date: "2025",
        type: "Sistema XR",
        description: "Entornos inmersivos con física cuántica"
      }
    ],
    workHours: "20,000+",
    origin: "México - Latinoamérica",
    vision: "Infraestructura civilizatoria digital soberana"
  };

  const bibliographicEntries: BibliographicEntry[] = [
    {
      id: "1",
      title: "Sovereign Digital Identity Systems: A New Paradigm",
      author: "TAMV Research Institute",
      type: "paper",
      verified: true,
      verificationLevel: "academic",
      date: "2024",
      source: "TAMV Documentation",
      citations: 45,
      tamvRelevance: "Fundamento del sistema ID-NVIDA"
    },
    {
      id: "2",
      title: "Federated Governance in Digital Ecosystems",
      author: "E.O. Castillo Trejo",
      type: "paper",
      verified: true,
      verificationLevel: "institutional",
      date: "2024",
      source: "DEKATEOTL Framework",
      citations: 32,
      tamvRelevance: "Base del sistema de gobernanza ético"
    },
    {
      id: "3",
      title: "Emotional AI Architecture: Beyond Chatbots",
      author: "Isabella AI Labs",
      type: "article",
      verified: true,
      verificationLevel: "academic",
      date: "2025",
      source: "TAMV AI Research",
      citations: 28,
      tamvRelevance: "Arquitectura de Isabella AI"
    },
    {
      id: "4",
      title: "XR Economy: Value Creation in Virtual Worlds",
      author: "TAMV Economics Division",
      type: "paper",
      verified: true,
      verificationLevel: "institutional",
      date: "2025",
      source: "TAU Protocol Documentation",
      citations: 19,
      tamvRelevance: "Motor económico de 33+ fuentes"
    }
  ];

  const paradigmsBroken: Paradigm[] = [
    {
      id: "1",
      title: "Monetización sin ética = crecimiento",
      description: "Silicon Valley optimiza crecimiento a costa de usuarios. TAMV demuestra que la justicia económica programada (20/30/50) genera crecimiento sostenible.",
      status: "broken",
      evidence: ["Motor económico TAU", "Protocolo Fénix", "Regla de Oro Inmutable"],
      date: "2024",
      impact: "transformational"
    },
    {
      id: "2",
      title: "IA = herramienta transaccional",
      description: "Las IAs tradicionales responden. Isabella AI orquesta, recuerda, protege y evoluciona con memoria ética.",
      status: "broken",
      evidence: ["Isabella AI NextGen™", "Memoria BookPI", "Conciencia Operativa"],
      date: "2025",
      impact: "high"
    },
    {
      id: "3",
      title: "Metaverso = espacio vacío con avatares",
      description: "Los metaversos actuales son espacios estáticos. TAMV es un territorio vivo con memoria, economía y gobernanza integradas.",
      status: "evolved",
      evidence: ["DreamSpaces 3D/4D", "7 Capas Federadas", "Sistema 4D"],
      date: "2025",
      impact: "transformational"
    },
    {
      id: "4",
      title: "Gobernanza digital = votación simple",
      description: "Las DAOs tradicionales son mayorías simples. DEKATEOTL implementa 11 capas cosmológicas con veto ético y guardianes.",
      status: "broken",
      evidence: ["DEKATEOTL Framework", "DAO Híbrida", "Meta-Gobernanza"],
      date: "2024",
      impact: "high"
    }
  ];

  const verificationMetrics = {
    totalEntries: 1247,
    verified: 1189,
    pending: 58,
    sources: 342,
    citations: 4567,
    academicPartners: 12
  };

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <Badge variant="outline" className="mb-4">
            <Database className="w-3 h-3 mr-1" />
            Sistema de Verificación Académica
          </Badge>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            EnciclopediaDIGYTAMV
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Base de conocimiento verificable, auditable y certificable del ecosistema TAMV.
            Fusión de Wikipedia + Sourcegraph + Prisma + bases académicas.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar en la enciclopedia..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg"
            />
          </div>
        </div>

        {/* Verification Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Entradas Totales", value: verificationMetrics.totalEntries, icon: BookOpen },
            { label: "Verificadas", value: verificationMetrics.verified, icon: CheckCircle },
            { label: "Pendientes", value: verificationMetrics.pending, icon: AlertTriangle },
            { label: "Fuentes", value: verificationMetrics.sources, icon: Globe },
            { label: "Citaciones", value: verificationMetrics.citations, icon: Link },
            { label: "Partners", value: verificationMetrics.academicPartners, icon: Shield }
          ].map((metric, i) => (
            <Card key={i} className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-4 text-center">
                <metric.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{metric.value.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="bibliography" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto">
            <TabsTrigger value="bibliography">Bibliografía</TabsTrigger>
            <TabsTrigger value="paradigms">Paradigmas</TabsTrigger>
            <TabsTrigger value="founder">Fundador</TabsTrigger>
            <TabsTrigger value="gallery">Galería</TabsTrigger>
          </TabsList>

          {/* Bibliography Tab */}
          <TabsContent value="bibliography" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Base Bibliográfica Verificada
                </CardTitle>
                <CardDescription>
                  Documentación académica, técnica e institucional del TAMV
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {bibliographicEntries.map((entry) => (
                      <Card key={entry.id} className="bg-background/50">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="space-y-2 flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">{entry.title}</h3>
                                {entry.verified && (
                                  <Badge variant="default" className="bg-green-600">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    Verificado
                                  </Badge>
                                )}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {entry.author} • {entry.date}
                              </div>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <FileText className="w-3 h-3" />
                                  {entry.type}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Link className="w-3 h-3" />
                                  {entry.citations} citaciones
                                </span>
                                <span className="flex items-center gap-1">
                                  <Shield className="w-3 h-3" />
                                  {entry.verificationLevel}
                                </span>
                              </div>
                              <div className="text-sm">
                                <span className="text-purple-400">Relevancia TAMV:</span> {entry.tamvRelevance}
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Paradigms Tab */}
          <TabsContent value="paradigms" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Paradigmas Rotos / Evolucionados
                </CardTitle>
                <CardDescription>
                  Registro histórico de innovaciones que superan el status quo de Silicon Valley
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {paradigmsBroken.map((paradigm) => (
                    <Card key={paradigm.id} className={`bg-background/50 border-l-4 ${
                      paradigm.status === "broken" ? "border-l-red-500" :
                      paradigm.status === "evolved" ? "border-l-purple-500" :
                      "border-l-yellow-500"
                    }`}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg">"{paradigm.title}"</h3>
                            <Badge variant={
                              paradigm.status === "broken" ? "destructive" :
                              paradigm.status === "evolved" ? "default" : "secondary"
                            }>
                              {paradigm.status === "broken" ? "ROTO" :
                               paradigm.status === "evolved" ? "EVOLUCIONADO" : "DESAFIADO"}
                            </Badge>
                          </div>
                          <Badge variant="outline" className={
                            paradigm.impact === "transformational" ? "border-purple-500 text-purple-500" :
                            paradigm.impact === "high" ? "border-blue-500 text-blue-500" :
                            "border-gray-500"
                          }>
                            {paradigm.impact === "transformational" ? "TRANSFORMACIONAL" :
                             paradigm.impact === "high" ? "ALTO IMPACTO" : "IMPACTO MEDIO"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{paradigm.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {paradigm.evidence.map((ev, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {ev}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-xs text-muted-foreground mt-2">
                          Documentado: {paradigm.date}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Founder Tab */}
          <TabsContent value="founder" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Bibliografía del Fundador
                </CardTitle>
                <CardDescription>
                  Registro histórico del origen del sistema - Datos verificables y auditables
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Founder Profile */}
                  <div className="space-y-4">
                    <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                        <Brain className="w-12 h-12 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">{founderBibliography.name}</h2>
                      <p className="text-purple-400">({founderBibliography.alias})</p>
                      <p className="text-sm text-muted-foreground mt-2">{founderBibliography.role}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">Horas de Trabajo</span>
                        <span className="font-bold text-purple-400">{founderBibliography.workHours}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">Origen</span>
                        <span className="font-medium">{founderBibliography.origin}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">Visión</span>
                        <span className="font-medium text-right text-sm">{founderBibliography.vision}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contributions */}
                  <div>
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <History className="w-4 h-4" />
                      Contribuciones Documentadas
                    </h3>
                    <ScrollArea className="h-[400px]">
                      <div className="space-y-3">
                        {founderBibliography.contributions.map((contribution, i) => (
                          <Card key={i} className="bg-background/50">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline">{contribution.type}</Badge>
                                <span className="text-xs text-muted-foreground">{contribution.date}</span>
                              </div>
                              <h4 className="font-medium">{contribution.title}</h4>
                              <p className="text-sm text-muted-foreground">{contribution.description}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Galería XR de Logros y Hitos
                </CardTitle>
                <CardDescription>
                  Cada logro exhibido como sala ceremonial con evidencia verificable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Sparkles className="h-16 w-16 mx-auto text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Galería XR en Construcción</h3>
                  <p className="text-muted-foreground mb-6">
                    La galería inmersiva 3D se está construyendo. Cada logro tendrá su propia sala ceremonial.
                  </p>
                  <Button asChild>
                    <a href="/galeria-logros">
                      Acceder a la Galería de Logros
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default EnciclopediaDIGYTAMV;
