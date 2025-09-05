import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const personalizedNavTheme = {
  "root": {
    "base": "sticky w-full z-9999 bg-white shadow-[6px_6px_9px_rgba(0,_0,_0,_0.2)] px-3 py-3 mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-6xl sm:px-4 dark:border-0 dark:bg-transparent animate-fade-in-down top-0 left-0 right-0",
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
    "base": "w-full md:block md:w-auto sm:mt-2 md:mt-0 sm:bg-transparent py-3 px-12 rounded-default",
    "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    "hidden": {
      "on": "hidden",
      "off": ""
    }
  },
  "link": {
    "base": "block py-2 pl-3 pr-4 md:p-0",
    "active": {
      "on": "bg-transparent text-primary-dark hover:text-primary-gray md:bg-transparent md:text-primary-dark dark:text-primary-dark",
      "off": "border-0 text-primary-dark hover:bg-transparent md:border-0 md:hover:bg-transparent hover:text-primary-gray dark:border-gray-700 dark:text-primary-dark dark:hover:bg-transparent dark:hover:text-primary-gray md:dark:hover:bg-transparent md:dark:hover:text-primary-gray"
    },
    "disabled": {
      "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      "off": ""
    }
  },
  "toggle": {
    "base": "inline-flex items-center rounded-lg p-2 text-sm text-primary-dark dark:text-white hover:bg-transparent hover:cursor-pointer focus:outline-none focus:ring-0 focus:ring-gray-200 md:hidden dark:text-primary-gray dark:hover:bg-transparent dark:focus:ring-gray-600",
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
  return (
    <Navbar fluid theme={personalizedNavTheme} className="rounded-2xl">
        <a href="https://asovedra.org">
          <img src="/favicon.png" alt="Logo ASOVEDRA" className="h-11" />
        </a>
        <div className="flex md:order-2">
            <Button className="bg-primary-dark hover:text-white hover:bg-primary-gray transition-transform cursor-pointer rounded-default md:mr-0 sm:mr-3 h-11 hidden sm:block">
            <a href="tel:+34604016113">Llámanos</a>
            </Button>
            <NavbarToggle />
        </div>
        <NavbarCollapse>
            <NavbarLink href="#" active>
            Inicio
            </NavbarLink>
            <NavbarLink
            href="#about"
            onClick={(e) => {
                e.preventDefault();
                handleScroll("#about");
            }}
            >
            Nosotros
            </NavbarLink>
            <NavbarLink
            href="#services"
            onClick={(e) => {
                e.preventDefault();
                handleScroll("#services");
            }}
            >
            Servicios
            </NavbarLink>
            <NavbarLink
            href="#contact"
            onClick={(e) => {
                e.preventDefault();
                handleScroll("#contact");
            }}
            >
            Contacto
            </NavbarLink>
        </NavbarCollapse>
    </Navbar>
  );
}
