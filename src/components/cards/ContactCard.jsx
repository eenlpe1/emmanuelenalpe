function ContactCard() {
  return (
    <div className="p-4 col-span-1 md:col-span-2 space-y-3 group rounded-md border bg-accent/40">
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
          className="lucide lucide-link"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        <h2 className="text-lg font-bold">Let's Connect</h2>
      </div>
      <div className="space-y-4">
        <a
          target="_blank"
          className="block p-2 rounded-md bg-foreground/5 border border-foreground/10 hover:bg-foreground/15 transition-colors duration-200"
          href="https://emmanuelenalpe-portfolio.vercel.app/"
        >
          <p className="text-xs text-foreground/70">Link</p>
          <p className="text-[13px] font-medium">emmanuelenalpe-portfolio.vercel.app</p>
        </a>
        <a
          className="block p-2 rounded-md bg-foreground/5 border border-foreground/10 hover:bg-foreground/15 transition-colors duration-200"
          href="mailto:eenalpe3@gmail.com"
        >
          <p className="text-xs text-foreground/70">Email</p>
          <p className="text-sm font-medium">eenalpe3@gmail.com</p>
        </a>
        <div>
          <p className="text-xs text-foreground/70 mb-2">Social Links</p>
          <div className="grid grid-cols-2 gap-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-md bg-foreground/5 border border-foreground/10 hover:bg-foreground/15 transition-colors duration-200"
              aria-label="Visit LinkedIn profile"
              title="Visit LinkedIn profile"
              href="https://www.linkedin.com/in/eenlpe1/"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-md bg-foreground/5 border border-foreground/10 hover:bg-foreground/15 transition-colors duration-200"
              aria-label="Visit GitHub profile"
              title="Visit GitHub profile"
              href="https://github.com/eenlpe1"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs text-foreground/70 mb-2">Resume</p>
          <a
            className="block p-2 rounded-md bg-foreground/5 border border-foreground/10 hover:bg-foreground/15 transition-colors duration-200"
            href="mailto:eenalpe3@gmail.com"
          >
            <p className="text-sm font-medium">Emmanuel Enalpe III - Resume</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
