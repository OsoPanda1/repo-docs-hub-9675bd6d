import { Plus, Radio } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Story {
  id: number;
  name: string;
  avatar: string;
  isOwn?: boolean;
  hasNew?: boolean;
  isLive?: boolean;
}

interface StoryBubbleProps {
  story: Story;
}

const StoryBubble = ({ story }: StoryBubbleProps) => {
  return (
    <button className="flex flex-col items-center gap-1.5 min-w-[72px] group">
      <div className={`relative p-0.5 rounded-full ${
        story.isLive 
          ? 'bg-gradient-to-tr from-red-500 via-pink-500 to-purple-500' 
          : story.hasNew 
            ? 'bg-gradient-to-tr from-primary via-secondary to-primary' 
            : 'bg-muted'
      }`}>
        <div className="bg-background p-0.5 rounded-full">
          <Avatar className="w-14 h-14 ring-2 ring-background">
            <AvatarImage src={story.avatar} />
            <AvatarFallback className="bg-muted">
              {story.isOwn ? <Plus className="w-5 h-5" /> : story.name[0]}
            </AvatarFallback>
          </Avatar>
        </div>
        
        {story.isOwn && (
          <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center ring-2 ring-background">
            <Plus className="w-4 h-4 text-primary-foreground" />
          </div>
        )}
        
        {story.isLive && (
          <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-red-500 text-[10px] font-bold text-white flex items-center gap-0.5 ring-2 ring-background">
            <Radio className="w-2.5 h-2.5 animate-pulse" />
            LIVE
          </div>
        )}
      </div>
      
      <span className={`text-xs font-medium truncate max-w-[72px] ${
        story.hasNew || story.isLive ? 'text-foreground' : 'text-muted-foreground'
      }`}>
        {story.isOwn ? 'Tu Historia' : story.name}
      </span>
    </button>
  );
};

export default StoryBubble;