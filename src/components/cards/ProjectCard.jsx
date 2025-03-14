import { NavLink } from "react-router-dom";
import { Separator } from "@/components/ui/separator"


function ProjectCard() {
  return (
    <div className="p-4 col-span-1 md:col-span-4 space-y-2 group rounded-md border border-foreground/20 bg-accent/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-panels-top-left"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
          <h2 className="text-lg font-bold">Projects</h2>
        </div>
        <nav>
          <NavLink
            to="/projects"
            className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-0.5 transition-colors duration-200"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </NavLink>
        </nav>
      </div>
      <div className="grid grid-cols-1 sm:grid:cols-2 gap-2">
        <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200">
          <div>
            <a target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/eenlpe1/NextWork-AWS-Projects"
              className="space-y-1">
              <h4 className="text-sm font-bold leading-none">AWS Projects</h4>
              <p className="text-sm text-muted-foreground">
                Collection of hands-on cloud engineering projects using AWS
                services.
              </p>
              <p className="text-xs text-foreground/50 font-mono rounded-md inline-block mt-1 break-all">
                github.com/eenlpe1/NextWork-AWS-Projects
              </p>
            </a>
            <Separator className="my-2 bg-foreground/40" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div className="text-xs">Cloud</div>
              <Separator orientation="vertical" className="bg-foreground/40" />
              <div className="text-xs">DevOps</div>
            </div>
          </div>
        </div>
        <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200">
          <div>
            <a target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/eenlpe1/ARAL-Kids"
              className="space-y-1">
              <h4 className="text-sm font-bold leading-none">ARAL-Kids</h4>
              <p className="text-sm text-muted-foreground">
                Augmented Reality Android-Based Learning for Kids.
              </p>
              <p className="text-xs text-foreground/50 font-mono rounded-md inline-block mt-1 break-all">
                github.com/eenlpe1/ARAL-Kids
              </p>
            </a>
            <Separator className="my-2 bg-foreground/40" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div className="text-xs">Augmented Reality</div>
              <Separator orientation="vertical" className="bg-foreground/40" />
              <div className="text-xs">Mobile Development</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
