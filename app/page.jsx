import Header from "../components/Header";
import Logo from "../components/Logo";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const asset = (path) => `${basePath}${path}`;

const disciplines = ["Running", "Cycling", "Triathlon", "Community", "Race Production"];

const stats = [
  { value: "+100%", label: "Fotos reales del proyecto" },
  { value: "3", label: "Disciplinas protagonistas" },
  { value: "1", label: "Comunidad en movimiento" }
];

const highlights = [
  {
    title: "Running con actitud",
    text: "Capturamos energía, enfoque y velocidad en escenas reales que transmiten esfuerzo y superación.",
    image: "/assets/real/athlete-07.webp"
  },
  {
    title: "Cycling de alto rendimiento",
    text: "La narrativa visual muestra precisión, potencia y una identidad atlética más creíble y aspiracional.",
    image: "/assets/real/athlete-29.webp"
  },
  {
    title: "Atletas con personalidad",
    text: "La web ahora comunica personas reales, no stock artificial, elevando la confianza de la marca.",
    image: "/assets/real/athlete-18.webp"
  },
  {
    title: "Comunidad y producción",
    text: "Integramos grupo, acción y retrato para que la experiencia se sienta viva en toda la landing.",
    image: "/assets/real/athlete-16.webp"
  }
];

const services = [
  "Organización de carreras, retos y activaciones deportivas.",
  "Producción visual para campañas, lanzamientos y comunidades fitness.",
  "Experiencias premium para running, cycling y triathlon.",
  "Cobertura fotográfica, identidad visual y storytelling de marca.",
  "Diseño de páginas y piezas digitales con estética deportiva real."
];

const galleryPhotos = [
  { src: "/assets/real/athlete-01.webp", alt: "Corredor en escaleras", frame: "shape-arch" },
  { src: "/assets/real/athlete-02.webp", alt: "Corredor con fondo azul", frame: "shape-wave" },
  { src: "/assets/real/athlete-03.webp", alt: "Grupo de atletas", frame: "rounded-[2rem]" },
  { src: "/assets/real/athlete-04.webp", alt: "Grupo corriendo", frame: "shape-capsule" },
  { src: "/assets/real/athlete-05.webp", alt: "Atleta masculino corriendo", frame: "shape-wave" },
  { src: "/assets/real/athlete-06.webp", alt: "Atleta femenina en salto", frame: "shape-diamond" },
  { src: "/assets/real/athlete-07.webp", alt: "Triatleta con bicicleta y monumento", frame: "shape-arch" },
  { src: "/assets/real/athlete-08.webp", alt: "Triatleta en bicicleta", frame: "rounded-[2.4rem]" },
  { src: "/assets/real/athlete-09.webp", alt: "Triatleta posando con bicicleta", frame: "shape-capsule" },
  { src: "/assets/real/athlete-10.webp", alt: "Atleta bajando escaleras", frame: "shape-wave" },
  { src: "/assets/real/athlete-11.webp", alt: "Atleta masculino sprintando", frame: "shape-diamond" },
  { src: "/assets/real/athlete-12.webp", alt: "Atleta femenina corriendo de perfil", frame: "rounded-[2rem]" },
  { src: "/assets/real/athlete-13.webp", alt: "Equipo posando", frame: "shape-arch" },
  { src: "/assets/real/athlete-14.webp", alt: "Atleta femenina corriendo con lentes", frame: "shape-capsule" },
  { src: "/assets/real/athlete-15.webp", alt: "Atleta femenina en grama", frame: "rounded-[2.4rem]" },
  { src: "/assets/real/athlete-16.webp", alt: "Atleta femenina levantando rodilla", frame: "shape-wave" },
  { src: "/assets/real/athlete-17.webp", alt: "Atleta bajando escalones", frame: "shape-diamond" },
  { src: "/assets/real/athlete-18.webp", alt: "Triatleta en curva sobre bicicleta", frame: "rounded-[2rem]" },
  { src: "/assets/real/athlete-19.webp", alt: "Atleta masculino junto a fuente", frame: "shape-capsule" },
  { src: "/assets/real/athlete-20.webp", alt: "Corredor en subida", frame: "shape-wave" },
  { src: "/assets/real/athlete-21.webp", alt: "Atleta femenina posando ante mural", frame: "shape-arch" },
  { src: "/assets/real/athlete-22.webp", alt: "Atleta femenina corriendo escaleras", frame: "rounded-[2.4rem]" },
  { src: "/assets/real/athlete-23.webp", alt: "Atleta femenina junto a fuente", frame: "shape-diamond" },
  { src: "/assets/real/athlete-24.webp", alt: "Fisicoculturista con brazos arriba", frame: "shape-capsule" },
  { src: "/assets/real/athlete-25.webp", alt: "Fisicoculturista junto a fuente", frame: "rounded-[2rem]" },
  { src: "/assets/real/athlete-26.webp", alt: "Atleta femenina posando con logo", frame: "shape-wave" },
  { src: "/assets/real/athlete-27.webp", alt: "Corredora en acción", frame: "shape-arch" },
  { src: "/assets/real/athlete-28.webp", alt: "Corredora bajando escaleras", frame: "shape-diamond" },
  { src: "/assets/real/athlete-29.webp", alt: "Triatleta y bicicleta en frente", frame: "rounded-[2.4rem]" },
  { src: "/assets/real/athlete-30.webp", alt: "Corredor sobre césped", frame: "shape-capsule" },
  { src: "/assets/real/athlete-31.webp", alt: "Atleta femenina en carrera", frame: "shape-wave" }
];

