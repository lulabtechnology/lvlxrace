import Header from "../components/Header";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const asset = (path) => `${basePath}${path}`;

const cards = [
  {
    title: "Experiencias deportivas",
    kicker: "Running / fitness",
    text: "Diseñamos carreras, retos y activaciones que se viven con intensidad desde el primer contacto hasta la meta.",
    image: "/assets/card-runner.webp",
    href: "#servicios"
  },
  {
    title: "Retos de alto impacto",
    kicker: "Race production",
    text: "Creamos formatos deportivos para marcas, equipos y comunidades que buscan moverse, competir y conectar.",
    image: "/assets/card-vikings.webp",
    href: "#metodo"
  },
  {
    title: "Comunidad en movimiento",
    kicker: "Cycling / endurance",
    text: "Cada experiencia está pensada para unir atletas, espectadores y aliados alrededor de una energía compartida.",
    image: "/assets/card-aqua.webp",
    href: "#galeria"
  },
  {
    title: "Organiza con LVLX",
    kicker: "Producción / estrategia",
    text: "Llevamos tu idea desde el concepto visual hasta una experiencia deportiva clara, potente y memorable.",
    image: "/assets/card-organizer.webp",
    href: "#contacto"
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
    text: "Definimos el objetivo, la experiencia, el recorrido, la narrativa visual y los momentos clave.",
    image: "/assets/real/lvlx-05.webp"
  },
  {
    step: "02",
    title: "Producción deportiva",
    text: "Organizamos formatos, dinámicas, rutas, estaciones y detalles operativos con enfoque en ejecución.",
    image: "/assets/real/lvlx-15.webp"
  },
  {
    step: "03",
    title: "Activación de marca",
    text: "Integramos patrocinadores, contenido visual y puntos de contacto para elevar alcance y recordación.",
    image: "/assets/real/lvlx-28.webp"
  }
];

const disciplines = ["Running", "Cycling", "Fitness", "Triathlon", "Race Production"];
const partners = ["Patrocinadores", "Comunidades", "Wellness", "Contenido", "Rendimiento"];

const gallery = [
  { image: "/assets/real/lvlx-01.webp", label: "Running", shape: "photo-arch" },
  { image: "/assets/real/lvlx-02.webp", label: "Performance", shape: "photo-cut" },
  { image: "/assets/real/lvlx-09.webp", label: "Cycling", shape: "photo-pill" },
  { image: "/assets/real/lvlx-11.webp", label: "Power", shape: "photo-notch" },
  { image: "/assets/real/lvlx-12.webp", label: "Motion", shape: "photo-arch" },
  { image: "/assets/real/lvlx-14.webp", label: "Speed", shape: "photo-cut" },
  { image: "/assets/real/lvlx-17.webp", label: "Training", shape: "photo-pill" },
  { image: "/assets/real/lvlx-18.webp", label: "Endurance", shape: "photo-notch" },
  { image: "/assets/real/lvlx-20.webp", label: "Strength", shape: "photo-arch" },
  { image: "/assets/real/lvlx-21.webp", label: "Running", shape: "photo-cut" },
  { image: "/assets/real/lvlx-22.webp", label: "Confidence", shape: "photo-pill" },
  { image: "/assets/real/lvlx-23.webp", label: "Momentum", shape: "photo-notch" },
  { image: "/assets/real/lvlx-24.webp", label: "Athlete", shape: "photo-arch" },
  { image: "/assets/real/lvlx-26.webp", label: "Community", shape: "photo-cut" },
  { image: "/assets/real/lvlx-29.webp", label: "Pace", shape: "photo-pill" },
  { image: "/assets/real/lvlx-30.webp", label: "Focus", shape: "photo-notch" }
];

function Icon({ children }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyanx/25 bg-cyanx/10 text-cyanx shadow-glow">
      {children}
    </div>
  );
}

export default function Page() {
  const year = new Date().getFullYear();
  const contactPhone = process.env.NEXT_PUBLIC_LVLX_PHONE || "";
  const contactPhoneHref = contactPhone ? `tel:${contactPhone.replace(/[^+\d]/g, "")}` : "";

  return (
    <main id="inicio" className="noise min-h-screen overflow-x-hidden">
      <Header />

      <section className="relative min-h-[100svh] overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="absolute inset-0 -z-10 bg-grid bg-[length:72px_72px] opacity-[0.08]" />
        <div className="absolute left-1/2 top-24 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-cyanx/20 blur-[90px] sm:h-80 sm:w-80" />
        <div className="x-orbit right-[8%] top-[22%] -z-10 hidden opacity-40 md:block" />

        <picture className="pointer-events-none absolute inset-0 -z-10">
          <source media="(max-width: 767px)" srcSet={asset("/assets/hero-mobile.webp")} />
          <img
            src={asset("/assets/hero-desktop.webp")}
            alt="Atletas corriendo en una experiencia deportiva LVLX"
            className="h-full w-full object-cover object-[55%_center] opacity-95 md:object-center"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#020815_0%,rgba(2,8,21,.97)_18%,rgba(2,8,21,.78)_42%,rgba(2,8,21,.28)_72%,rgba(2,8,21,.44)_100%)]" />
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

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/[0.78] sm:text-lg">
              Creamos carreras, retos y activaciones deportivas de alto impacto para marcas, atletas y comunidades que quieren conectar a través del movimiento.
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
        <div className="absolute left-0 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-cyanDeep/[0.16] blur-[110px]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-cyanx">Descubre la experiencia LVLX</p>
            <h2 className="mt-5 text-balance text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-6xl">
              Deporte real. Energía real. Conexiones que se sienten.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/[0.66]">
              Diseñamos experiencias donde el rendimiento, la emoción y la identidad de marca conviven en una misma ruta. Cada momento está pensado para verse bien, sentirse auténtico y dejar huella.
            </p>
            <div className="neon-line mt-8 h-px w-full" />
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {["Deporte", "Innovación", "Comunidad"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-black uppercase tracking-wide text-white/[0.70]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="editorial-cluster" aria-label="Selección de fotografías reales de atletas LVLX">
            <figure className="cluster-photo cluster-photo-a photo-arch">
              <img src={asset("/assets/real/lvlx-13.webp")} alt="Atletas LVLX reunidos" loading="lazy" />
            </figure>
            <figure className="cluster-photo cluster-photo-b photo-cut">
              <img src={asset("/assets/real/lvlx-07.webp")} alt="Triatleta junto a su bicicleta" loading="lazy" />
            </figure>
            <figure className="cluster-photo cluster-photo-c photo-pill">
              <img src={asset("/assets/real/lvlx-25.webp")} alt="Atleta mostrando fuerza" loading="lazy" />
            </figure>
            <figure className="cluster-photo cluster-photo-d photo-notch">
              <img src={asset("/assets/real/lvlx-16.webp")} alt="Corredora en movimiento" loading="lazy" />
            </figure>
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
            {cards.map((card, index) => (
              <article key={card.title} className={`card-glow group rounded-[1.75rem] ${index % 2 ? "xl:translate-y-8" : ""}`}>
                <div className={`relative h-64 overflow-hidden sm:h-72 xl:h-60 ${index % 2 ? "photo-cut" : "photo-arch"}`}>
                  <img
                    src={asset(card.image)}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03102a] via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-cyanx/30 bg-[#03102a]/75 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.18em] text-cyanx backdrop-blur">
                    {card.kicker}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-black uppercase text-white">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/[0.62]">{card.text}</p>
                  <a href={card.href} className="mt-6 inline-flex items-center text-sm font-black uppercase tracking-wide text-cyanx transition hover:text-white">
                    Descubrir más <span className="ml-2">{"\u2192"}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-cyanx/10 blur-[120px]" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.32em] text-cyanx">Inside LVLX</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-6xl">
                Una galería que se mueve como la comunidad.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/[0.62] lg:justify-self-end">
              Running, cycling, fuerza y resistencia conviven en una composición editorial que celebra a las personas detrás de cada experiencia.
            </p>
          </div>

          <div className="photo-mosaic">
            {gallery.map((item, index) => (
              <figure key={item.image} className={`mosaic-item mosaic-item-${(index % 8) + 1} ${item.shape}`}>
                <img src={asset(item.image)} alt={`${item.label} en una experiencia LVLX`} loading="lazy" />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-cyanx">Aliados</p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              Marcas y comunidades que pueden integrarse a la experiencia
            </h2>
            <p className="mt-4 text-base leading-8 text-white/[0.62]">
              Creamos espacios preparados para patrocinadores, equipos y comunidades que quieran formar parte de una experiencia deportiva premium.
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
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-cyanx/[0.15] bg-[#03102a] shadow-card lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative p-6 sm:p-10 lg:p-14">
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyanx/[0.18] blur-[100px]" />
            <p className="relative text-sm font-black uppercase tracking-[0.32em] text-cyanx">Servicios</p>
            <h2 className="relative mt-5 text-4xl font-black uppercase leading-none text-white sm:text-5xl">
              Servicios para experiencias deportivas
            </h2>
            <p className="relative mt-5 max-w-xl text-base leading-8 text-white/[0.64]">
              Convertimos ideas deportivas en experiencias visuales, emocionales y memorables, con una producción pensada para atletas, marcas y audiencia.
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
          <div className="relative min-h-[30rem] overflow-hidden lg:min-h-full">
            <img
              src={asset("/assets/real/lvlx-19.webp")}
              alt="Triatleta LVLX en bicicleta"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#03102a] via-[#03102a]/20 to-transparent lg:from-[#03102a]/30" />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/[0.12] bg-[#020815]/70 p-5 backdrop-blur-xl sm:left-auto sm:w-80">
              <div className="text-3xl font-black text-cyanx">Producción clara</div>
              <p className="mt-2 text-sm leading-6 text-white/[0.70]">
                Cada detalle se prepara para que la experiencia se sienta ordenada, intensa y alineada con la marca desde el primer contacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute right-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-cyanx/[0.12] blur-[130px]" />
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
            {workflowSteps.map((item, index) => (
              <article key={item.step} className="glass group overflow-hidden rounded-[1.75rem] p-3 sm:p-4">
                <div className={`relative h-48 overflow-hidden ${index === 0 ? "photo-arch" : index === 1 ? "photo-cut" : "photo-pill"}`}>
                  <img src={asset(item.image)} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020815]/90 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-5xl font-black text-cyanx">{item.step}</span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-2xl font-black uppercase text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/[0.62]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-cyanx/20 bg-[radial-gradient(circle_at_80%_10%,rgba(25,200,255,.25),transparent_32rem),linear-gradient(135deg,rgba(5,33,80,.92),rgba(2,8,21,.96))] p-6 shadow-card sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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
              <p className="mt-5 max-w-xl text-base leading-8 text-white/[0.68]">
                Cuéntanos qué quieres activar, a quién quieres mover y qué resultado buscas. Te ayudamos a convertir la idea en una experiencia deportiva clara y memorable.
              </p>
              <div className="mt-8 overflow-hidden border border-white/10 bg-white/[0.04] p-2 shadow-card photo-cut">
                <img src={asset("/assets/real/lvlx-03.webp")} alt="Equipo de atletas LVLX" className="h-64 w-full object-cover photo-cut" loading="lazy" />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/40 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <a href="#inicio" className="flex w-fit items-center gap-3" aria-label="Volver al inicio de LVLX">
              <Logo className="h-9 w-28" />
            </a>
            <nav aria-label="Enlaces del pie de página" className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-white/[0.58]">
              <a href="#inicio" className="transition hover:text-cyanx">Inicio</a>
              <a href="#experiencia" className="transition hover:text-cyanx">Experiencia</a>
              <a href="#servicios" className="transition hover:text-cyanx">Servicios</a>
              <a href="#galeria" className="transition hover:text-cyanx">Galería</a>
              <a href="#contacto" className="transition hover:text-cyanx">Contacto</a>
              <a href="mailto:hola@lvlx.com" className="transition hover:text-cyanx">hola@lvlx.com</a>
              {contactPhone && (
                <a href={contactPhoneHref} className="transition hover:text-cyanx">{contactPhone}</a>
              )}
            </nav>
          </div>
          <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/[0.42] sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} LVLX. Todos los derechos reservados.</p>
            <p>Experiencias deportivas para marcas, atletas y comunidades.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
