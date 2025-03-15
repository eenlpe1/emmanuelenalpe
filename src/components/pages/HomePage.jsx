import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "@/components/theme/mode-toggle";
import AboutCard from "../cards/AboutCard";
import ExperienceCard from "../cards/ExperienceCard";
import TechStackCard from "../cards/TechStackCard";
import CertificationCard from "../cards/CertificationCard";
import ProjectCard from "../cards/ProjectCard";
import ContactCard from "../cards/ContactCard";
import FadeIn from "react-fade-in";

function HomePage() {
  return (
    <ThemeProvider>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <FadeIn transitionDuration={500} delay={400}>
          <section id="header-section" className="mb-8">
            <div className="flex items-center gap-4 md:gap-6">
              <img
                src="/headerImage.png"
                alt="Emmanuel Enalpe"
                height={160}
                width={160}
                className="rounded-lg w-32 h-32 md:w-40 md:h-40 object-cover flex shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h1 className="text-lg md:text-2xl font-bold truncate">
                    Emmanuel Enalpe III
                  </h1>
                  <ModeToggle />
                </div>
                <p className="text-xs md:text-sm text-foreground/70 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin-house"
                  >
                    <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
                    <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
                    <path d="M18 22v-3" />
                    <circle cx="10" cy="10" r="3" />
                  </svg>
                  <span className="truncate">Naga City, Philippines</span>
                </p>
                <p className="text-sm font-semibold md:text-base mt-3 md:mt-2 font">
                  Developer and AWS Certified
                </p>
                {/* Email Button */}
                <div className="mt-3 md:mt-4">
                  <a
                    className="inline-flex h-7 md:h-9 items-center rounded-sm bg-foreground px-2.5 md:px-3.5 text-[10px] md:text-xs font-medium text-background transition-all duration-200 hover:bg-foreground/90 hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap"
                    href="mailto:eenalpe3@gmail.com"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span className="text-left font-medium">Send Email</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Body Section */}
        <FadeIn transitionDuration={600} delay={600}>
          <section className="grid grid-cols-1 md:grid-cols-6 gap-2">
            <AboutCard />

            <ExperienceCard />

            <TechStackCard />

            <CertificationCard />

            <ProjectCard />

            <ContactCard />
          </section>
        </FadeIn>

        {/* Footer Section */}
        <FadeIn transitionDuration={700} delay={800}>
          <footer className="max-w-4xl mx-auto px-1.5 py-4 border-t border-foreground/30 mt-12">
            <p className="text-sm text-foreground/70 flex items-center justify-center">
              © {new Date().getFullYear()}. Emmanuel Enalpe III. All rights
              reserved.
            </p>
          </footer>
        </FadeIn>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
