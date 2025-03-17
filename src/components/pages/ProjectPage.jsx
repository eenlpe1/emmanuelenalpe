import { ThemeProvider } from "../theme/theme-provider";
import { NavLink } from "react-router-dom";
import FadeIn from "react-fade-in";
import { Separator } from "@/components/ui/separator"

function ProjectPage() {
  return (
    <ThemeProvider>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <FadeIn transitionDuration={500} delay={400}>
          <div className="flex justify-between gap-4 mb-8">
            <nav>
              <NavLink
                to="/"
                className="text-[14px] text-foreground/70 hover:text-foreground mt-2.5 flex items-center gap-1.5 transition-colors duration-200"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-left"
                >
                  <path d="M6 8L2 12L6 16" />
                  <path d="M2 12H22" />
                </svg> Back to Home
              </NavLink>
            </nav>
            <h1 className="text-3xl font-bold text-foreground">All Projects</h1>
          </div>
        </FadeIn>

        {/* Body Section */}
        <FadeIn transitionDuration={600} delay={600}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                <Separator className="my-1 bg-foreground/40" />
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
                <Separator className="my-1 bg-foreground/40" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div className="text-xs">Augmented Reality</div>
                  <Separator orientation="vertical" className="bg-foreground/40" />
                  <div className="text-xs">VuforiaSDK</div>
                  <Separator orientation="vertical" className="bg-foreground/40" />
                  <div className="text-xs">Mobile Development</div>
                </div>
              </div>
            </div>
            <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200">
              <div>
                <a target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/eenlpe1/Naga-Yon"
                  className="space-y-1">
                  <h4 className="text-sm font-bold leading-none">Naga'Yon</h4>
                  <p className="text-sm text-muted-foreground">
                    Flutter-based mobile application that can place a booking for a customer and manage the user account by the admin.
                  </p>
                  <p className="text-xs text-foreground/50 font-mono rounded-md inline-block mt-1 break-all">
                    github.com/eenlpe1/Naga-Yon
                  </p>
                </a>
                <Separator className="my-1 bg-foreground/40" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div className="text-xs">Flutter</div>
                  <Separator orientation="vertical" className="bg-foreground/40" />
                  <div className="text-xs">Mobile Development</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Footer Section */}
        <FadeIn transitionDuration={700} delay={800}>
          <footer className="max-w-4xl mx-auto px-1.5 py-4 border-t mt-12">
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

export default ProjectPage;