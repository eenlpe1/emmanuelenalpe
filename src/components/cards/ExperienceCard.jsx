function ExperienceCard() {
  return (
    <div className="group p-4 col-span-1 md:col-span-2 md:row-span-1 space-y-2 rounded-md border bg-accent/50">
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
          className="lucide lucide-briefcase-business"
        >
          <path d="M12 12h.01" />
          <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M22 13a18.15 18.15 0 0 1-20 0" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
        <h2 className="text-lg font-bold">Experience</h2>
      </div>
      <div className="relative space-y-4 mt-4">
        <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-border"></div>
        <div className="relative pl-6 group/role">
          <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 bg-accent-foreground"></div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold">Junior Developer</h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-foreground/70">
                Technology Resource Center, <br />
                Naga College Foundation, Inc.
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 border border-foreground/10">
                2025
              </span>
            </div>
          </div>
        </div>
        <div className="relative pl-6 group/role">
          <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 bg-background hover:bg-accent-foreground transition-colors duration-200"></div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold">Digital Help Desk</h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-foreground/70">
                VP for Digital Transformation, <br />
                Naga College Foundation, Inc.
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 border border-foreground/10">
                2025
              </span>
            </div>
          </div>
        </div>
        <div className="relative pl-6 group/role">
          <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 bg-background hover:bg-accent-foreground transition-colors duration-200"></div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold">Co-Founder</h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-foreground/70">MapaKode</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 border border-foreground/10">
                2024
              </span>
            </div>
          </div>
        </div>
        <div className="relative pl-6 group/role">
          <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 bg-background hover:bg-accent-foreground transition-colors duration-200"></div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold">BS Computer Science</h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-foreground/70">
                Naga College Foundation, Inc.
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 border border-foreground/10">
                2024
              </span>
            </div>
          </div>
        </div>
        <div className="relative pl-6 group/role">
          <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 bg-background hover:bg-accent-foreground transition-colors duration-200"></div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold">{"printf('Hello World!')"}</h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-foreground/70">
                Wrote first line of code
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 border border-foreground/10">
                2018
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
