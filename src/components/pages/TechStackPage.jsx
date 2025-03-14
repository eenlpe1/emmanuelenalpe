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
