import { Button } from "components/ui/button";
import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import { FC } from "react";

interface SocialIconsProps {}

const SocialIcons: FC<SocialIconsProps> = ({}) => {
  return (
    <div className="flex flex-row gap-3">
      <Button
        variant="ghost"
        className="text-theme-primary"
        size="icon"
        href="https://github.com/lakeesiv"
      >
        <Github className="w-5 h-5" />
      </Button>
      <Button
        variant="ghost"
        className="text-theme-primary"
        size="icon"
        href="https://www.linkedin.com/in/lakeesiv/"
      >
        <Linkedin className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default SocialIcons;
