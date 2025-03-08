function ProjectsCard() {
  return (
    <div className="p-4 col-span-1 md:col-span-4 space-y-2 group rounded-md border bg-accent/40">
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
        <a
          className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-0.5 transition-colors duration-200"
          href="#"
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
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid:cols-2 gap-2">
        <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/10 hover:bg-foreground/15 transition-colors duration-200">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="block space-y-1"
            href="https://github.com/eenlpe1/NextWork-AWS-Projects"
          >
            <h3 className="text-sm font-semibold">AWS Projects</h3>
            <p className="text-xs text-foreground/70">
              Collection of hands-on cloud engineering projects using AWS
              services.
            </p>
            <p className="text-xs text-foreground/50 font-mono rounded-md inline-block mt-1 break-all">
              github.com/eenlpe1/NextWork-AWS-Projects
            </p>
          </a>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              Cloud
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              DevOps
            </span>
          </div>
        </div>
        <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/10 hover:bg-foreground/15 transition-colors duration-200">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="block space-y-1"
            href="https://github.com/eenlpe1/ARAL-Kids"
          >
            <h3 className="text-sm font-semibold">ARAL-Kids</h3>
            <p className="text-xs text-foreground/70">
              Augmented Reality Android-Based Learning for Kids.
            </p>
            <p className="text-xs text-foreground/50 font-mono rounded-md inline-block mt-1 break-all">
              github.com/eenlpe1/ARAL-Kids
            </p>
          </a>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              AR
            </span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
              Mobile Development
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
