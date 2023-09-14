import { Button } from "components/ui/button";
import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import { FC } from "react";

interface SocialIconsProps {}

const SocialIcons: FC<SocialIconsProps> = ({}) => {
  return (
    <div className="flex flex-row gap-8">
      <Button
        variant="ghost"
        className="text-emma-primary"
        size="icon"
        href="https://github.com/lakeesiv"
      >
        <Github className="w-8 h-8" />
      </Button>
      <Button
        variant="ghost"
        className="text-emma-primary"
        size="icon"
        href="https://www.linkedin.com/in/lakeesiv/"
      >
        <Linkedin className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default SocialIcons;
