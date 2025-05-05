function AboutCard() {
  return (
    <div className="group p-4 col-span-1 md:col-span-4 space-y-2 rounded-md border border-foreground/20 bg-accent/50">
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
      <p className="text-[14.5px] text-foreground/90 leading-relaxed font-medium mt-5">
        I am a Junior Developer with a passion for building diverse software solutions. I enjoy solving complex problems and creating user-friendly applications. My journey in tech has been fueled by curiosity and a drive to continuously improve my technical and soft skills.
        <br /><br />
        I always strive to learn new technologies and frameworks. I am currently focused on enhancing my skills as a developer, including cloud computing and DevOps practices, as well as exploring the latest trends in software development and cloud computing.
        <br /><br />
        Recently, I have been working on several projects that enhance my skills, as well as helping my company optimize processes and improve service offerings to customers. I am always open to new opportunities and challenges that allow me to grow and contribute to innovative projects.
      </p>
    </div>
  );
}

export default AboutCard;
