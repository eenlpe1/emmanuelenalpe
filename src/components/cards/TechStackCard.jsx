import { NavLink } from "react-router-dom";

function TechStackCard() {
  return (
    <div className="p-4 col-span-1 md:col-span-3 space-y-2 group rounded-md border border-foreground/20 bg-accent/50">
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
            className="lucide lucide-code-xml"
          >
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="m14.5 4-5 16" />
          </svg>
          <h2 className="text-lg font-bold">Tech Stack</h2>
        </div>
        <nav>
          <NavLink
            to="/tech-stacks"
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
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold mb-2">Frontend</h3>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              HTML
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              CSS
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              BootStrap 5
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              TailwindCSS
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              JavaScript
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              React
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              Next.js
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Backend</h3>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              Node.js
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              Python
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              CodeIgniter
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              Laravel
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              MySQL
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Cloud &amp; DevOps</h3>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              AWS
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              Docker
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              Kubernetes
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              Terraform
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              GitHub Actions
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              Git/GitHub
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/40">
              GitLab
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStackCard;
