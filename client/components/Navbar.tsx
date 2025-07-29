import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import LogoIcon from "../images/sntc.jpg";

const navItems = [
  { name: "Clubs", href: "/clubs" },
  { name: "Cells", href: "/#cells" },
  { name: "Offerings", href: "/#offerings" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact", href: "/contact" },
  { name: "Team", href: "/team" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <img
                src={LogoIcon}
                alt="SnTc Logo"
                className="w-8 h-8 rounded-lg shadow-lg object-contain"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyber-400 to-tech-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-tech-400 to-cyber-500 bg-clip-text text-transparent">
                SnTc
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                Science & Technical Council IIT Mandi
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.name === "Offerings" || item.name === "Cells") {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-tech-400",
                      "before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-tech-400 before:to-cyber-500 before:transition-all before:duration-300 hover:before:w-full",
                      "text-foreground",
                    )}
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-tech-400",
                    "before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-tech-400 before:to-cyber-500 before:transition-all before:duration-300 hover:before:w-full",
                    location.pathname === item.href
                      ? "text-tech-400 before:w-full"
                      : "text-foreground",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-tech-400 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tech-400"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
