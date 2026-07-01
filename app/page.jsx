import Header from "../components/Header";
import Logo from "../components/Logo";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const asset = (path) => `${basePath}${path}`;

const cards = [
  {
    title: "Retos de alto impacto",
    kicker: "Running / comunidad",
    text: "Creamos experiencias deportivas que se sienten como una marca: intensas, visuales y memorables.",
    image: "/assets/card-runner.webp",
    action: "Explorar reto"
  },
  {
    title: "Vikings Race",
    kicker: "Resistencia / energia",
    text: "Una identidad de carrera fuerte, aspiracional y lista para conectar atletas, marcas y publico.",
    image: "/assets/card-vikings.webp",
    action: "Ver experiencia"
  },
  {
    title: "Aqua Performance",
    kicker: "Swimming / precision",
    text: "Visuales deportivos premium para retos acuaticos, entrenamiento y experiencias de rendimiento.",
    image: "/assets/card-aqua.webp",
    action: "Ver concepto"
  },
  {
    title: "Activa tu marca",
    kicker: "Produccion / estrategia",
    text: "Disenamos el concepto, la estetica y la experiencia para que tu activacion no parezca generica.",
    image: "/assets/card-organizer.webp",
    action: "Crear proyecto"
  }
];

const services = [
  "Concepto visual y narrativa de experiencia",
  "Landing premium lista para campanas",
  "Sistema responsive para desktop y movil",
  "Cards, secciones, marca y llamados a accion",
  "Contenido editable sin base de datos"
];

const workflowSteps = [
  {
    step: "01",
    title: "Direccion visual",
    text: "Definimos el universo de marca: energia, profundidad, paleta, imagenes y jerarquia visual."
  },
  {
    step: "02",
    title: "Landing de impacto",
    text: "Construimos una web estatica, rapida y lista para GitHub + Vercel, sin paneles ni backend innecesario."
  },
  {
    step: "03",
    title: "Conversion clara",
    text: "Cada seccion lleva al usuario hacia una accion: cotizar, conversar o activar una experiencia."
  }
];

const partners = ["NUTRIX", "FITCORE", "SALOMON", "HYDRIX", "RUNLAB"];

