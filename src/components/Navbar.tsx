import { Button } from "@/components/ui/button";
import { Menu, X, Brain, Wallet, ShoppingBag, Box, Shield, Users, GraduationCap, Music } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import tamvLogo from "@/assets/tamv-online-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Inicio", href: "/", icon: null },
    { name: "Dashboard", href: "/dashboard", icon: Box },
    { name: "Isabella AI", href: "/isabella", icon: Brain },
    { name: "DreamSpaces", href: "/dreamspaces", icon: Box },
    { name: "Economía", href: "/economy", icon: Wallet },
    { name: "Marketplace", href: "/marketplace", icon: ShoppingBag },
    { name: "ANUBIS", href: "/anubis", icon: Shield },
    { name: "DAO", href: "/dao", icon: Users },
    { name: "Universidad", href: "/university", icon: GraduationCap },
    { name: "KAOS Music", href: "/kaos", icon: Music },
    { name: "Documentación", href: "/docs", icon: null },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-aqua/30 transition-all duration-300 group-hover:border-aqua group-hover:shadow-lg group-hover:shadow-aqua/50">
              <img src={tamvLogo} alt="TAMV DM-X4" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold gradient-text font-orbitron">TAMV DM-X4™</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {navigation.slice(0, 5).map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors font-orbitron flex items-center gap-1 ${
                    location.pathname === item.href ? "text-aqua metallic-text" : "metallic-text hover:text-aqua"
                  }`}
                >
                  {Icon && <Icon size={16} />}
                  {item.name}
                </Link>
              );
            })}
            <Button 
              variant="default" 
              size="sm" 
              className="aqua-glow font-orbitron font-semibold"
              onClick={() => setIsOpen(!isOpen)}
            >
              Más <Menu size={16} className="ml-1" />
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {Icon && <Icon size={16} />}
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
