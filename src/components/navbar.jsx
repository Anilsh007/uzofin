import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import navLogo from "../assets/header-logo.svg";
import Button from "./utility/Button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [hideNavbar, setHideNavbar] = useState(false);

  const navLinks = [
    { name: "AI Banking", path: "/" },
    {
      name: "Payments",
      path: "/payments",
      submenu: [
        { name: "Send Money", path: "/payments/send" },
        { name: "Receive Money", path: "/payments/receive" },
      ],
    },
    {
      name: "Payouts",
      path: "/payouts",
      submenu: [
        { name: "Mass Payouts", path: "/payouts/mass" },
        { name: "Scheduled Payouts", path: "/payouts/scheduled" },
      ],
    },
    { name: "Support", path: "/support" },
  ];

  const toggleSubmenu = (name) => {
    setOpenSubmenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const renderLinks = (isMobile = false) =>
    navLinks.map((link) => {
      const hasSubmenu = !!link.submenu;
      const submenuOpen = openSubmenus[link.name];

      return (
        <div key={link.name} className={isMobile ? "space-y-1" : "relative group"}>
          <div className={`flex justify-between items-center ${isMobile ? "px-3 py-2 rounded-md hover:bg-white/5" : "cursor-pointer"}`} onClick={() => isMobile && hasSubmenu && toggleSubmenu(link.name)}>
            <Link to={link.path} className={`${isMobile ? "w-full font-medium" : "flex items-center gap-1 font-medium text-[15px] text-[#C4C4C4] hover:text-white transition-colors"}`} onClick={() => isMobile && !hasSubmenu && setMobileOpen(false)} > {link.name} </Link>
            {hasSubmenu && (
              <FiChevronDown className={`w-4 h-4 ml-1 text-gray-300 transition-transform duration-300 ${isMobile ? submenuOpen ? "rotate-180" : "rotate-0" : "group-hover:rotate-180"}`} />
            )}
          </div>

          {hasSubmenu && (
            <div className={`${isMobile ? `pl-4 space-y-1 overflow-hidden transition-all duration-300 ${submenuOpen ? "max-h-40" : "max-h-0"}` : "absolute top-full left-0 mt-0 w-48 bg-white text-black rounded opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto"}`}
            >
              {link.submenu.map((sublink) => (
                <Link key={sublink.name} to={sublink.path} className={`${isMobile ? "block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5" : "block px-4 py-2 hover:bg-gray-100"}`} onClick={() => isMobile && setMobileOpen(false)} > {sublink.name} </Link>
              ))}
            </div>
          )}
        </div>
      );
    });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-black/30 transition-transform duration-300 ${hideNavbar ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="w-[87vw] mx-auto h-[88px] flex items-center justify-between px-4 sm:px-8">
        <Link to="/"> <img src={navLogo} alt="UzoFin Logo" className="w-[100px] h-auto" /> </Link>

        <nav className="hidden lg:flex items-center gap-8">{renderLinks()}</nav>

        <div className="flex items-center gap-4">
          <Button text="START BUILDING" variant="primary" showIcon />
          <button className="lg:hidden text-white text-2xl" onClick={() => setMobileOpen(!mobileOpen)} >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div className={`mt-[-5.5rem] pt-[5rem] lg:hidden bg-black text-white overflow-hidden transition-max-height duration-300 ${mobileOpen ? "h-[95vh]" : "max-h-0"}`} >
        <div className="px-4 pt-2 pb-4 space-y-2">{renderLinks(true)}</div>
      </div>
    </header>
  );
}