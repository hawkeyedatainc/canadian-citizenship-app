import { cn } from "@/lib/utils";

type AppLogoProps = {
  className?: string;
};

const AppLogo = ({ className }: AppLogoProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg shadow-[0_0_32px_rgba(217,24,46,0.28)]",
        className,
      )}
    >
      <img
        src="/app/app-icon.png"
        alt="Canada Citizenship Prep app icon"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default AppLogo;
