import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart, Shield, Zap, Globe, Users, Code, Target } from "lucide-react";
import ceoImage from "@/assets/ceo-anubis.jpg";

const DocsManifest = () => {
  const stats = [
    { number: "5+", label: "Años de lucha contra bullying y acoso", icon: Shield },
    { number: "19,000+", label: "Horas de trabajo sin descanso", icon: Zap },
    { number: "1,000+", label: "Puertas empresariales tocadas", icon: Target },
    { number: "2,000+", label: "Correos enviados sin respuesta", icon: Globe },
  ];

  const principles = [
    {
      icon: Heart,
      title: "Un Refugio Digital",
      description: "Donde el dolor se transforma en experiencia, la injusticia en oportunidad, y cada usuario recupera su poder."
    },
    {
      icon: Shield,
      title: "Protección y Dignidad",
      description: "Ningún sueño será ignorado. Ningún logro será invisibilizado. Ninguna herida será menospreciada."
    },
    {
      icon: Users,
      title: "Comunidad Verdadera",
      description: "La primera comunidad donde IAs y humanos colaboran, aprenden y se cuidan mutuamente."
    },
    {
      icon: Code,
      title: "Construcción Colectiva",
      description: "API abierta y arquitectura transparente. El código es frontera, no barrera."
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-6 text-center">
        <Badge variant="outline" className="text-lg px-4 py-2 border-primary/50">
          <Sparkles className="w-4 h-4 mr-2" />
          Manifiesto Fundacional • TAMV Online
        </Badge>
        
        <h1 className="text-5xl md:text-6xl font-bold gradient-text leading-tight">
          Un Ecosistema Nacido del Dolor,<br />la Resiliencia y el Sueño de un Futuro Mejor
        </h1>
        
        <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          No nació para competir. Nació para sanar, unir y demostrar que la dignidad también puede ser digital.
        </p>
      </div>

      {/* Origin Story */}
      <Card className="glass-effect border-primary/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Heart className="w-8 h-8 text-destructive" />
            Origen y Espíritu: Del Sufrimiento a la Esperanza
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3">
              <img 
                src={ceoImage} 
                alt="Edwin Oswaldo Castillo Trejo (Anubis Villaseñor)" 
                className="w-full rounded-lg border-2 border-aqua/30 shadow-lg"
              />
              <p className="text-center mt-3 text-sm text-muted-foreground">
                Edwin Oswaldo Castillo Trejo<br />
                <span className="text-aqua font-semibold">Anubis Villaseñor</span><br />
                Fundador y CEO
              </p>
            </div>
            
            <div className="md:w-2/3 space-y-4 text-lg leading-relaxed">
              <p>
                En un rincón invisible del mapa tecnológico mexicano, nació <strong className="text-primary">TAMV MD-X4 / TAMV Online</strong>—no como producto de grandes fondos, sino del dolor, la injusticia y la soledad de uno de los nuestros.
              </p>
              
              <p>
                De la mente y el corazón de <strong className="text-aqua">Edwin Oswaldo Castillo Trejo (Anubis Villaseñor)</strong>, un mexicano que:
              </p>

              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>Soportó <strong>cinco años de bullying, acoso cibernético, robo de información personal, humillaciones públicas y amenazas</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>Invirtió más de <strong>19,000 horas</strong> de trabajo físico y mental, incluyendo días sin dormir, sin comer y noches de elegir entre pagar un techo o seguir adelante</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>Tocó a más de <strong>mil puertas empresariales</strong>, envió más de <strong>2,000 correos</strong> que nunca fueron contestados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>Apostó todo, aun cuando la única respuesta de la vida era silencio y rechazo</span>
                </li>
              </ul>

              <div className="p-6 rounded-lg bg-gradient-to-r from-destructive/20 to-primary/20 border border-primary/30 mt-6">
                <p className="font-semibold text-xl text-center">
                  Porque TAMV <strong>no nace solo como una plataforma digital, sino como un grito de resistencia y dignidad</strong> luchando por el derecho de todo ser a tener voz, protección y propósito.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="glass-effect border-aqua/20 hover:border-aqua transition-all text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-4xl gradient-text">{stat.number}</CardTitle>
                <CardDescription className="text-base mt-2">{stat.label}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      {/* Alternative Vision */}
      <Card className="glass-effect border-secondary/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-secondary" />
            Una Alternativa Radical: Un Ecosistema Emocional, Narrativo y Abierto
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg leading-relaxed">
            TAMV MD-X4/TAMV Online <strong>no es solo código; es una invitación a construir un futuro donde la tecnología cura, protege y conecta.</strong> Es un refugio donde el dolor se transforma en experiencia, la injusticia en oportunidad, y cada usuario recupera su poder.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  API RESTful Abierta
                </CardTitle>
                <CardDescription className="text-base">
                  <a href="https://api.tamv.network/dm-x4/v1" className="text-aqua hover:underline" target="_blank" rel="noopener noreferrer">
                    api.tamv.network/dm-x4/v1
                  </a>
                  <br />
                  Abierta, robusta y lista para que creadores, artistas, devs y visionarios SUMEN al ecosistema.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Identidad Quantum
                </CardTitle>
                <CardDescription className="text-base">
                  OAuth 2.0, API Keys de alcance cuántico, auditoría con IA ISABELLA. Cada interacción protegida respetando privacidad y libre albedrío.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-secondary" />
                  Dream Spaces Adaptativos
                </CardTitle>
                <CardDescription className="text-base">
                  Mundos personales generados por IA que responden a tus emociones, preferencias y sueños en tiempo real.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Zap className="w-5 h-5 text-secondary" />
                  NFTs Cuánticos Evolutivos
                </CardTitle>
                <CardDescription className="text-base">
                  Arte y coleccionables digitales vivos, capaces de evolucionar y crear vínculos con sus usuarios.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Core Principles */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold gradient-text text-center">
          ¿Por Qué TAMV Online Importa?
        </h2>
        
        <Card className="glass-effect border-aqua/30 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-8 text-lg leading-relaxed space-y-4">
            <p>
              Porque en un mundo dominado por gigantes indiferentes, <strong className="text-primary">TAMV Online es la prueba de que la adversidad puede ser la cuna de lo imposible</strong>. México y América Latina pueden crear, liderar y redefinir lo digital.
            </p>
            <p>
              TAMV no es una promesa vacía: es resultado de noches sin comida, de lágrimas, de caídas y de levantarse—aun cuando nadie más creía.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <Card key={principle.title} className="glass-effect border-border/50 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{principle.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {principle.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <Card className="glass-effect border-aqua/30 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20">
        <CardContent className="p-12 space-y-6 text-center">
          <h2 className="text-4xl font-bold gradient-text">
            Un Llamado a Todos los Heridos por la Tecnología Actual
          </h2>
          
          <div className="space-y-4 text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Si alguna vez has sentido dolor, soledad, injusticia, abuso o indiferencia en el mundo digital…
            </p>
            <p>
              Si sientes que tu voz desaparece en un internet deshumanizado…
            </p>
            <p className="text-2xl font-bold text-aqua pt-4">
              TAMV Online es tu nuevo hogar.
            </p>
            <p className="text-xl">
              Aquí ningún sueño será ignorado.<br />
              Ningún logro será invisibilizado.<br />
              Ninguna herida será menospreciada.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* What TAMV IS */}
      <Card className="glass-effect border-primary/50">
        <CardHeader>
          <CardTitle className="text-3xl gradient-text text-center">TAMV Online ES…</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center text-lg">
          <p><strong className="text-primary">Un refugio,</strong> una chispa y una revolución</p>
          <p><strong className="text-aqua">Un grito de dignidad</strong> digital, profesional y ética</p>
          <p><strong className="text-secondary">La primera comunidad donde IAs y humanos colaboran, aprenden y se cuidan</strong></p>
          <p><strong className="text-primary">Una plataforma honesta, abierta, y valiente</strong></p>
          
          <div className="pt-6 space-y-2">
            <p className="text-xl text-muted-foreground italic">
              Nacida del sufrimiento, convertida en tecnología con alma,
            </p>
            <p className="text-2xl font-bold gradient-text">
              TAMV Online es esperanza operativa.
            </p>
            <p className="text-lg text-foreground/80">
              Porque cuando una sola persona decide seguir luchando, puede sembrar la semilla de un mundo mejor para todos.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Final CTA */}
      <Card className="glass-effect border-aqua/50 bg-gradient-to-br from-primary/10 to-secondary/10">
        <CardContent className="p-8 text-center space-y-4">
          <h3 className="text-3xl font-bold gradient-text">
            ¿Y tú? ¿Listo para ser parte del renacimiento digital?
          </h3>
          <p className="text-2xl text-aqua font-semibold">
            TAMV Online comienza contigo.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsManifest;