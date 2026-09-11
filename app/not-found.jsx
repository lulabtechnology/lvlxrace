import Logo from "../components/Logo";

export const metadata = {
  title: "Página no encontrada",
  description: "La página que buscas no está disponible. Regresa al inicio de LVLX."
};

export default function NotFound() {
  return (
    <main className="noise flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
      <div className="absolute inset-0 -z-10 bg-grid bg-[length:72px_72px] opacity-[0.08]" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyanx/[0.15] blur-[110px]" />
      <section className="glass w-full max-w-2xl rounded-[2rem] p-8 text-center sm:p-12">
        <a href="/" aria-label="Ir al inicio de LVLX" className="mx-auto inline-flex">
          <Logo className="h-12 w-36" />
        </a>
        <p className="mt-10 text-sm font-black uppercase tracking-[0.32em] text-cyanx">Error 404</p>
        <h1 className="mt-4 text-4xl font-black uppercase leading-none text-white sm:text-6xl">
          Esta ruta salió del recorrido
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-white/[0.66]">
          La página que buscas no existe o cambió de ubicación. Vuelve al inicio para continuar explorando LVLX.
        </p>
        <a href="/" className="mt-8 inline-flex rounded-full bg-cyanx px-7 py-4 text-sm font-black uppercase tracking-wide text-ink transition hover:-translate-y-0.5 hover:bg-white">
          Volver al inicio
        </a>
      </section>
    </main>
  );
}
