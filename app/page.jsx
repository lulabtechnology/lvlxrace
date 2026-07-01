import Header from "../components/Header";
import Logo from "../components/Logo";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const asset = (path) => `${basePath}${path}`;

const cards = [
  {
    title: "Experiencias deportivas",
    kicker: "Running / fitness",
    text: "Diseñamos carreras, retos y activaciones que se viven con intensidad desde el primer contacto hasta la meta.",
    image: "/assets/card-runner.webp",
    action: "Ver enfoque"
  },
  {
    title: "Retos de alto impacto",
    kicker: "Race Production",
    text: "Creamos formatos deportivos para marcas, equipos y comunidades que buscan moverse, competir y conectar.",
    image: "/assets/card-vikings.webp",
    action: "Conocer más"
  },
  {
    title: "Comunidad en movimiento",
    kicker: "Swimming / cycling",
    text: "Cada experiencia está pensada para unir atletas, espectadores y aliados alrededor de una energía compartida.",
    image: "/assets/card-aqua.webp",
    action: "Ver comunidad"
  },
  {
    title: "Organiza con LVLX",
    kicker: "Producción / estrategia",
    text: "Llevamos tu idea desde el concepto visual hasta una experiencia deportiva clara, potente y memorable.",
    image: "/assets/card-organizer.webp",
    action: "Hablemos"
  }
];

const services = [
  "Producción de carreras y retos deportivos.",
  "Diseño de experiencias para marcas y comunidades.",
  "Activaciones fitness, wellness y team building.",
  "Conceptualización visual y narrativa del evento.",
  "Coordinación de atletas, rutas, estaciones y momentos clave."
];

const workflowSteps = [
  {
    step: "01",
    title: "Concepto y estrategia",
    text: "Definimos la experiencia, el recorrido, la narrativa visual y los momentos clave."
  },
  {
    step: "02",
    title: "Producción deportiva",
    text: "Organizamos formatos, dinámicas, rutas, estaciones y detalles operativos de la experiencia."
  },
  {
    step: "03",
    title: "Activación de marca",
    text: "Integramos patrocinadores, contenido visual y puntos de contacto para maximizar recordación."
  }
];

const disciplines = ["Running", "Swimming", "Fitness", "Cycling", "Race Production"];
const partners = ["Patrocinadores", "Comunidades", "Wellness", "Contenido", "Rendimiento"];

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
            alt="Atletas de alto rendimiento con energía neón"
            className="h-full w-full object-cover object-[62%_center] opacity-95 md:object-center"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#020815_0%,rgba(2,8,21,.95)_22%,rgba(2,8,21,.70)_42%,rgba(2,8,21,.18)_72%,rgba(2,8,21,.38)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#020815] to-transparent" />

        <div className="mx-auto flex min-h-[calc(100svh-9rem)] max-w-7xl items-center">
          <div className="max-w-4xl pt-8 sm:pt-12 lg:pt-0">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyanx/30 bg-cyanx/10 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-cyanx shadow-glow">
              <span className="h-2 w-2 rounded-full bg-cyanx pulse-glow" />
              Experiencias deportivas premium
            </div>

            <h1 className="hero-title text-4xl font-black uppercase text-white sm:text-6xl lg:text-7xl xl:text-[6.6rem]">
              Experiencias que elevan el <span className="text-cyanx drop-shadow-[0_0_24px_rgba(25,200,255,.45)]">potencial humano</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/[0.76] sm:text-lg">
              Creamos experiencias deportivas, retos y activaciones de alto impacto para marcas, atletas y comunidades que buscan ir más lejos.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#experiencia"
                className="group inline-flex items-center justify-center rounded-full bg-cyanx px-7 py-4 text-sm font-black uppercase tracking-wide text-ink shadow-glow transition hover:-translate-y-1 hover:bg-white"
              >
                Explorar experiencia
                <span className="ml-3 transition group-hover:translate-x-1">{"\u2192"}</span>
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full border border-white/[0.18] bg-white/[0.09] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-1 hover:border-cyanx/70 hover:bg-cyanx/10"
              >
                Organizar con LVLX
              </a>
            </div>

            <div className="mt-10 flex max-w-2xl flex-wrap gap-3">
              {disciplines.map((label) => (
                <div key={label} className="glass rounded-2xl px-4 py-3">
                  <div className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/[0.72]">{label}</div>
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
            <p className="text-sm font-black uppercase tracking-[0.32em] text-cyanx">Descubre la experiencia LVLX</p>
            <h2 className="mt-5 text-balance text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-6xl">
              Descubre la experiencia LVLX
            </h2>
          </div>
          <div className="glass rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <p className="text-lg leading-9 text-white/[0.78]">
              En LVLX combinamos deporte, innovación y emoción para diseñar experiencias que conectan personas, activan comunidades y convierten cada reto en un momento memorable.
            </p>
            <div className="neon-line mt-8 h-px w-full" />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Deporte", "Innovación", "Emoción"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-black uppercase tracking-wide text-white/[0.70]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="comunidad" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.32em] text-cyanx">Comunidad en movimiento</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-6xl">
                Retos, activaciones y momentos memorables.
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-white/[0.62]">
              Diseñamos formatos deportivos que reúnen marcas, atletas y comunidades alrededor de una energía compartida.
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
                  <h3 className="text-2xl font-black uppercase text-white">{card.title}</h3>
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
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-cyanx">Aliados</p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              Aliados que pueden integrarse a la experiencia
            </h2>
            <p className="mt-4 text-base leading-8 text-white/[0.62]">
              Creamos espacios preparados para marcas, patrocinadores y comunidades que quieran formar parte de una experiencia deportiva premium.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-7">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-center text-lg font-black uppercase tracking-[0.2em] text-white/[0.36] sm:text-xl">
              {partners.map((partner) => (
                <span key={partner} className="transition hover:text-cyanx">{partner}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-cyanx/15 bg-[#03102a] shadow-card lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative p-6 sm:p-10 lg:p-14">
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyanx/18 blur-[100px]" />
            <p className="relative text-sm font-black uppercase tracking-[0.32em] text-cyanx">Servicios</p>
            <h2 className="relative mt-5 text-4xl font-black uppercase leading-none text-white sm:text-5xl">
              Servicios para experiencias deportivas
            </h2>
            <p className="relative mt-5 max-w-xl text-base leading-8 text-white/[0.64]">
              Convertimos ideas deportivas en experiencias visuales, emocionales y memorables.
            </p>
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
              <div className="text-3xl font-black text-cyanx">Producción clara</div>
              <p className="mt-2 text-sm leading-6 text-white/[0.70]">
                Cada detalle se prepara para que la experiencia se sienta ordenada, intensa y alineada con la marca desde el primer contacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute right-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-cyanx/12 blur-[130px]" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-cyanx">Producción LVLX</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-6xl">
              Diseñamos experiencias, no solo eventos
            </h2>
            <p className="mt-5 text-base leading-8 text-white/[0.64]">
              Desde carreras urbanas hasta activaciones fitness y retos corporativos, LVLX crea experiencias deportivas listas para impulsar marcas, comunidades y equipos.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {workflowSteps.map((item) => (
              <div key={item.step} className="glass rounded-[1.75rem] p-6 sm:p-8">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-5xl font-black text-cyanx/70">{item.step}</span>
                  <span className="ml-5 h-px flex-1 bg-cyanx/20" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white">{item.title}</h3>
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
                  <p className="text-sm text-white/[0.58]">Experiencias deportivas premium</p>
                </div>
              </div>
              <h2 className="text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-6xl">
                ¿Listo para crear una experiencia que se recuerde?
              </h2>
            </div>
            <div className="glass rounded-[1.75rem] p-6 sm:p-8">
              <p className="text-base leading-8 text-white/[0.72]">
                Construyamos una activación deportiva con la energía, estética y precisión que tu marca necesita para conectar con su comunidad.
              </p>
              <div className="mt-7 grid gap-3">
                <a href="mailto:hola@lvlx.com" className="rounded-full bg-cyanx px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-ink transition hover:bg-white">
                  Hablemos de tu experiencia
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
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Logo className="h-9 w-28" />
            <p className="max-w-xl text-sm leading-6 text-white/[0.45]">
              LVLX crea experiencias deportivas premium para marcas, atletas y comunidades en movimiento.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-white/[0.58]">
            <a href="#experiencia" className="transition hover:text-cyanx">Experiencia</a>
            <a href="#servicios" className="transition hover:text-cyanx">Servicios</a>
            <a href="#comunidad" className="transition hover:text-cyanx">Comunidad</a>
            <a href="#contacto" className="transition hover:text-cyanx">Contacto</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
