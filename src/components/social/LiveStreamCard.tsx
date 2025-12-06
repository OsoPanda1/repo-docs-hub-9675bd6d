import { Radio, Users, Play } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface LiveStream {
  id: number;
  title: string;
  host: string;
  viewers: number;
  thumbnail: string;
  category: string;
}

interface LiveStreamCardProps {
  stream: LiveStream;
}

const LiveStreamCard = ({ stream }: LiveStreamCardProps) => {
  const formatViewers = (num: number) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="group rounded-2xl overflow-hidden glass-effect border border-border/50 hover:border-red-500/30 transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative aspect-video">
        <img 
          src={stream.thumbnail} 
          alt={stream.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Live Badge */}
        <Badge className="absolute top-3 left-3 bg-red-500 text-white border-0 animate-pulse">
          <Radio className="w-3 h-3 mr-1.5 animate-pulse" />
          EN VIVO
        </Badge>
        
        {/* Category Badge */}
        <Badge variant="outline" className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white border-white/20">
          {stream.category}
        </Badge>
        
        {/* Viewers */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/70 backdrop-blur-sm">
          <Users className="w-3.5 h-3.5 text-red-400" />
          <span className="text-white text-xs font-medium">{formatViewers(stream.viewers)}</span>
        </div>
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="lg" className="rounded-full bg-red-500/90 hover:bg-red-500 shadow-lg shadow-red-500/30">
            <Play className="w-6 h-6 fill-current" />
          </Button>
        </div>
      </div>
      
      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-red-400 transition-colors">
          {stream.title}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>{stream.host[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{stream.host}</span>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamCard;