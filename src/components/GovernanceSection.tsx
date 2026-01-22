import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Scale, FileText, Vote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GovernanceSection = () => {
  const constitutionHighlights = [
    "Dignidad Digital Universal",
    "Soberanía de Datos",
    "Economía Justa 20/30/50",
    "Protocolo TIME UP",
  ];

  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/50">
            <Scale className="w-4 h-4 mr-2 text-primary" />
            Metagobernanza
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            Constitución <span className="text-primary">Digital TAMV</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Gobernanza federada de 7 capas con DAO híbrida y DEKATEOTL.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Artículos Fundamentales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {constitutionHighlights.map((article, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                      {idx + 1}
                    </div>
                    <span className="font-medium">{article}</span>
                  </div>
                ))}
              </div>
              <Link to="/governance">
                <Button className="w-full mt-6" variant="outline">
                  Ver Constitución Completa
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-purple-500/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Vote className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">DAO Híbrida</h3>
                    <p className="text-sm text-muted-foreground">
                      Votación on-chain + off-chain con DEKATEOTL
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-cyan-500/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <Scale className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">MSR Blockchain</h3>
                    <p className="text-sm text-muted-foreground">
                      Registro inmutable de evidencias y transacciones
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Link to="/dao">
              <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500">
                Participar en Gobernanza
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
