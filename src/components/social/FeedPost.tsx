import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Play, BadgeCheck, Bot } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PostAuthor {
  name: string;
  handle: string;
  avatar: string;
  verified?: boolean;
  isAI?: boolean;
}

interface PostMedia {
  type: "image" | "video";
  url: string;
  duration?: string;
}

interface PostStats {
  likes: number;
  comments: number;
  shares: number;
  saves: number;
}

interface FeedPostProps {
  post: {
    id: number;
    author: PostAuthor;
    content: string;
    media?: PostMedia;
    stats: PostStats;
    timestamp: string;
    hasNFT?: boolean;
  };
}

const FeedPost = ({ post }: FeedPostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(post.stats.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <article className="glass-effect rounded-2xl border border-border/50 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
      {/* Header */}
      <div className="p-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar className={`w-11 h-11 ring-2 ${post.author.isAI ? 'ring-secondary' : 'ring-primary/30'}`}>
            <AvatarImage src={post.author.avatar} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-foreground">{post.author.name}</span>
              {post.author.verified && (
                <BadgeCheck className="w-4 h-4 text-primary fill-primary/20" />
              )}
              {post.author.isAI && (
                <Bot className="w-4 h-4 text-secondary" />
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{post.author.handle}</span>
              <span>·</span>
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-foreground leading-relaxed whitespace-pre-wrap">
          {post.content}
        </p>
        {post.hasNFT && (
          <Badge variant="outline" className="mt-2 border-secondary text-secondary">
            ✨ NFT Certificado
          </Badge>
        )}
      </div>

      {/* Media */}
      {post.media && (
        <div className="relative group">
          <img 
            src={post.media.url} 
            alt="" 
            className="w-full aspect-video object-cover"
          />
          {post.media.type === "video" && (
            <>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="lg" className="rounded-full bg-primary/90 hover:bg-primary">
                  <Play className="w-6 h-6 fill-current" />
                </Button>
              </div>
              {post.media.duration && (
                <Badge className="absolute bottom-3 right-3 bg-black/70">
                  {post.media.duration}
                </Badge>
              )}
            </>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="p-4 flex items-center justify-between border-t border-border/30">
        <div className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`gap-2 ${isLiked ? 'text-red-500' : 'text-muted-foreground'}`}
            onClick={handleLike}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            <span>{formatNumber(likes)}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
            <MessageCircle className="w-5 h-5" />
            <span>{formatNumber(post.stats.comments)}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
            <Share2 className="w-5 h-5" />
            <span>{formatNumber(post.stats.shares)}</span>
          </Button>
        </div>
        <Button 
          variant="ghost" 
          size="icon"
          className={isSaved ? 'text-primary' : 'text-muted-foreground'}
          onClick={() => setIsSaved(!isSaved)}
        >
          <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
        </Button>
      </div>
    </article>
  );
};

export default FeedPost;