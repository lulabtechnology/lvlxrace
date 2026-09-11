"use client";

import { useState } from "react";
import Logo from "./Logo";

const navItems = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#comunidad", label: "Comunidad" },
  { href: "#galeria", label: "Galería" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 sm:px-5" aria-label="Navegación principal">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio de LVLX" onClick={() => setOpen(false)}>
          <Logo className="h-9 w-28 sm:h-10 sm:w-32" />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/[0.72] transition hover:bg-white/[0.07] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden rounded-full border border-cyanx/[0.45] bg-cyanx/10 px-5 py-2 text-sm font-bold text-ice shadow-glow transition hover:-translate-y-0.5 hover:bg-cyanx hover:text-ink lg:inline-flex"
        >
          Crear experiencia
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.05] lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="glass mx-auto mt-3 max-w-7xl rounded-2xl p-3 lg:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-white/[0.78] transition hover:bg-white/[0.08] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-cyanx px-4 py-3 text-center text-sm font-black text-ink"
            >
              Crear experiencia
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
