import { ThemeProvider } from "../theme/theme-provider";
import { NavLink } from "react-router-dom";
import FadeIn from "react-fade-in";

function CertificationPage() {
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
            <h1 className="text-3xl font-bold text-foreground">All Certifications</h1>
          </div>
        </FadeIn>

        {/* Body Section */}
        <FadeIn transitionDuration={600} delay={600}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200">
              <div>
                <a target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.credly.com/badges/e5f36b11-42db-48e0-8c17-d665896e9a0f/linked_in?t=srarg5"
                  className="space-y-2">
                  <h4 className="font-semibold">Intoduction to Cybersecurity</h4>
                  <p className="text-xs text-foreground/70">CISCO Networking Academy</p>
                </a>
              </div>
            </div>

            <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200">
              <div>
                <a target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.credly.com/badges/699eed7b-1a46-4034-b755-751f142fd960/linked_in?t=so793s"
                  className="space-y-2">
                  <h4 className="font-semibold">AWS Certified Cloud Practitioner</h4>
                  <p className="text-xs text-foreground/70">Amazon Web Services</p>
                </a>
              </div>
            </div>

            <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200">
              <div>
                <a target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.credly.com/badges/6b620995-0606-4f7b-87cd-0641637431fa/linked_in?t=smvhl9"
                  className="space-y-2">
                  <h4 className="font-semibold">AWS Knowledge: Cloud Essentials</h4>
                  <p className="text-xs text-foreground/70">Amazon Web Services</p>
                </a>
              </div>
            </div>

            <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200">
              <div>
                <a target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.credly.com/badges/78f3956d-75c1-4058-9a2d-f5d513cf2b45/linked_in?t=sljd9q"
                  className="space-y-2">
                  <h4 className="font-semibold">AWS Cloud Quest: Cloud Practitioner</h4>
                  <p className="text-xs text-foreground/70">Amazon Web Services</p>
                </a>
              </div>
            </div>

            <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200">
              <div>
                <a target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.credly.com/badges/2b4d5319-0977-4e9e-81b7-107ad1ca4947"
                  className="space-y-2">
                  <h4 className="font-semibold">AWS Educate: Getting Started with Networking</h4>
                  <p className="text-xs text-foreground/70">Amazon Web Services</p>
                </a>
              </div>
            </div>

            <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200">
              <div>
                <a target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.credly.com/badges/9b47a7a0-90cc-4902-b0a3-23db0622a59d"
                  className="space-y-2">
                  <h4 className="font-semibold">AWS Educate: Getting Started with Compute</h4>
                  <p className="text-xs text-foreground/70">Amazon Web Services</p>
                </a>
              </div>
            </div>

            <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200">
              <div>
                <a target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.credly.com/badges/b5b09197-02d1-42ad-8856-86c6e3a8cd25"
                  className="space-y-2">
                  <h4 className="font-semibold">AWS Educate: Getting Started with Storage</h4>
                  <p className="text-xs text-foreground/70">Amazon Web Services</p>
                </a>
              </div>
            </div>

            <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200">
              <div>
                <a target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.credly.com/badges/0865a3e1-6275-4376-8678-f4646c8684ed"
                  className="space-y-2">
                  <h4 className="font-semibold">AWS Educate: Introduction to Cloud 101</h4>
                  <p className="text-xs text-foreground/70">Amazon Web Services</p>
                </a>
              </div>
            </div>

            <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200">
              <div>
                <a target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                  className="space-y-2">
                  <h4 className="font-semibold">IT Passport Certification Examination</h4>
                  <p className="text-xs text-foreground/70">Philippine National IT Standard (PhilNITS) Foundation, Inc.</p>
                </a>
              </div>
            </div>

            <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200">
              <div>
                <a target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                  className="space-y-2">
                  <h4 className="font-semibold">Certified Cloud System Analyst</h4>
                  <p className="text-xs text-foreground/70">East West International Educational Specialists</p>
                </a>
              </div>
            </div>

            <div className="p-3 space-y-1 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200">
              <div>
                <a target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                  className="space-y-2">
                  <h4 className="font-semibold">Introduction to Cybersecurity 1</h4>
                  <p className="text-xs text-foreground/70">East West International Educational Specialists</p>
                </a>
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

export default CertificationPage;
