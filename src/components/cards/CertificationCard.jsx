import { NavLink } from "react-router-dom";

function CertificationCard() {
  return (
    <div className="p-4 col-span-1 md:col-span-3 space-y-2 group rounded-md border border-foreground/20 bg-accent/50">
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
            className="lucide lucide-badge-check"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <h2 className="text-lg font-bold">Recent Certifications</h2>
        </div>
        <nav>
          <NavLink
            to="/certifications"
            className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-0.5 transition-colors duration-200"
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
          </NavLink>
        </nav>
      </div>
      <div className="space-y-1.5">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="block p-2.5 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200"
          href="https://www.credly.com/badges/e5f36b11-42db-48e0-8c17-d665896e9a0f/linked_in?t=srarg5"
        >
          <h3 className="text-xs font-bold">Introduction to Cybersecurity</h3>
          <p className="text-[11.5px] text-foreground/70">CISCO Networking Academy</p>
        </a>
      </div>
      <div className="space-y-1.5">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="block p-2.5 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200"
          href="https://www.credly.com/badges/699eed7b-1a46-4034-b755-751f142fd960/linked_in?t=so793s"
        >
          <h3 className="text-xs font-bold">
            AWS Certified Cloud Practitioner
          </h3>
          <p className="text-[11.5px] text-foreground/70">
            Amazon Web Services
          </p>
        </a>
      </div>
      <div className="space-y-1.5">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="block p-2.5 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200"
          href="https://www.credly.com/badges/6b620995-0606-4f7b-87cd-0641637431fa/linked_in?t=smvhl9"
        >
          <h3 className="text-xs font-bold">AWS Knowledge: Cloud Essentials</h3>
          <p className="text-[11.5px] text-foreground/70">
            Amazon Web Services
          </p>
        </a>
      </div>
      <div className="space-y-1.5">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="block p-2.5 rounded-md bg-foreground/5 border border-foreground/20 hover:bg-foreground/15 transition-colors duration-200"
          href="https://www.credly.com/badges/78f3956d-75c1-4058-9a2d-f5d513cf2b45/linked_in?t=sljd9q"
        >
          <h3 className="text-xs font-bold">
            AWS Cloud Quest: Cloud Practitioner
          </h3>
          <p className="text-[11.5px] text-foreground/70">
            Amazon Web Services
          </p>
        </a>
      </div>
    </div>
  );
}

export default CertificationCard;
