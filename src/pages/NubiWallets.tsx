import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  Wallet, Send, ArrowDownUp, QrCode, Shield, Sparkles,
  Coins, Award, Image, Home, CreditCard, History,
  Plus, ArrowUpRight, ArrowDownLeft, RefreshCw, Lock
} from "lucide-react";

const NubiWallets = () => {
  const walletAssets = [
    { name: "TAMV Credits", symbol: "TC", balance: 12450.75, value: "$1,245.07", icon: Coins, color: "text-primary" },
    { name: "MSR Token", symbol: "MSR", balance: 847.32, value: "Soulbound", icon: Award, color: "text-purple-400" },
    { name: "TAMV Token", symbol: "TAMV", balance: 3250.00, value: "$6,500.00", icon: Sparkles, color: "text-amber-400" },
    { name: "DreamSpace NFTs", symbol: "DSN", balance: 7, value: "~$2,100", icon: Image, color: "text-pink-400" },
    { name: "Land Deeds", symbol: "LAND", balance: 2, value: "~$5,000", icon: Home, color: "text-green-400" }
  ];

  const transactions = [
    { type: "receive", asset: "TC", amount: 500, from: "isabella_ai", time: "hace 2h", status: "completed" },
    { type: "send", asset: "TAMV", amount: 100, to: "user_maya", time: "hace 5h", status: "completed" },
    { type: "receive", asset: "MSR", amount: 25, from: "dao_hybrid", time: "hace 1d", status: "completed" },
    { type: "swap", asset: "TC → TAMV", amount: 1000, to: "500 TAMV", time: "hace 2d", status: "completed" },
    { type: "stake", asset: "TAMV", amount: 2000, to: "DreamSpace Pool", time: "hace 3d", status: "locked" }
  ];

  const nfts = [
    { name: "Genesis DreamSpace", collection: "DreamSpaces OG", rarity: "Legendary", image: "🏛️" },
    { name: "Anubis Guardian", collection: "Aztek Gods", rarity: "Epic", image: "🐕" },
    { name: "Isabella Companion", collection: "AI Companions", rarity: "Rare", image: "✨" },
    { name: "Founder Badge #127", collection: "Bonos Fundador 500", rarity: "Legendary", image: "🏆" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Wallet className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-400 to-amber-500 bg-clip-text text-transparent">
              NubiWallets
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tu wallet multi-activo soberana para el ecosistema TAMV. 
            Gestiona TC, MSR, TAMV, NFTs y DreamSpace Deeds en un solo lugar.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="outline" className="border-primary/50">WalletConnect v2</Badge>
            <Badge variant="outline" className="border-purple-500/50">DID Integrado</Badge>
            <Badge variant="outline" className="border-green-500/50">Multi-Chain</Badge>
            <Badge variant="outline" className="border-amber-500/50">Post-Quantum</Badge>
          </div>
        </div>

        {/* Balance Overview */}
        <Card className="bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 border-primary/30 mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-muted-foreground mb-1">Balance Total Estimado</p>
                <h2 className="text-5xl font-bold">$14,845.07</h2>
                <p className="text-green-400 flex items-center gap-1 mt-2">
                  <ArrowUpRight className="w-4 h-4" />
                  +12.5% este mes
                </p>
              </div>
              <div className="flex gap-3">
                <Button className="bg-primary hover:bg-primary/90">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar
                </Button>
                <Button variant="outline" className="border-primary/50">
                  <QrCode className="w-4 h-4 mr-2" />
                  Recibir
                </Button>
                <Button variant="outline" className="border-purple-500/50">
                  <ArrowDownUp className="w-4 h-4 mr-2" />
                  Swap
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Tabs */}
        <Tabs defaultValue="assets" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card/50">
            <TabsTrigger value="assets">Activos</TabsTrigger>
            <TabsTrigger value="nfts">NFTs</TabsTrigger>
            <TabsTrigger value="history">Historial</TabsTrigger>
            <TabsTrigger value="staking">Staking</TabsTrigger>
          </TabsList>

          {/* Assets Tab */}
          <TabsContent value="assets">
            <div className="grid gap-4">
              {walletAssets.map((asset, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-background ${asset.color}`}>
                          <asset.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{asset.name}</h3>
                          <p className="text-sm text-muted-foreground">{asset.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold">{asset.balance.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">{asset.value}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Send className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <QrCode className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" className="w-full border-dashed border-primary/30">
                <Plus className="w-4 h-4 mr-2" />
                Agregar Token Personalizado
              </Button>
            </div>
          </TabsContent>

          {/* NFTs Tab */}
          <TabsContent value="nfts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {nfts.map((nft, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur border-primary/20 overflow-hidden hover:border-primary/40 transition-all group">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-6xl">
                    {nft.image}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold truncate">{nft.name}</h3>
                    <p className="text-sm text-muted-foreground">{nft.collection}</p>
                    <Badge 
                      className={`mt-2 ${
                        nft.rarity === 'Legendary' ? 'bg-amber-500/20 text-amber-400' :
                        nft.rarity === 'Epic' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}
                    >
                      {nft.rarity}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="w-5 h-5 text-primary" />
                  Historial de Transacciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.map((tx, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-primary/10">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-full ${
                          tx.type === 'receive' ? 'bg-green-500/20' :
                          tx.type === 'send' ? 'bg-red-500/20' :
                          tx.type === 'swap' ? 'bg-blue-500/20' :
                          'bg-purple-500/20'
                        }`}>
                          {tx.type === 'receive' && <ArrowDownLeft className="w-4 h-4 text-green-400" />}
                          {tx.type === 'send' && <ArrowUpRight className="w-4 h-4 text-red-400" />}
                          {tx.type === 'swap' && <RefreshCw className="w-4 h-4 text-blue-400" />}
                          {tx.type === 'stake' && <Lock className="w-4 h-4 text-purple-400" />}
                        </div>
                        <div>
                          <p className="font-medium capitalize">{tx.type} {tx.asset}</p>
                          <p className="text-sm text-muted-foreground">
                            {tx.from && `De: ${tx.from}`}
                            {tx.to && `A: ${tx.to}`}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${tx.type === 'receive' ? 'text-green-400' : ''}`}>
                          {tx.type === 'receive' ? '+' : ''}{tx.amount.toLocaleString()} {tx.asset.split(' ')[0]}
                        </p>
                        <p className="text-sm text-muted-foreground">{tx.time}</p>
                      </div>
                      <Badge variant={tx.status === 'completed' ? 'default' : 'secondary'}>
                        {tx.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Staking Tab */}
          <TabsContent value="staking">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-purple-400" />
                    Staking Activo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-background/50 border border-purple-500/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">TAMV Staked</span>
                      <span className="font-bold">2,000 TAMV</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Pool</span>
                      <span className="text-purple-400">DreamSpace Pool</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">APY</span>
                      <span className="text-green-400">12.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Rewards Acumulados</span>
                      <span className="text-amber-400">+127.5 TAMV</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Reclamar Rewards
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    Stake Más
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Cantidad a Stakear</label>
                    <Input 
                      type="number" 
                      placeholder="0.00 TAMV"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Seleccionar Pool</label>
                    <select className="w-full mt-1 p-2 rounded-lg bg-background border border-primary/20">
                      <option>DreamSpace Pool (12.5% APY)</option>
                      <option>Governance Pool (8.5% APY)</option>
                      <option>Creator Pool (15% APY)</option>
                    </select>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-purple-600">
                    <Lock className="w-4 h-4 mr-2" />
                    Stake TAMV
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Security Notice */}
        <Card className="mt-8 bg-green-500/10 border-green-500/30">
          <CardContent className="p-4 flex items-center gap-4">
            <Shield className="w-8 h-8 text-green-400" />
            <div>
              <h3 className="font-semibold text-green-400">Seguridad Post-Cuántica</h3>
              <p className="text-sm text-muted-foreground">
                Tu wallet está protegida con criptografía Kyber/Falcon y respaldada por TENOCHTITLAN Security Framework
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default NubiWallets;