function StatCard({ value, label }) {
  return (
    <div className="glass rounded-[1.6rem] px-5 py-5">
      <div className="text-3xl font-black text-white sm:text-4xl">{value}</div>
      <div className="mt-2 text-sm leading-6 text-white/[0.65]">{label}</div>
    </div>
  );
}

export default function Page() {
  return (
    <main id="inicio" className="noise min-h-screen overflow-hidden">
      <Header />

      <section className="relative px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="absolute inset-0 -z-10 bg-grid bg-[length:72px_72px] opacity-[0.08]" />
        <div className="absolute left-[12%] top-28 -z-10 h-40 w-40 rounded-full bg-cyanx/10 blur-[90px] sm:h-72 sm:w-72" />
        <div className="absolute right-[10%] top-[18%] -z-10 h-48 w-48 rounded-full bg-cyanDeep/10 blur-[90px] sm:h-80 sm:w-80" />

        <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyanx/30 bg-cyanx/10 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-cyanx shadow-glow">
              <span className="h-2 w-2 rounded-full bg-cyanx pulse-glow" />
              Fotografías reales · experiencia real
            </div>

            <h1 className="hero-title text-4xl font-black uppercase text-white sm:text-6xl lg:text-7xl xl:text-[6.15rem]">
              Una web deportiva que se siente <span className="text-cyanx drop-shadow-[0_0_24px_rgba(25,200,255,.45)]">viva</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/[0.76] sm:text-lg">
              Reemplazamos las imágenes de IA por una narrativa visual auténtica: atletas reales, energía real y una distribución mucho más editorial para que LVLX conecte con más fuerza.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#galeria"
                className="group inline-flex items-center justify-center rounded-full bg-cyanx px-7 py-4 text-sm font-black uppercase tracking-wide text-ink shadow-glow transition hover:-translate-y-1 hover:bg-white"
              >
                Ver galería
                <span className="ml-3 transition group-hover:translate-x-1">{"\u2192"}</span>
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full border border-white/[0.18] bg-white/[0.09] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-1 hover:border-cyanx/70 hover:bg-cyanx/10"
              >
                Hablemos de tu evento
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

          <div className="relative min-h-[34rem] lg:min-h-[42rem]">
            <div className="absolute left-3 top-3 h-24 w-24 rounded-full border border-cyanx/[0.35] bg-cyanx/[0.08] blur-sm" />
            <div className="absolute right-6 top-6 h-20 w-20 rounded-full border border-white/10 bg-white/[0.05]" />

            <div className="absolute left-0 top-10 w-[44%] max-w-[18rem] float-soft">
              <div className="overflow-hidden border border-white/[0.12] bg-white/[0.05] p-2 shadow-card shape-wave">
                <img src={asset("/assets/real/athlete-13.webp")} alt="Equipo LVLX" className="h-full w-full object-cover shape-wave" loading="eager" />
              </div>
            </div>

            <div className="absolute right-0 top-0 w-[48%] max-w-[21rem] lg:w-[52%]">
              <div className="overflow-hidden border border-white/[0.12] bg-white/[0.05] p-2 shadow-card shape-arch">
                <img src={asset("/assets/real/athlete-04.webp")} alt="Atletas corriendo" className="h-[22rem] w-full object-cover shape-arch sm:h-[27rem] lg:h-[31rem]" loading="eager" />
              </div>
            </div>

            <div className="absolute bottom-[18%] left-[12%] z-10 w-[40%] max-w-[17rem] lg:left-[8%]">
              <div className="overflow-hidden border border-white/[0.12] bg-white/[0.05] p-2 shadow-card rounded-[2rem]">
                <img src={asset("/assets/real/athlete-24.webp")} alt="Atleta masculino" className="h-[15rem] w-full rounded-[1.4rem] object-cover sm:h-[17rem]" loading="lazy" />
              </div>
            </div>

            <div className="absolute bottom-0 right-[6%] w-[54%] max-w-[22rem] lg:right-[2%]">
              <div className="overflow-hidden border border-white/[0.12] bg-white/[0.05] p-2 shadow-card shape-capsule">
                <img src={asset("/assets/real/athlete-29.webp")} alt="Triatleta con bicicleta" className="h-[16rem] w-full object-cover shape-capsule sm:h-[18rem] lg:h-[19rem]" loading="lazy" />
              </div>
            </div>

            <div className="absolute bottom-[6%] left-[2%] rounded-full border border-cyanx/30 bg-[#03102a]/80 px-4 py-3 text-[0.68rem] font-black uppercase tracking-[0.2em] text-cyanx backdrop-blur">
              Real athletes. Real energy.
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute left-0 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-cyanDeep/[0.14] blur-[110px]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-cyanx">Descubre la experiencia LVLX</p>
            <h2 className="mt-5 text-balance text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-6xl">
              Más real, más atlética, más memorable
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/[0.68]">
              La idea fue mantener la fuerza premium de la landing, pero reemplazando el look artificial por un lenguaje visual auténtico y mucho más dinámico.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <StatCard key={item.label} value={item.value} label={item.label} />
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4">
              <div className="overflow-hidden border border-white/10 bg-white/[0.05] p-2 shadow-card shape-arch">
                <img src={asset("/assets/real/athlete-03.webp")} alt="Grupo de atletas" className="h-[20rem] w-full object-cover shape-arch sm:h-[25rem]" loading="lazy" />
              </div>
              <div className="overflow-hidden border border-white/10 bg-white/[0.05] p-2 shadow-card shape-wave">
                <img src={asset("/assets/real/athlete-16.webp")} alt="Corredora en impulso" className="h-[15rem] w-full object-cover shape-wave sm:h-[17rem]" loading="lazy" />
              </div>
            </div>
            <div className="grid gap-4 pt-6 sm:pt-14">
              <div className="overflow-hidden border border-white/10 bg-white/[0.05] p-2 shadow-card rounded-[2rem]">
                <img src={asset("/assets/real/athlete-25.webp")} alt="Atleta masculino posando" className="h-[16rem] w-full rounded-[1.4rem] object-cover sm:h-[19rem]" loading="lazy" />
              </div>
              <div className="overflow-hidden border border-white/10 bg-white/[0.05] p-2 shadow-card shape-capsule">
                <img src={asset("/assets/real/athlete-08.webp")} alt="Triatleta pedaleando" className="h-[21rem] w-full object-cover shape-capsule sm:h-[23rem]" loading="lazy" />
              </div>
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
                Una distribución menos predecible y mucho más editorial.
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-white/[0.62]">
              Mezclamos retrato, acción y grupo para que cada bloque respire distinto y la página se sienta más premium.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {highlights.map((card, index) => (
              <article key={card.title} className="card-glow group rounded-[1.85rem] p-2">
                <div className={`overflow-hidden ${index % 2 === 0 ? "shape-wave" : "shape-arch"}`}>
                  <img
                    src={asset(card.image)}
                    alt={card.title}
                    className={`h-64 w-full object-cover transition duration-500 group-hover:scale-105 ${index % 2 === 0 ? "shape-wave" : "shape-arch"}`}
                    loading="lazy"
                  />
                </div>
                <div className="p-4 pb-5">
                  <div className="mb-3 inline-flex rounded-full border border-cyanx/30 bg-cyanx/10 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.18em] text-cyanx">
                    {index === 0 ? "Running" : index === 1 ? "Cycling" : index === 2 ? "Portrait" : "Community"}
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.62]">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2.2rem] border border-cyanx/[0.15] bg-[#03102a] p-6 shadow-card sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-cyanx">Servicios</p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-none text-white sm:text-5xl">
              Servicios para experiencias deportivas
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/[0.64]">
              La nueva dirección visual de la web soporta mejor la venta de experiencias deportivas, producción de eventos y activaciones de marca.
            </p>
            <div className="mt-8 grid gap-4">
              {services.map((service, index) => (
                <div key={service} className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyanx/[0.25] bg-cyanx/10 text-cyanx shadow-glow text-sm font-black">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="pt-1 text-sm font-semibold leading-6 text-white/[0.78] sm:text-base">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:items-end">
            <div className="grid gap-4">
              <div className="overflow-hidden border border-white/10 bg-white/[0.05] p-2 shadow-card shape-diamond">
                <img src={asset("/assets/real/athlete-21.webp")} alt="Atleta femenina posando" className="h-[18rem] w-full object-cover shape-diamond sm:h-[22rem]" loading="lazy" />
              </div>
              <div className="overflow-hidden border border-white/10 bg-white/[0.05] p-2 shadow-card rounded-[2rem]">
                <img src={asset("/assets/real/athlete-11.webp")} alt="Atleta masculino sprintando" className="h-[16rem] w-full rounded-[1.45rem] object-cover sm:h-[18rem]" loading="lazy" />
              </div>
            </div>
            <div className="grid gap-4 sm:pt-12">
              <div className="overflow-hidden border border-white/10 bg-white/[0.05] p-2 shadow-card shape-capsule">
                <img src={asset("/assets/real/athlete-09.webp")} alt="Triatleta posando" className="h-[17rem] w-full object-cover shape-capsule sm:h-[20rem]" loading="lazy" />
              </div>
              <div className="overflow-hidden border border-white/10 bg-white/[0.05] p-2 shadow-card shape-wave">
                <img src={asset("/assets/real/athlete-27.webp")} alt="Corredora en acción" className="h-[21rem] w-full object-cover shape-wave sm:h-[24rem]" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute right-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-cyanx/10 blur-[130px]" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.32em] text-cyanx">Galería LVLX</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-6xl">
                Todas las fotos distribuidas con ritmo, forma y movimiento.
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-white/[0.62]">
              En lugar de bloques rectangulares repetidos, armamos una galería tipo editorial con recortes, curvas y distintas alturas.
            </p>
          </div>

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
            {galleryPhotos.map((photo, index) => (
              <figure key={photo.src} className="gallery-tile group mb-5 break-inside-avoid">
                <div className={`gallery-frame ${photo.frame} border border-white/10 bg-white/[0.05] p-2 shadow-card ${index % 3 === 0 ? "translate-y-2" : index % 3 === 1 ? "-translate-y-1" : "translate-y-0"}`}>
                  <img
                    src={asset(photo.src)}
                    alt={photo.alt}
                    className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${photo.frame}`}
                    loading="lazy"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-cyanx/[0.20] bg-[radial-gradient(circle_at_80%_10%,rgba(25,200,255,.25),transparent_32rem),linear-gradient(135deg,rgba(5,33,80,.92),rgba(2,8,21,.96))] p-6 shadow-card sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <Logo compact className="h-16 w-16" />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.32em] text-cyanx">LVLX</p>
                  <p className="text-sm text-white/[0.58]">Experiencias deportivas premium</p>
                </div>
              </div>
              <h2 className="text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-6xl">
                ¿Listo para mostrar tu comunidad con una estética real y poderosa?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/[0.70]">
                Esta propuesta deja atrás el look generado por IA y construye una identidad visual mucho más auténtica, aspiracional y útil para vender la experiencia LVLX.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="overflow-hidden border border-white/10 bg-white/[0.05] p-2 shadow-card rounded-[2rem]">
                <img src={asset("/assets/real/athlete-13.webp")} alt="Grupo de atletas LVLX" className="h-[19rem] w-full rounded-[1.4rem] object-cover sm:h-[22rem]" loading="lazy" />
              </div>
              <div className="glass rounded-[1.75rem] p-6 sm:p-8">
                <p className="text-base leading-8 text-white/[0.72]">
                  Si quieres, el siguiente paso puede ser pulir textos comerciales, integrar formularios y ajustar aún más la experiencia según el enfoque de la marca.
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
            <a href="#galeria" className="transition hover:text-cyanx">Galería</a>
            <a href="#contacto" className="transition hover:text-cyanx">Contacto</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
