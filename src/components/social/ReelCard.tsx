import { Play, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Reel {
  id: number;
  thumbnail: string;
  views: string;
  author: string;
}

interface ReelCardProps {
  reel: Reel;
}

const ReelCard = ({ reel }: ReelCardProps) => {
  return (
    <button className="relative aspect-[9/16] rounded-2xl overflow-hidden group">
      <img 
        src={reel.thumbnail} 
        alt="" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary/30">
          <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
        </div>
      </div>
      
      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white text-sm font-medium truncate">@{reel.author}</p>
        <div className="flex items-center gap-1 text-white/70 text-xs mt-1">
          <Eye className="w-3.5 h-3.5" />
          <span>{reel.views}</span>
        </div>
      </div>
      
      {/* Reel Badge */}
      <Badge className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white border-0">
        <Play className="w-3 h-3 mr-1 fill-current" />
        Reel
      </Badge>
    </button>
  );
};

export default ReelCard;