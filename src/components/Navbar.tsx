  import { useState, useEffect } from "react";
  import { Link, useLocation } from "react-router-dom";
  import { Menu, X } from "lucide-react";
  import logo from "@/assets/logo.png";

  const styles = {
    header: (isScrolled) =>
      `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-black/20" : "bg-transparent"
      }`,
    container: "max-w-7xl mx-auto flex items-center justify-between py-4 px-6",
    logoWrapper: "flex items-center gap-3",
    logoBox: "w-18 h-12",
    logoImg: "w-full h-full object-contain",
    logoText: "text-xl font-bold text-white",
    nav: "hidden md:flex space-x-8",
    navLink: (active) =>
      `text-sm font-medium ${
        active ? "text-white" : "text-white/80 hover:text-white"
      } transition-colors duration-200`,
    mobileToggle: "md:hidden text-white",
    mobileMenu:
      "absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md flex flex-col items-center py-4 space-y-3 md:hidden",
    mobileLink: (active) =>
      `text-white text-base ${active ? "font-semibold" : "opacity-80"}`,
  };

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const navItems = [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/events", label: "Events" },
      { path: "/team", label: "Team" },
      { path: "/sponsors", label: "Sponsors" },
      // { path: "/esummit", label: "Esummit '25" },
      { path: "/gallery", label: "Gallery" },
      { path: "/contact", label: "Contact" },
    ];

    const isActive = (path) => location.pathname === path;

    useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <header className={styles.header(isScrolled)}>
        <div className={styles.container}>
          {/* logo */}
          <Link to="/" className={styles.logoWrapper}>
            <div className={styles.logoBox}>
              <img src={logo} alt="V-EDC logo" className={styles.logoImg} />
            </div>
          </Link>

          {/* desktop nav */}
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={styles.navLink(isActive(item.path))}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.mobileToggle}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* mobile menu */}
          {isOpen && (
            <div className={styles.mobileMenu}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileLink(isActive(item.path))}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>
    );
  };

  export default Navbar;
