import { ParsedProjectPageObjectResponse } from "app/get";
import { Github, Globe, Wrench } from "lucide-react";
import { FC } from "react";

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  page: ParsedProjectPageObjectResponse;
}

const InfoCard: FC<InfoCardProps> = ({ page }) => {
  const tags = page.parsed.tags;
  const website = page.parsed.website;
  const github = page.parsed.github;

  return (
    <div className="bg-card text-theme-primary p-5 rounded-md shadow-sm flex flex-col gap-2">
      {/* Github Link */}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row items-center gap-3">
            <Github className="w-5 h-5" />
            <div className="hover:text-theme-secondary text-muted-foreground transition ease-in duration-200">
              {conactGithub(github)}
            </div>
          </div>
        </a>
      )}
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row items-center gap-3">
            <Globe className="w-5 h-5" />
            <div className="hover:text-theme-secondary text-muted-foreground transition ease-in duration-200">
              {website}
            </div>
          </div>
        </a>
      )}
      {/* Tags */}

      <ul className="mt-4 flex flex-wrap ">
        {tags.map((tag) => (
          <li
            key={tag}
            className="inline-block bg-theme-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

const conactGithub = (github: string) => {
  // remove https and github.com from the url leaving only the username/repo
  const repo = github.replace("https://github.com/", "");
  return repo;
};

export default InfoCard;
