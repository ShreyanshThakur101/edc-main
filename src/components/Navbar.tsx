import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

type NavItem = {
  path: string;
  label: string;
  external?: boolean;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/events", label: "Events" },
    { path: "/team", label: "Team" },
    { path: "/sponsors", label: "Sponsors" },
    {
      path: "https://esummit-vitpune.web.app/",
      label: "E-Summit Pune'26",
      external: true,
    },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-18 h-12">
            <img src={logo} alt="V-EDC logo" className="w-full h-full object-contain" />
          </div>
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md flex flex-col items-center py-4 space-y-3 md:hidden">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-white text-base opacity-80"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-white text-base ${
                    isActive(item.path) ? "font-semibold" : "opacity-80"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;