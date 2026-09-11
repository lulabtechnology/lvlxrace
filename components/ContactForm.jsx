"use client";

import { useState } from "react";

const EMAIL = "hola@lvlx.com";
const PHONE = process.env.NEXT_PUBLIC_LVLX_PHONE || "";
const PHONE_HREF = PHONE ? `tel:${PHONE.replace(/[^+\d]/g, "")}` : "";

export default function ContactForm() {
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus({
        type: "error",
        message: "Completa nombre, correo y mensaje para continuar."
      });
      return;
    }

    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailLooksValid) {
      setStatus({
        type: "error",
        message: "Revisa el correo electrónico e inténtalo nuevamente."
      });
      return;
    }

    const subject = encodeURIComponent(`Nueva consulta LVLX - ${name}`);
    const body = encodeURIComponent(
      [
        `Nombre: ${name}`,
        `Correo: ${email}`,
        company ? `Empresa / equipo: ${company}` : "",
        "",
        "Mensaje:",
        message
      ]
        .filter(Boolean)
        .join("\n")
    );

    setStatus({
      type: "success",
      message: "Mensaje preparado. Confirma el envío en tu aplicación de correo."
    });

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="glass rounded-[1.75rem] p-6 sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-black uppercase tracking-[0.26em] text-cyanx">Contacto</p>
        <h3 className="mt-3 text-2xl font-black uppercase text-white sm:text-3xl">Cuéntanos tu idea</h3>
        <p className="mt-3 text-sm leading-7 text-white/[0.62]">
          Completa los datos y prepararemos el mensaje para enviarlo a nuestro equipo.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-white/[0.78]">
            Nombre
            <input
              name="name"
              type="text"
              autoComplete="name"
              required
              className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition focus:border-cyanx/70 focus:ring-2 focus:ring-cyanx/20"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-white/[0.78]">
            Correo
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition focus:border-cyanx/70 focus:ring-2 focus:ring-cyanx/20"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-semibold text-white/[0.78]">
          Empresa o equipo
          <input
            name="company"
            type="text"
            autoComplete="organization"
            className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition focus:border-cyanx/70 focus:ring-2 focus:ring-cyanx/20"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-white/[0.78]">
          ¿Qué experiencia quieres crear?
          <textarea
            name="message"
            rows="5"
            required
            className="min-w-0 resize-y rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition focus:border-cyanx/70 focus:ring-2 focus:ring-cyanx/20"
          />
        </label>

        <button
          type="submit"
          className="mt-1 rounded-full bg-cyanx px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-ink transition hover:-translate-y-0.5 hover:bg-white"
        >
          Preparar mensaje
        </button>

        <div className={`grid gap-3 ${PHONE ? "sm:grid-cols-2" : ""}`}>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full border border-white/[0.12] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white/[0.78] transition hover:border-cyanx hover:text-cyanx"
          >
            Escribir a {EMAIL}
          </a>
          {PHONE && (
            <a
              href={PHONE_HREF}
              className="rounded-full border border-white/[0.12] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white/[0.78] transition hover:border-cyanx hover:text-cyanx"
            >
              Llamar al {PHONE}
            </a>
          )}
        </div>

        <div aria-live="polite" aria-atomic="true" className="min-h-7">
          {status.type !== "idle" && (
            <p className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${status.type === "success" ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100" : "border-rose-400/30 bg-rose-400/10 text-rose-100"}`}>
              {status.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
