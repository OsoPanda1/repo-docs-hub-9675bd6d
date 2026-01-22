import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wallet, Coins, Lock, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlockchainSection = () => {
  const chains = [
    { name: "MSR Chain", description: "Blockchain reparable multi-soberana", color: "from-cyan-500 to-blue-500" },
    { name: "TAU Token", description: "Economía simbiótica del ecosistema", color: "from-yellow-500 to-orange-500" },
    { name: "BookPI", description: "Registro académico inmutable", color: "from-green-500 to-emerald-500" },
  ];

  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-cyan-500/50">
            <Lock className="w-4 h-4 mr-2 text-cyan-500" />
            Infraestructura Blockchain
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            Economía <span className="text-cyan-500">Descentralizada</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            MSR Blockchain + NubiWallets + Regla de distribución 20/30/50.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {chains.map((chain, idx) => (
            <Card key={idx} className="border-border/50 bg-card/50 backdrop-blur overflow-hidden group">
              <CardContent className="p-6 relative">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${chain.color}`} />
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${chain.color} flex items-center justify-center mb-4`}>
                  <Coins className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{chain.name}</h3>
                <p className="text-sm text-muted-foreground">{chain.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-primary/20 bg-card/50 backdrop-blur">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-orbitron">NubiWallets</h3>
                  <p className="text-muted-foreground">Wallet multi-activo para TC, MSR, TAMV y NFTs</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-center px-6 border-r border-border/50">
                  <p className="text-2xl font-bold text-primary">20%</p>
                  <p className="text-xs text-muted-foreground">Fénix</p>
                </div>
                <div className="text-center px-6 border-r border-border/50">
                  <p className="text-2xl font-bold text-cyan-500">30%</p>
                  <p className="text-xs text-muted-foreground">Infra</p>
                </div>
                <div className="text-center px-6">
                  <p className="text-2xl font-bold text-green-500">50%</p>
                  <p className="text-xs text-muted-foreground">Reserva</p>
                </div>
              </div>

              <Link to="/nubiwallets">
                <Button className="bg-gradient-to-r from-primary to-purple-600">
                  <Zap className="w-4 h-4 mr-2" />
                  Abrir Wallet
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BlockchainSection;
