import { ThemeProvider } from "../theme/theme-provider";
import { NavLink } from "react-router-dom";
import FadeIn from "react-fade-in";

function TechStackPage() {
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
            <h1 className="text-3xl font-bold text-foreground">Tech Stacks</h1>
          </div>
        </FadeIn>

        {/* Body Section */}
        <FadeIn transitionDuration={600} delay={600}>
          <div className="space-y-8">

            {/* Front-End */}
            <div>
              <h2 className="text-lg font-bold mb-4">Front End</h2>
              <div className="flex flex-wrap gap-2 font-medium">
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">HTML</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">CSS</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Tailwind CSS</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">JavaScript</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">React</span>
              </div>
            </div>

            {/* Back-End */}
            <div>
              <h2 className="text-lg font-bold mb-4">Back End</h2>
              <div className="flex flex-wrap gap-2 font-medium">
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Node.Js</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Python</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Laravel</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">MySQL</span>
              </div>
            </div>

            {/* Mobile Development */}
            <div>
              <h2 className="text-lg font-bold mb-4">Mobile Development</h2>
              <div className="flex flex-wrap gap-2 font-medium">
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Dart</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Flutter</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Android</span>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div>
              <h2 className="text-lg font-bold mb-4">Cloud & DevOps</h2>
              <div className="flex flex-wrap gap-2 font-medium">
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">AWS</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Docker</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Kubernetes</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Terraform</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">GitHub Actions</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">GitLab</span>
              </div>
            </div>

            {/* UI/UX */}
            <div>
              <h2 className="text-lg font-bold mb-4"> UI/UX Tools</h2>
              <div className="flex flex-wrap gap-2 font-medium">
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Figma</span>
              </div>
            </div>

            {/* Developer Tools */}
            <div>
              <h2 className="text-lg font-bold mb-4"> Developer Tools</h2>
              <div className="flex flex-wrap gap-2 font-medium">
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Git</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">GitHub</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">GitHub Actions</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Vercel</span>

                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">VS Code</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">IntelliJ</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">PyCharm</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Android Studio</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Postman</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Trello</span>
                <span class="px-3 py-1 text-sm rounded-md border border-foreground/20 bg-accent/50">Jira</span>
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

export default TechStackPage;
