import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  Users, 
  Vote, 
  TrendingUp, 
  CheckCircle2,
  XCircle,
  Clock,
  FileText,
  MessageSquare,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";

const DAO = () => {
  const proposals = [
    {
      id: 1,
      title: "Reducción de comisiones para artistas emergentes",
      description: "Propuesta para reducir las comisiones del 30% al 15% para nuevos creadores durante sus primeros 6 meses",
      author: "Usuario_234",
      status: "active",
      votesFor: 1847,
      votesAgainst: 234,
      timeLeft: "2 días",
      category: "Economía"
    },
    {
      id: 2,
      title: "Nuevo DreamSpace para conciertos virtuales",
      description: "Crear un espacio XR dedicado exclusivamente a conciertos y eventos musicales en vivo",
      author: "CreadorXR_89",
      status: "active",
      votesFor: 2341,
      votesAgainst: 156,
      timeLeft: "5 días",
      category: "DreamSpaces"
    },
    {
      id: 3,
      title: "Programa de becas Universidad TAMV",
      description: "Implementar un sistema de becas para estudiantes destacados de Latinoamérica",
      author: "Educador_TAMV",
      status: "approved",
      votesFor: 3892,
      votesAgainst: 45,
      timeLeft: "Aprobada",
      category: "Educación"
    },
    {
      id: 4,
      title: "Mejoras en el sistema de moderación",
      description: "Actualizar el algoritmo de moderación de contenido con IA más precisa",
      author: "Moderador_67",
      status: "rejected",
      votesFor: 567,
      votesAgainst: 1234,
      timeLeft: "Rechazada",
      category: "Seguridad"
    }
  ];

  const stats = [
    { label: "Propuestas Activas", value: "12", icon: FileText },
    { label: "Miembros DAO", value: "8,492", icon: Users },
    { label: "Votos Totales", value: "45,234", icon: Vote },
    { label: "Tasa de Aprobación", value: "73%", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent font-orbitron">
            DAO Híbrida TAMV
          </h1>
          <p className="text-muted-foreground">
            Gobernanza Descentralizada con Ética y Reputación
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="border-primary/20 bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="h-8 w-8 text-primary" />
                    <span className="text-3xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="proposals" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="proposals">Propuestas</TabsTrigger>
            <TabsTrigger value="create">Crear Propuesta</TabsTrigger>
          </TabsList>

          <TabsContent value="proposals" className="space-y-4">
            {proposals.map((proposal) => (
              <Card key={proposal.id} className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{proposal.title}</CardTitle>
                        <Badge variant={
                          proposal.status === "active" ? "default" :
                          proposal.status === "approved" ? "secondary" :
                          "destructive"
                        }>
                          {proposal.status === "active" ? "Activa" :
                           proposal.status === "approved" ? "Aprobada" :
                           "Rechazada"}
                        </Badge>
                      </div>
                      <CardDescription>{proposal.description}</CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users size={14} />
                          {proposal.author}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {proposal.timeLeft}
                        </span>
                        <span>•</span>
                        <Badge variant="outline">{proposal.category}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="flex items-center gap-1">
                        <ThumbsUp size={14} className="text-green-500" />
                        A favor: {proposal.votesFor.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsDown size={14} className="text-red-500" />
                        En contra: {proposal.votesAgainst.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                        style={{ 
                          width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}%` 
                        }}
                      />
                    </div>
                  </div>
                  {proposal.status === "active" && (
                    <div className="flex gap-2">
                      <Button className="flex-1" variant="default">
                        <ThumbsUp size={16} className="mr-2" />
                        Votar a Favor
                      </Button>
                      <Button className="flex-1" variant="outline">
                        <ThumbsDown size={16} className="mr-2" />
                        Votar en Contra
                      </Button>
                      <Button variant="outline">
                        <MessageSquare size={16} />
                      </Button>
                    </div>
                  )}
                  {proposal.status === "approved" && (
                    <div className="flex items-center gap-2 text-green-500">
                      <CheckCircle2 size={20} />
                      <span className="font-medium">Propuesta aprobada e implementada</span>
                    </div>
                  )}
                  {proposal.status === "rejected" && (
                    <div className="flex items-center gap-2 text-red-500">
                      <XCircle size={20} />
                      <span className="font-medium">Propuesta rechazada por la comunidad</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="create" className="space-y-4">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Crear Nueva Propuesta</CardTitle>
                <CardDescription>
                  Presenta tu idea a la comunidad TAMV para votación
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Título de la Propuesta</label>
                  <Input placeholder="Título claro y descriptivo..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Categoría</label>
                  <select className="w-full p-2 rounded-md border bg-background">
                    <option>Economía</option>
                    <option>DreamSpaces</option>
                    <option>Educación</option>
                    <option>Seguridad</option>
                    <option>Gobernanza</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Descripción Detallada</label>
                  <Textarea 
                    placeholder="Explica tu propuesta en detalle: qué, por qué, cómo y el impacto esperado..."
                    rows={6}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Impacto Económico Estimado</label>
                  <Input type="number" placeholder="0.00" step="0.01" />
                  <p className="text-xs text-muted-foreground">
                    Valor entre 0 (sin impacto) y 1 (impacto máximo)
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Duración de Votación</label>
                  <select className="w-full p-2 rounded-md border bg-background">
                    <option>3 días</option>
                    <option>5 días</option>
                    <option>7 días</option>
                    <option>14 días</option>
                  </select>
                </div>
                <div className="pt-4">
                  <Button className="w-full" size="lg">
                    <Vote className="mr-2" />
                    Enviar Propuesta a Votación
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Las propuestas son revisadas por la Mesa Directiva antes de publicarse
                  </p>
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

export default DAO;
