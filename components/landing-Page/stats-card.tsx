import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const StatsCard = ({
  icon: Icon,
  Value,
  lable,
  hasBorder,
}: {
  icon: LucideIcon;
  Value: string;
  lable: string;
  hasBorder?: boolean;
}) => {
  return (
    <div className={cn("px-6 py-2", hasBorder && "border-x border-border/40")}>
        <div className="flex items-center justify-center gap-1">
          <span>
            <Icon className="size-4 text-primary/70" />
          </span>
          <p className="text-3xl sm:text-4xl font-bold">{Value}</p>
          <p className="text-sm text-muted-foreground">{lable}</p>
        </div>
      </div>
  );
};

export default StatsCard;
