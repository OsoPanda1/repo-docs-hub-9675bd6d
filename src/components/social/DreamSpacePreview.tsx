import { Globe, Users, Sparkles, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DreamSpace {
  id: number;
  name: string;
  creator: string;
  visitors: number;
  preview: string;
}

interface DreamSpacePreviewProps {
  space: DreamSpace;
}

const DreamSpacePreview = ({ space }: DreamSpacePreviewProps) => {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="group rounded-2xl overflow-hidden glass-effect border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
      {/* Preview Image */}
      <div className="relative aspect-[4/3]">
        <img 
          src={space.preview} 
          alt={space.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse delay-300 opacity-60" />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-aqua rounded-full animate-pulse delay-500 opacity-60" />
        </div>
        
        {/* XR Badge */}
        <Badge className="absolute top-3 left-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0">
          <Globe className="w-3 h-3 mr-1.5" />
          XR Space
        </Badge>
        
        {/* Visitors */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm">
          <Users className="w-3.5 h-3.5 text-primary" />
          <span className="text-white text-xs font-medium">{formatNumber(space.visitors)}</span>
        </div>
        
        {/* Enter Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link to={`/dreamspaces/${space.id}`}>
            <Button className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-xl shadow-primary/30 gap-2">
              <Sparkles className="w-4 h-4" />
              Entrar al Espacio
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-secondary" />
          {space.name}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <Avatar className="w-5 h-5 ring-1 ring-primary/30">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="text-xs">{space.creator[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">por {space.creator}</span>
        </div>
      </div>
    </div>
  );
};

export default DreamSpacePreview;