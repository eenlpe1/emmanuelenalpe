function AboutCard() {
  return (
    <div className="group p-4 col-span-1 md:col-span-4 space-y-2 rounded-md border bg-accent/40">
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
          className="lucide lucide-info"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
        <h2 className="text-lg font-bold">About</h2>
      </div>
      <p className="text-[14.5px] text-foreground/90 leading-relaxed font-normal">
        A Junior Developer and aspiring Cloud/DevOps Engineer in the making
        with a strong foundation in cloud technologies and software development.
        I’m passionate about cloud computing, software development, and building
        scalable systems.
        <br />
        <br />
        I’ve worked on my personal projects involving AWS, mobile development,
        and full-stack development. Currently, I’m preparing for my AWS
        Solutions Architect Associate certification while expanding my
        technical expertise.
        <br />
        <br />
        I’m always eager to learn, optimize workflows, and explore new tech.
        Let’s connect and create something awesome!
      </p>
    </div>
  );
}

export default AboutCard;
