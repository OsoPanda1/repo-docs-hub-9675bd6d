import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import DreamSpaces3DDemo from "@/components/DreamSpaces3DDemo";
import { 
  Box, 
  Layers, 
  Palette,
  Wand2,
  Save,
  Play,
  Settings,
  Image as ImageIcon,
  Music,
  Users,
  Globe
} from "lucide-react";

const DreamSpacesBuilder = () => {
  const [spaceName, setSpaceName] = useState("");
  const [isBuilding, setIsBuilding] = useState(false);

  const templates = [
    { name: "Sala de Conciertos", icon: Music, description: "Espacio para eventos musicales en vivo" },
    { name: "Galería de Arte", icon: ImageIcon, description: "Exhibe tus obras en un ambiente elegante" },
    { name: "Sala de Reuniones", icon: Users, description: "Espacio colaborativo para equipos" },
    { name: "Espacio en Blanco", icon: Box, description: "Comienza desde cero con total libertad" }
  ];

  const tools = [
    { name: "Objetos 3D", icon: Box, color: "text-blue-400" },
    { name: "Texturas", icon: Palette, color: "text-purple-400" },
    { name: "Iluminación", icon: Wand2, color: "text-yellow-400" },
    { name: "Audio", icon: Music, color: "text-green-400" },
    { name: "Física", icon: Layers, color: "text-red-400" },
    { name: "Interacciones", icon: Users, color: "text-cyan-400" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            DreamSpaces™ Builder
          </h1>
          <p className="text-muted-foreground">
            Crea mundos XR 3D/4D con física cuántica y audio posicional
          </p>
        </div>

        <Tabs defaultValue="create" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="create">Crear</TabsTrigger>
            <TabsTrigger value="my-spaces">Mis Espacios</TabsTrigger>
            <TabsTrigger value="explore">Explorar</TabsTrigger>
          </TabsList>

          {/* Create Tab */}
          <TabsContent value="create" className="space-y-6">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Nuevo DreamSpace</CardTitle>
                <CardDescription>
                  Elige una plantilla o comienza desde cero
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="spaceName">Nombre del Espacio</Label>
                  <Input 
                    id="spaceName"
                    value={spaceName}
                    onChange={(e) => setSpaceName(e.target.value)}
                    placeholder="Mi DreamSpace Increíble"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-4">Plantillas Disponibles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {templates.map((template, idx) => (
                      <Card key={idx} className="border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
                        <CardContent className="pt-6 text-center">
                          <template.icon className="h-12 w-12 mx-auto mb-3 text-primary" />
                          <p className="font-medium text-sm mb-2">{template.name}</p>
                          <p className="text-xs text-muted-foreground">{template.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  disabled={!spaceName}
                  onClick={() => setIsBuilding(true)}
                >
                  <Wand2 className="h-4 w-4 mr-2" />
                  Comenzar a Construir
                </Button>
              </CardContent>
            </Card>

            {isBuilding && (
              <>
                {/* 3D Builder Interface */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Tools Panel */}
                  <Card className="border-primary/20 bg-card/50 backdrop-blur">
                    <CardHeader>
                      <CardTitle className="text-lg">Herramientas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {tools.map((tool, idx) => (
                        <Button key={idx} variant="outline" className="w-full justify-start">
                          <tool.icon className={`h-4 w-4 mr-2 ${tool.color}`} />
                          {tool.name}
                        </Button>
                      ))}
                    </CardContent>
                  </Card>

                  {/* 3D Viewport */}
                  <Card className="lg:col-span-3 border-primary/20 bg-card/50 backdrop-blur">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Vista 3D - {spaceName}</CardTitle>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Save className="h-4 w-4 mr-2" />
                            Guardar
                          </Button>
                          <Button size="sm">
                            <Play className="h-4 w-4 mr-2" />
                            Probar
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video rounded-lg overflow-hidden border border-border/50">
                        <DreamSpaces3DDemo />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Properties Panel */}
                <Card className="border-primary/20 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg">Propiedades del Espacio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="physics">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="physics">Física</TabsTrigger>
                        <TabsTrigger value="audio">Audio</TabsTrigger>
                        <TabsTrigger value="lighting">Iluminación</TabsTrigger>
                        <TabsTrigger value="settings">Ajustes</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="physics" className="space-y-4 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Gravedad</Label>
                            <Input type="number" defaultValue="9.8" />
                          </div>
                          <div className="space-y-2">
                            <Label>Fricción</Label>
                            <Input type="number" defaultValue="0.5" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="quantum" className="rounded" />
                          <Label htmlFor="quantum">Habilitar Física Cuántica</Label>
                        </div>
                      </TabsContent>

                      <TabsContent value="audio" className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label>Audio Ambiental</Label>
                          <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                            <option>Ninguno</option>
                            <option>Naturaleza</option>
                            <option>Urbano</option>
                            <option>Futurista</option>
                          </select>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="positional" className="rounded" defaultChecked />
                          <Label htmlFor="positional">Audio Posicional 3D</Label>
                        </div>
                      </TabsContent>

                      <TabsContent value="lighting" className="space-y-4 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Intensidad</Label>
                            <Input type="range" min="0" max="100" defaultValue="75" />
                          </div>
                          <div className="space-y-2">
                            <Label>Color</Label>
                            <Input type="color" defaultValue="#ffffff" />
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="settings" className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label>Visibilidad</Label>
                          <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                            <option>Privado</option>
                            <option>Amigos</option>
                            <option>Público</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label>Capacidad Máxima</Label>
                          <Input type="number" defaultValue="100" />
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>

          {/* My Spaces Tab */}
          <TabsContent value="my-spaces">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-primary/20 bg-card/50 backdrop-blur">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 relative">
                    <Badge className="absolute top-2 right-2">Activo</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">Mi DreamSpace #{i}</CardTitle>
                    <CardDescription>
                      Creado hace {i} días • 45 visitas
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Settings className="h-4 w-4 mr-2" />
                      Editar
                    </Button>
                    <Button className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Entrar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Explore Tab */}
          <TabsContent value="explore">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Explora DreamSpaces</CardTitle>
                <CardDescription>
                  Descubre mundos creados por la comunidad TAMV
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Globe className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-bold mb-2">Próximamente</h3>
                  <p className="text-muted-foreground">
                    El explorador de DreamSpaces públicos estará disponible pronto
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

export default DreamSpacesBuilder;
