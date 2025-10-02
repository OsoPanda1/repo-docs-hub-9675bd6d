import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Blocks, Box, Sparkles, Users } from "lucide-react";

const DocsComponents = () => {
  const components = [
    {
      name: "Avatar",
      description: "Sistema de avatares personalizables con soporte para animaciones y expresiones faciales.",
      props: ["model", "animations", "customization"],
    },
    {
      name: "VirtualSpace",
      description: "Contenedor para espacios 3D con gestión automática de física y colisiones.",
      props: ["dimension", "gravity", "maxUsers"],
    },
    {
      name: "InteractiveObject",
      description: "Objetos con los que los usuarios pueden interactuar en el metaverso.",
      props: ["onClick", "onHover", "physics"],
    },
    {
      name: "Teleporter",
      description: "Sistema de teletransportación entre diferentes espacios virtuales.",
      props: ["targetSpace", "animation", "cooldown"],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Biblioteca de Componentes</h1>
        <p className="text-xl text-muted-foreground">
          Componentes reutilizables y optimizados para construir experiencias inmersivas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-effect border-border/50">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <Blocks className="w-6 h-6 text-primary-foreground" />
            </div>
            <CardTitle>Componentes Core</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Componentes fundamentales para construir experiencias en el metaverso.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-border/50">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <Box className="w-6 h-6 text-primary-foreground" />
            </div>
            <CardTitle>Componentes 3D</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Objetos y entidades tridimensionales optimizados para renderizado en tiempo real.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Componentes Disponibles</h2>
        {components.map((component) => (
          <Card key={component.name} className="glass-effect border-border/50">
            <CardHeader>
              <CardTitle className="text-xl">{component.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{component.description}</p>
              <div>
                <h4 className="text-sm font-semibold text-primary mb-2">Props principales:</h4>
                <div className="flex flex-wrap gap-2">
                  {component.props.map((prop) => (
                    <span
                      key={prop}
                      className="px-3 py-1 bg-muted/50 rounded-full text-xs font-mono text-foreground/80"
                    >
                      {prop}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Ejemplo de Uso
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm space-y-2">
            <div><span className="text-secondary">import</span> {`{ Avatar, VirtualSpace }`} <span className="text-secondary">from</span> <span className="text-primary">'@metaverso/components'</span>;</div>
            <div className="mt-4"><span className="text-secondary">function</span> <span className="text-primary">MySpace</span>() {`{`}</div>
            <div className="ml-4"><span className="text-secondary">return</span> (</div>
            <div className="ml-8">{`<VirtualSpace dimension="3d" maxUsers={100}>`}</div>
            <div className="ml-12">{`<Avatar`}</div>
            <div className="ml-16">model=<span className="text-primary">"default"</span></div>
            <div className="ml-16">animations={`{['idle', 'walk']}`}</div>
            <div className="ml-12">/&gt;</div>
            <div className="ml-8">{`</VirtualSpace>`}</div>
            <div className="ml-4">);</div>
            <div>{`}`}</div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Componentes Colaborativos
          </CardTitle>
          <CardContent className="pt-4 px-0">
            <p className="text-muted-foreground">
              Todos los componentes incluyen sincronización automática para experiencias multijugador sin configuración adicional.
            </p>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DocsComponents;
