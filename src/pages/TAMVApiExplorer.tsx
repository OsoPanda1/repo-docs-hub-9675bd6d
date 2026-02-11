import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  Globe, Code, Shield, Zap, Server, Database, 
  Lock, Key, Network, Search, Copy, Check, 
  ArrowRight, ExternalLink, FileJson
} from "lucide-react";

const API_DOMAINS = [
  {
    id: "IDNVIDA",
    name: "Identidad Soberana",
    description: "Registro, autenticación, perfiles, trust y acceso",
    icon: Key,
    endpoints: [
      { method: "POST", path: "/id/signup", desc: "Crear cuenta TAMV", auth: false, security: ["ANUBIS"] },
      { method: "GET", path: "/id/me", desc: "Perfil del usuario autenticado", auth: true, security: ["ANUBIS"] },
      { method: "POST", path: "/id/login", desc: "Iniciar sesión", auth: false, security: ["ANUBIS", "DEKATEOTL"] },
      { method: "PUT", path: "/id/profile", desc: "Actualizar perfil", auth: true, security: ["ANUBIS"] },
      { method: "GET", path: "/id/trust-score", desc: "Puntaje de confianza", auth: true, security: ["HORUS"] },
    ],
  },
  {
    id: "SOCIAL",
    name: "Muro Global Social",
    description: "Feed, posts, likes (Tachidos), superlikes (Tadehuev), comentarios, shares",
    icon: Globe,
    endpoints: [
      { method: "GET", path: "/social/feed", desc: "Feed global personalizado", auth: true, security: ["HORUS"] },
      { method: "POST", path: "/social/post", desc: "Crear publicación", auth: true, security: ["ANUBIS", "SINDÉRESIS"] },
      { method: "POST", path: "/social/tachido", desc: "Like gratuito", auth: true, security: [] },
      { method: "POST", path: "/social/tadehuev", desc: "Superlike pagado (5 TAMV-T)", auth: true, security: ["ECONOMY"] },
      { method: "POST", path: "/social/comment", desc: "Comentar publicación", auth: true, security: ["SINDÉRESIS"] },
      { method: "POST", path: "/social/share", desc: "Compartir contenido", auth: true, security: [] },
    ],
  },
  {
    id: "ECONOMY",
    name: "Motor Económico",
    description: "Wallets, transacciones, staking, membresías, V-Gifts",
    icon: Database,
    endpoints: [
      { method: "GET", path: "/economy/wallet", desc: "Estado de wallet", auth: true, security: ["ANUBIS", "DEKATEOTL"] },
      { method: "POST", path: "/economy/transfer", desc: "Transferir TAMV-T", auth: true, security: ["ANUBIS", "DEKATEOTL"] },
      { method: "POST", path: "/economy/stake", desc: "Staking de TGN", auth: true, security: ["DEKATEOTL"] },
      { method: "GET", path: "/economy/history", desc: "Historial de transacciones", auth: true, security: ["ANUBIS"] },
      { method: "POST", path: "/economy/gift", desc: "Enviar V-Gift", auth: true, security: ["ECONOMY"] },
    ],
  },
  {
    id: "XR",
    name: "DreamSpaces & XR",
    description: "Creación y exploración de espacios 3D/4D inmersivos",
    icon: Zap,
    endpoints: [
      { method: "GET", path: "/xr/spaces", desc: "Listar DreamSpaces públicos", auth: false, security: [] },
      { method: "POST", path: "/xr/space", desc: "Crear DreamSpace", auth: true, security: ["ANUBIS"] },
      { method: "GET", path: "/xr/space/:id", desc: "Obtener espacio por ID", auth: false, security: [] },
      { method: "PUT", path: "/xr/space/:id", desc: "Actualizar escena", auth: true, security: ["ANUBIS"] },
      { method: "POST", path: "/xr/concert", desc: "Crear concierto sensorial", auth: true, security: ["KAOS"] },
    ],
  },
  {
    id: "GOVERNANCE",
    name: "Gobernanza DAO",
    description: "Propuestas, votaciones, delegación, sub-DAOs",
    icon: Network,
    endpoints: [
      { method: "GET", path: "/gov/proposals", desc: "Listar propuestas activas", auth: false, security: [] },
      { method: "POST", path: "/gov/proposal", desc: "Crear propuesta", auth: true, security: ["ANUBIS"] },
      { method: "POST", path: "/gov/vote", desc: "Votar (cuadrático)", auth: true, security: ["ANUBIS", "DEKATEOTL"] },
      { method: "POST", path: "/gov/delegate", desc: "Delegar voto", auth: true, security: ["ANUBIS"] },
    ],
  },
  {
    id: "SECURITY",
    name: "Seguridad DEKATEOTL™",
    description: "Escaneo, monitoreo, auditoría, reportes de amenazas",
    icon: Shield,
    endpoints: [
      { method: "POST", path: "/security/scan", desc: "Ejecutar escaneo cuántico", auth: true, security: ["DEKATEOTL", "ANUBIS"] },
      { method: "GET", path: "/security/threats", desc: "Amenazas activas", auth: true, security: ["HORUS", "OJO_RA"] },
      { method: "GET", path: "/security/audit", desc: "Log de auditoría inmutable", auth: true, security: ["ANUBIS"] },
      { method: "POST", path: "/security/report", desc: "Reportar amenaza", auth: true, security: ["SINDÉRESIS"] },
    ],
  },
];

const methodColors: Record<string, string> = {
  GET: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  POST: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  PUT: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  DELETE: "bg-red-500/20 text-red-400 border-red-500/30",
  PATCH: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

export default function TAMVApiExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const handleCopy = (path: string) => {
    navigator.clipboard.writeText(`https://api.tamv.io/v1${path}`);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  const filteredDomains = API_DOMAINS.map((domain) => ({
    ...domain,
    endpoints: domain.endpoints.filter(
      (ep) =>
        ep.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ep.desc.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((d) => d.endpoints.length > 0);

  const totalEndpoints = API_DOMAINS.reduce((acc, d) => acc + d.endpoints.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />

      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            <Code className="w-3 h-3 mr-1" />
            TAMVAI API · Protocolo Kórima v1.0
          </Badge>
          <h1 className="text-4xl font-bold mb-2 gradient-text font-orbitron">
            API Explorer
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {totalEndpoints} endpoints distribuidos en {API_DOMAINS.length} dominios federados.
            Seguridad post-cuántica con Anubis Sentinel Gateway.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar endpoints..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/50 backdrop-blur"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-4 text-center">
              <Server className="h-5 w-5 mx-auto mb-1 text-primary" />
              <div className="text-2xl font-bold">{totalEndpoints}</div>
              <div className="text-xs text-muted-foreground">Endpoints</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-4 text-center">
              <Shield className="h-5 w-5 mx-auto mb-1 text-primary" />
              <div className="text-2xl font-bold">{API_DOMAINS.length}</div>
              <div className="text-xs text-muted-foreground">Dominios</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-4 text-center">
              <Lock className="h-5 w-5 mx-auto mb-1 text-primary" />
              <div className="text-2xl font-bold">PQC</div>
              <div className="text-xs text-muted-foreground">Criptografía</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-4 text-center">
              <Zap className="h-5 w-5 mx-auto mb-1 text-primary" />
              <div className="text-2xl font-bold">&lt;50ms</div>
              <div className="text-xs text-muted-foreground">Latencia</div>
            </CardContent>
          </Card>
        </div>

        {/* Domains */}
        <div className="space-y-6">
          {filteredDomains.map((domain) => (
            <Card key={domain.id} className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <domain.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-orbitron">{domain.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{domain.description}</p>
                  </div>
                  <Badge variant="outline" className="ml-auto">
                    {domain.id}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {domain.endpoints.map((ep, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 transition-colors group"
                    >
                      <Badge className={`${methodColors[ep.method]} border font-mono text-xs min-w-[52px] justify-center`}>
                        {ep.method}
                      </Badge>
                      <code className="text-sm font-mono text-foreground/80 flex-1">
                        {ep.path}
                      </code>
                      <span className="text-xs text-muted-foreground hidden md:inline flex-shrink-0">
                        {ep.desc}
                      </span>
                      <div className="flex items-center gap-1">
                        {ep.auth && (
                          <Lock className="w-3 h-3 text-amber-400" />
                        )}
                        {ep.security.map((s) => (
                          <Badge key={s} variant="outline" className="text-[10px] py-0 px-1">
                            {s}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleCopy(ep.path)}
                      >
                        {copiedPath === ep.path ? (
                          <Check className="w-3 h-3 text-green-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* OpenAPI link */}
        <div className="text-center mt-12">
          <Card className="bg-card/50 backdrop-blur border-primary/20 max-w-lg mx-auto">
            <CardContent className="p-6 text-center">
              <FileJson className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-orbitron font-bold mb-2">OpenAPI 3.0 Specification</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Especificación completa TAMV Unified API con schemas, seguridad y ejemplos.
              </p>
              <Button variant="outline" className="border-primary/30">
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Especificación OpenAPI
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
