import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const personalizedNavTheme = {
  "root": {
    "base": "sticky w-full z-9999 backdrop-blur-md px-4 py-4 mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-6xl dark:border-0 animate-fade-in-down top-0 left-0 right-0 transition-all duration-300",
    "rounded": {
      "on": "rounded",
      "off": ""
    },
    "bordered": {
      "on": "border",
      "off": ""
    },
    "inner": {
      "base": "mx-auto flex flex-wrap items-center justify-between",
      "fluid": {
        "on": "",
        "off": "container"
      }
    }
  },
  "brand": {
    "base": "flex items-center"
  },
  "collapse": {
    "base": "w-full md:block md:w-auto md:mt-0 sm:bg-transparent py-3 px-12 rounded-default",
    "list": "mt-2 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    "hidden": {
      "on": "hidden",
      "off": ""
    }
  },
  "link": {
    "base": "block py-3 pl-3 pr-4 md:p-0 font-medium transition-colors duration-300 rounded-lg md:rounded-none",
    "active": {
      "on": "bg-primary-blue/10 text-primary-blue md:bg-transparent md:text-primary-blue md:border-b-2 md:border-primary-blue md:pb-1",
      "off": "border-0 text-primary-dark hover:bg-primary-blue/5 md:border-0 md:hover:bg-transparent hover:text-primary-blue md:hover:border-b-2 md:hover:border-primary-blue/50 md:pb-1"
    },
    "disabled": {
      "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      "off": ""
    }
  },
  "toggle": {
    "base": "inline-flex items-center rounded-lg p-2 text-sm text-primary dark:text-white hover:bg-transparent hover:cursor-pointer focus:outline-none focus:ring-0 focus:ring-gray-200 md:hidden dark:text-primary dark:hover:bg-transparent dark:focus:ring-gray-600",
    "icon": "h-6 w-6 shrink-0",
    "title": "sr-only"
  }
};

const handleScroll = (id) => {
  const section = document.querySelector(id);
  if (!section) return;

  if (window.innerWidth < 768) {
    // SOLO en móvil: aplicamos offset
    const yOffset = -300; // altura
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  } else {
    // En desktop: scroll normal
    const yOffset = -100; // altura
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Tema unificado para todas las páginas
  const dynamicNavTheme = {
    ...personalizedNavTheme,
    "root": {
      ...personalizedNavTheme.root,
      "base": "sticky w-full z-9999 backdrop-blur-md px-4 py-4 mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-6xl dark:border-0 top-0 left-0 right-0 transition-all duration-300 bg-transparent"
    },
    "link": {
      "base": "block py-3 pl-3 pr-4 md:p-0 font-medium transition-colors duration-300 rounded-lg md:rounded-none",
      "active": {
        "on": "bg-white/20 text-white md:bg-transparent md:text-white md:border-b-2 md:border-white md:pb-1",
        "off": "border-0 text-white/90 hover:bg-white/10 md:border-0 md:hover:bg-transparent hover:text-white md:hover:border-b-2 md:hover:border-white/70 md:pb-1"
      },
      "disabled": {
        "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        "off": ""
      }
    },
    "toggle": {
      "base": "inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-white/10 hover:cursor-pointer focus:outline-none focus:ring-0 focus:ring-gray-200 md:hidden transition-colors duration-300",
      "icon": "h-6 w-6 shrink-0",
      "title": "sr-only"
    }
  };

  return (
    <div className="w-full">
      <Navbar fluid theme={dynamicNavTheme} className="rounded-2xl bg-white/10 backdrop-blur-md">
        <Link to="/">
          <img src="/favicon.png" alt="Logo ASOVEDRA" className="h-11" />
        </Link>
        <div className="flex md:order-2 items-center gap-3">
            <a 
              href="tel:+34604016113" 
              className="hidden sm:block text-sm py-2 px-4 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg font-medium bg-white/20 text-white border border-white/30 hover:bg-white hover:text-primary-blue backdrop-blur-sm"
            >
              Llámanos
            </a>
            <NavbarToggle />
        </div>
        <NavbarCollapse>
            <NavbarLink as={Link} to="/" active={location.pathname === "/"}>
            Inicio
            </NavbarLink>
            <NavbarLink as={Link} to="/noticias" active={location.pathname === "/noticias"}>
            Noticias
            </NavbarLink>
            <NavbarLink as={Link} to="/sobre-nosotros" active={location.pathname === "/sobre-nosotros"}>
            Nosotros
            </NavbarLink>
            <NavbarLink as={Link} to="/servicios" active={location.pathname === "/servicios"}>
            Servicios
            </NavbarLink>
            <NavbarLink as={Link} to="/contacto" active={location.pathname === "/contacto"}>
            Contacto
            </NavbarLink>
        </NavbarCollapse>
    </Navbar>
    </div>
  );
}
