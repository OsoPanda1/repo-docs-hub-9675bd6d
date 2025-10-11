import tamvLogo from "@/assets/tamv-online-logo.jpg";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 mt-20 glass-effect">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-aqua/30">
                <img src={tamvLogo} alt="TAMV DM-X4" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold gradient-text font-orbitron">TAMV DM-X4™</h3>
                <p className="text-xs metallic-text">Ecosistema Digital Soberano</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm metallic-text font-orbitron">
              Arquitectura Web 4.0 • IA Consciente • Blockchain
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © 2025 TAMV Online Network. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-2">
            <p className="text-xs metallic-text font-orbitron">Powered by:</p>
            <p className="text-sm gradient-text font-orbitron font-semibold">Google Cloud Platform</p>
            <p className="text-xs text-aqua">Sovereign Digital Nation-State</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