function Icon({ children }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyanx/25 bg-cyanx/10 text-cyanx shadow-glow">
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <main id="inicio" className="noise min-h-screen overflow-hidden">
      <Header />

      <section className="relative min-h-[100svh] overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="absolute inset-0 -z-10 bg-grid bg-[length:72px_72px] opacity-[0.08]" />
        <div className="absolute left-1/2 top-24 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-cyanx/20 blur-[90px] sm:h-80 sm:w-80" />
        <div className="x-orbit right-[8%] top-[22%] -z-10 opacity-40" />

        <picture className="pointer-events-none absolute inset-0 -z-10">
          <source media="(max-width: 767px)" srcSet={asset("/assets/hero-mobile.webp")} />
          <img
            src={asset("/assets/hero-desktop.webp")}
            alt="Atletas de alto rendimiento con energia neon"
            className="h-full w-full object-cover object-[62%_center] opacity-95 md:object-center"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#020815_0%,rgba(2,8,21,.95)_22%,rgba(2,8,21,.70)_42%,rgba(2,8,21,.18)_72%,rgba(2,8,21,.38)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#020815] to-transparent" />

        <div className="mx-auto flex min-h-[calc(100svh-9rem)] max-w-7xl items-center">
          <div className="max-w-3xl pt-8 sm:pt-12 lg:pt-0">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyanx/30 bg-cyanx/10 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-cyanx shadow-glow">
              <span className="h-2 w-2 rounded-full bg-cyanx pulse-glow" />
              Experiencias deportivas premium
            </div>

            <h1 className="hero-title text-5xl font-black uppercase text-white sm:text-7xl lg:text-8xl xl:text-[7.4rem]">
              Eleva tu <span className="text-cyanx drop-shadow-[0_0_24px_rgba(25,200,255,.45)]">maximo</span> potencial
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/[0.76] sm:text-lg">
              Disenamos experiencias deportivas, retos y activaciones visualmente brutales para marcas, comunidades y atletas que quieren sentirse por encima de lo comun.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center rounded-full bg-cyanx px-7 py-4 text-sm font-black uppercase tracking-wide text-ink shadow-glow transition hover:-translate-y-1 hover:bg-white"
              >
                Crear experiencia
                <span className="ml-3 transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#retos"
                className="inline-flex items-center justify-center rounded-full border border-white/[0.18] bg-white/[0.09] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-1 hover:border-cyanx/70 hover:bg-cyanx/10"
              >
                Ver propuesta visual
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
              {[
                ["100%", "frontend"],
                ["0", "base de datos"],
                ["Mobile", "first"]
              ].map(([value, label]) => (
                <div key={label} className="glass rounded-2xl px-4 py-4">
                  <div className="text-2xl font-black text-white sm:text-3xl">{value}</div>
                  <div className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/[0.52]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute left-0 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-cyanDeep/16 blur-[110px]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-cyanx">Descubre la experiencia</p>
            <h2 className="mt-5 text-balance text-4xl font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Una landing que se siente como una marca grande.
            </h2>
          </div>
          <div className="glass rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <p className="text-lg leading-9 text-white/[0.78]">
              La direccion es simple: nada generico. Fondo navy profundo, luces cyan, atletas en movimiento, tarjetas con energia, logo SVG nitido y una estructura lista para vender la experiencia sin depender de calendarios, paneles ni bases de datos.
            </p>
            <div className="neon-line mt-8 h-px w-full" />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Visual premium", "Rapida", "Editable"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-black uppercase tracking-wide text-white/[0.70]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="retos" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.32em] text-cyanx">Retos y activaciones</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Secciones estaticas, potentes y sin calendario.
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-white/[0.62]">
              Las tarjetas funcionan como bloques comerciales: muestran categorias, ideas o servicios. Todo es editable desde codigo, sin base de datos.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => (
              <article key={card.title} className="card-glow group rounded-[1.75rem]">
                <div className="relative h-56 overflow-hidden rounded-t-[1.75rem] sm:h-64 xl:h-52">
                  <img
                    src={asset(card.image)}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03102a] via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-cyanx/30 bg-[#03102a]/70 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.18em] text-cyanx backdrop-blur">
                    {card.kicker}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-black uppercase tracking-[-0.04em] text-white">{card.title}</h3>
                  <p className="mt-3 min-h-24 text-sm leading-7 text-white/[0.62]">{card.text}</p>
                  <a href="#contacto" className="mt-5 inline-flex rounded-full bg-cyanx/12 px-4 py-2 text-xs font-black uppercase tracking-wide text-cyanx transition group-hover:bg-cyanx group-hover:text-ink">
                    {card.action}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-7">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-center text-lg font-black uppercase tracking-[0.2em] text-white/[0.36] sm:text-xl">
            {partners.map((partner) => (
              <span key={partner} className="transition hover:text-cyanx">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-cyanx/15 bg-[#03102a] shadow-card lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative p-6 sm:p-10 lg:p-14">
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyanx/18 blur-[100px]" />
            <p className="relative text-sm font-black uppercase tracking-[0.32em] text-cyanx">Servicios</p>
            <h2 className="relative mt-5 text-4xl font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-5xl">
              Produccion visual para experiencias deportivas.
            </h2>
            <div className="relative mt-9 grid gap-5">
              {services.map((service, index) => (
                <div key={service} className="flex items-center gap-4 text-white/[0.72]">
                  <Icon>
                    <span className="text-sm font-black">{String(index + 1).padStart(2, "0")}</span>
                  </Icon>
                  <span className="text-sm font-semibold leading-6 sm:text-base">{service}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[26rem] overflow-hidden lg:min-h-full">
            <img
              src={asset("/assets/card-organizer.webp")}
              alt="Coach organizando una experiencia deportiva"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#03102a] via-[#03102a]/20 to-transparent lg:from-[#03102a]/30" />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/[0.12] bg-[#020815]/62 p-5 backdrop-blur-xl sm:left-auto sm:w-80">
              <div className="text-3xl font-black text-cyanx">Sin DB</div>
              <p className="mt-2 text-sm leading-6 text-white/[0.70]">
                Esta version omite calendarios, login, paneles y gestion de registros. Es una landing estatica enfocada en imagen y conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute right-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-cyanx/12 blur-[130px]" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-cyanx">Metodo</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Hecha para impresionar rapido y vender mejor.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {workflowSteps.map((item) => (
              <div key={item.step} className="glass rounded-[1.75rem] p-6 sm:p-8">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-5xl font-black tracking-[-0.07em] text-cyanx/70">{item.step}</span>
                  <span className="h-px flex-1 bg-cyanx/20 ml-5" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-[-0.04em] text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/[0.62]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-cyanx/20 bg-[radial-gradient(circle_at_80%_10%,rgba(25,200,255,.25),transparent_32rem),linear-gradient(135deg,rgba(5,33,80,.92),rgba(2,8,21,.96))] p-6 shadow-card sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <Logo compact className="h-16 w-16" />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.32em] text-cyanx">LVLX</p>
                  <p className="text-sm text-white/[0.58]">Premium sports experience</p>
                </div>
              </div>
              <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                Construyamos una experiencia que no parezca plantilla.
              </h2>
            </div>
            <div className="glass rounded-[1.75rem] p-6 sm:p-8">
              <p className="text-base leading-8 text-white/[0.72]">
                Esta landing esta lista para usar como base en GitHub y desplegar en Vercel. Los textos, imagenes, botones y secciones pueden cambiarse sin tocar ninguna base de datos.
              </p>
              <div className="mt-7 grid gap-3">
                <a href="mailto:hola@lvlx.com" className="rounded-full bg-cyanx px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-ink transition hover:bg-white">
                  Solicitar propuesta
                </a>
                <a href="#inicio" className="rounded-full border border-white/[0.12] px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-white/[0.78] transition hover:border-cyanx hover:text-cyanx">
                  Volver arriba
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/40 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Logo className="h-9 w-28" />
          <p className="text-sm text-white/[0.45]">Landing estatica premium. Sin calendario, sin login, sin base de datos.</p>
        </div>
      </footer>
    </main>
  );
}
