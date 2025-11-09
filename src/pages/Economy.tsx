import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  Wallet, 
  TrendingUp, 
  Send, 
  ArrowDownToLine,
  DollarSign,
  Trophy,
  Sparkles,
  CreditCard,
  Gift
} from "lucide-react";

const Economy = () => {
  const walletData = {
    balance: 1250,
    usdValue: 125.00,
    monthlyEarnings: 450,
    totalEarnings: 5670
  };

  const transactions = [
    { type: "Recibido", amount: "+50 TC", from: "Lotería TAMV", date: "Hoy, 10:30 AM" },
    { type: "Enviado", amount: "-30 TC", to: "DreamSpace Rent", date: "Ayer, 3:45 PM" },
    { type: "Recibido", amount: "+100 TC", from: "Contenido Premium", date: "Hace 2 días" },
    { type: "Recibido", amount: "+25 TC", from: "Recompensa DAO", date: "Hace 3 días" }
  ];

  const lotteryInfo = {
    nextDraw: "15 de Diciembre, 2025",
    jackpot: "2,500,000 TC",
    ticketsOwned: 5,
    ticketPrice: "1 USD"
  };

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            TAMV Economy
          </h1>
          <p className="text-muted-foreground">
            Sistema Económico Soberano y Transparente
          </p>
        </div>

        {/* Wallet Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-green-500/20 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Balance Total</CardTitle>
              <Wallet className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{walletData.balance} TC</div>
              <p className="text-xs text-muted-foreground">≈ ${walletData.usdValue} USD</p>
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Este Mes</CardTitle>
              <TrendingUp className="h-4 w-4 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{walletData.monthlyEarnings} TC</div>
              <p className="text-xs text-muted-foreground">+35% vs mes anterior</p>
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ganancias Totales</CardTitle>
              <DollarSign className="h-4 w-4 text-teal-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{walletData.totalEarnings} TC</div>
              <p className="text-xs text-muted-foreground">Desde el inicio</p>
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lotería</CardTitle>
              <Trophy className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{lotteryInfo.ticketsOwned}</div>
              <p className="text-xs text-muted-foreground">Tickets activos</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="wallet" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
            <TabsTrigger value="transactions">Transacciones</TabsTrigger>
            <TabsTrigger value="lottery">Lotería</TabsTrigger>
            <TabsTrigger value="memberships">Membresías</TabsTrigger>
          </TabsList>

          {/* Wallet Tab */}
          <TabsContent value="wallet" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Enviar TAMV Credits
                  </CardTitle>
                  <CardDescription>
                    Transfiere TC a otros usuarios del ecosistema
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="recipient">Destinatario</Label>
                    <Input id="recipient" placeholder="ID de usuario o wallet" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Cantidad (TC)</Label>
                    <Input id="amount" type="number" placeholder="0.00" />
                  </div>
                  <Button className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ArrowDownToLine className="h-5 w-5 text-primary" />
                    Retirar Fondos
                  </CardTitle>
                  <CardDescription>
                    Convierte TC a USD y retira a tu cuenta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="withdrawAmount">Cantidad (TC)</Label>
                    <Input id="withdrawAmount" type="number" placeholder="0.00" />
                    <p className="text-sm text-muted-foreground">
                      ≈ $0.00 USD (tasa: 1 TC = $0.10 USD)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="withdrawMethod">Método</Label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option>Tarjeta TAMV Banco™</option>
                      <option>Cuenta Bancaria</option>
                      <option>PayPal</option>
                    </select>
                  </div>
                  <Button className="w-full" variant="outline">
                    <ArrowDownToLine className="h-4 w-4 mr-2" />
                    Retirar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Historial de Transacciones</CardTitle>
                <CardDescription>
                  Todas tus operaciones en el ecosistema TAMV
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((tx, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-background/30">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-full ${tx.type === "Recibido" ? "bg-green-500/20" : "bg-red-500/20"}`}>
                          {tx.type === "Recibido" ? (
                            <ArrowDownToLine className="h-4 w-4 text-green-400" />
                          ) : (
                            <Send className="h-4 w-4 text-red-400" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{tx.type}</p>
                          <p className="text-xs text-muted-foreground">
                            {tx.from ? `De: ${tx.from}` : `A: ${tx.to}`}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-bold ${tx.type === "Recibido" ? "text-green-400" : "text-red-400"}`}>
                          {tx.amount}
                        </p>
                        <p className="text-xs text-muted-foreground">{tx.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Lottery Tab */}
          <TabsContent value="lottery">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-yellow-500/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-400" />
                    Lotería TAMV™
                  </CardTitle>
                  <CardDescription>
                    20,000 oportunidades por $1 USD cada mes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-6 rounded-lg bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20 border border-yellow-500/30">
                    <p className="text-sm text-muted-foreground mb-2">Premio Acumulado</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                      {lotteryInfo.jackpot}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Próximo Sorteo</span>
                      <span className="font-medium">{lotteryInfo.nextDraw}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tus Tickets</span>
                      <span className="font-medium">{lotteryInfo.ticketsOwned}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Precio por Ticket</span>
                      <span className="font-medium">${lotteryInfo.ticketPrice} USD</span>
                    </div>
                  </div>

                  <Button className="w-full">
                    <Gift className="h-4 w-4 mr-2" />
                    Comprar Tickets
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Distribución de Premios</CardTitle>
                  <CardDescription>
                    Sistema de redistribución ética
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 border border-border/30">
                      <span className="text-sm">1er Lugar</span>
                      <Badge variant="default">40%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 border border-border/30">
                      <span className="text-sm">2do-10mo Lugar</span>
                      <Badge variant="secondary">30%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 border border-border/30">
                      <span className="text-sm">11vo-100vo Lugar</span>
                      <Badge variant="outline">20%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 border border-border/30">
                      <span className="text-sm">Fondo Comunitario</span>
                      <Badge variant="outline">10%</Badge>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      La Lotería TAMV redistribuye el 90% de los ingresos entre los participantes,
                      garantizando equidad y transparencia total.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Memberships Tab */}
          <TabsContent value="memberships">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Free", price: "$0", features: ["Acceso básico", "5 TC mensuales", "1 DreamSpace"], color: "border-gray-500/20" },
                { name: "Premium", price: "$9.99", features: ["Todo de Free", "50 TC mensuales", "5 DreamSpaces", "Isabella AI avanzada"], color: "border-purple-500/20", popular: true },
                { name: "VIP", price: "$29.99", features: ["Todo de Premium", "200 TC mensuales", "DreamSpaces ilimitados", "Acceso DAO", "Prioridad soporte"], color: "border-yellow-500/20" }
              ].map((plan, idx) => (
                <Card key={idx} className={`${plan.color} bg-card/50 backdrop-blur relative`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                      Más Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      {plan.name}
                    </CardTitle>
                    <CardDescription>
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/mes</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      <CreditCard className="h-4 w-4 mr-2" />
                      {idx === 1 ? "Tu Plan Actual" : "Cambiar Plan"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Economy;
