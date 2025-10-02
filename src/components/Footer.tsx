const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">M</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Metaverso TAMV © 2025
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Documentación completa para desarrolladores
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
