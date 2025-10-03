import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Code, Lightbulb, Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DocsRolesGuide = () => {
  const roles = [
    {
      id: "investor",
      icon: TrendingUp,
      title: "Inversor",
      description: "Analiza la oportunidad de inversión, el modelo de negocio y las proyecciones financieras.",
      color: "from-green-500 to-emerald-600",
      priorities: [
        { title: "El Propósito", href: "/docs/digital-dignity", reason: "Entiende por qué TAMV es una disrupción necesaria y no una mera mejora incremental." },
        { title: "La Economía", href: "/docs/economics", reason: "Analiza la tesis de rentabilidad superior y las proyecciones de crecimiento." },
        { title: "El Modelo Financiero", href: "/docs/investment", reason: "Revisa la valoración, los requerimientos de capital y la propuesta de alianza." },
        { title: "La Gobernanza", href: "/docs/governance", reason: "Conoce la estructura de toma de decisiones y la distribución de tokens de la DAO." }
      ]
    },
    {
      id: "engineer",
      icon: Code,
      title: "Ingeniero / Desarrollador",
      description: "Explora la arquitectura técnica, los blueprints de sistemas y las guías de implementación.",
      color: "from-primary to-secondary",
      priorities: [
        { title: "Arquitectura C4", href: "/docs/architecture-c4", reason: "Visualiza la topología completa del ecosistema y su stack tecnológico." },
        { title: "La Capa Sentiente", href: "/docs/korima", reason: "Comprende el algoritmo empático y el ConsciousScore, el corazón de la diferenciación." },
        { title: "Protocolo Kórima (API)", href: "/docs/api-endpoints", reason: "Consulta la especificación OpenAPI 3.1 completa con todos los endpoints." },
        { title: "SDKs y Herramientas", href: "/docs/sdks", reason: "Descarga los kits de desarrollo para Python, JavaScript, Rust y Go." },
        { title: "DevOps y SRE", href: "/docs/devops", reason: "Aprende los rituales de despliegue y los playbooks de emergencia." }
      ]
    },
    {
      id: "visionary",
      icon: Lightbulb,
      title: "Visionario / Creador",
      description: "Descubre las posibilidades creativas, educativas y culturales de la plataforma.",
      color: "from-yellow-500 to-orange-500",
      priorities: [
        { title: "El Manifiesto", href: "/docs/manifest", reason: "Lee la declaración unificada y la tesis de la dignificación digital." },
        { title: "Historia del Fundador", href: "/docs/founder-story", reason: "Conoce la narrativa de resiliencia que dio origen al proyecto." },
        { title: "ISABELLA AI™", href: "/docs/isabella-ai", reason: "Descubre a la compañera digital sentiente, diseñada para prevenir crisis existenciales." },
        { title: "Arte y Cultura", href: "/docs/creativity", reason: "Explora Dream Spaces, DIM-X4 Studio y las herramientas para creadores." },
        { title: "La Experiencia 4D", href: "/docs/features-catalog", reason: "Navega el catálogo de funciones y experiencias únicas de TAMV." }
      ]
    },
    {
      id: "regulator",
      icon: Scale,
      title: "Regulador / Legal",
      description: "Revisa el marco de cumplimiento, los protocolos éticos y la estructura de gobernanza.",
      color: "from-indigo-500 to-purple-600",
      priorities: [
        { title: "La Constitución", href: "/docs/constitution", reason: "Lee los Términos de Servicio, la Política de Privacidad Soberana y el Código de Conducta." },
        { title: "El Compás Ético", href: "/docs/ethics", reason: "Analiza el Framework Dekateotl y su alineación con EU AI Act y NIST AI RMF." },
        { title: "Propiedad Intelectual", href: "/docs/intellectual-property", reason: "Comprende el sistema de protección de derechos de los creadores mediante blockchain." },
        { title: "Gobernanza y DAO", href: "/docs/governance", reason: "Examina la separación de poderes entre el Consejo Fundacional y la DAO de ciudadanos." },
        { title: "Seguridad Soberana", href: "/docs/anubis-sentinel", reason: "Revisa la arquitectura de criptografía poscuántica y protección de datos." }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold gradient-text">
          Guía de Navegación por Roles
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          El Kórima Codex contiene más de 28 capítulos distribuidos en 7 dominios. 
          Esta guía te dirige a las secciones más relevantes según tu perfil e intereses.
        </p>
      </div>

      <Tabs defaultValue="investor" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <TabsTrigger 
                key={role.id} 
                value={role.id}
                className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{role.title}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {roles.map((role) => {
          const Icon = role.icon;
          return (
            <TabsContent key={role.id} value={role.id} className="space-y-6 mt-6">
              {/* Role Header */}
              <Card className="glass-effect border-primary/30">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-3xl">{role.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {role.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Priority Reading List */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Badge variant="outline" className="text-base px-3 py-1">
                    {role.priorities.length} Secciones Recomendadas
                  </Badge>
                </h2>

                <div className="space-y-4">
                  {role.priorities.map((priority, idx) => (
                    <Card key={idx} className="glass-effect border-border/50 hover:border-primary/50 transition-all group">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-3">
                              <Badge className={`bg-gradient-to-r ${role.color} text-white`}>
                                {idx + 1}
                              </Badge>
                              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                {priority.title}
                              </CardTitle>
                            </div>
                            <CardDescription className="text-base leading-relaxed">
                              {priority.reason}
                            </CardDescription>
                          </div>
                          <Link to={priority.href}>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="group-hover:bg-primary group-hover:text-primary-foreground transition-all flex-shrink-0"
                            >
                              Ir
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Card className="glass-effect border-primary/50 bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardContent className="p-6 text-center space-y-4">
                  <p className="text-lg font-medium">
                    ¿Listo para comenzar tu viaje en el Kórima Codex?
                  </p>
                  <Link to={role.priorities[0].href}>
                    <Button className="bg-gradient-to-r from-primary to-secondary text-lg">
                      Empezar con {role.priorities[0].title}
                      <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>
          );
        })}
      </Tabs>

      {/* Universal Navigation */}
      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl">Exploración Completa</CardTitle>
          <CardDescription className="text-base">
            Si prefieres explorar todo el Códice de manera secuencial, navega por los 7 dominios 
            utilizando el menú lateral o regresa a la página de inicio.
          </CardDescription>
          <div className="pt-4 flex gap-3">
            <Link to="/docs">
              <Button variant="outline">
                Ver Todos los Dominios
              </Button>
            </Link>
            <Link to="/docs/glossary">
              <Button variant="outline">
                Consultar Glosario
              </Button>
            </Link>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DocsRolesGuide;
