import "./globals.css";

export const metadata = {
  title: {
    default: "LVLX | Experiencias deportivas, carreras y activaciones",
    template: "%s | LVLX"
  },
  description:
    "LVLX diseña y produce carreras, retos, activaciones fitness y experiencias deportivas para marcas, atletas y comunidades.",
  keywords: [
    "experiencias deportivas",
    "producción de carreras",
    "eventos deportivos",
    "activaciones deportivas",
    "running",
    "cycling",
    "fitness",
    "triathlon",
    "race production"
  ],
  applicationName: "LVLX",
  authors: [{ name: "LVLX" }],
  creator: "LVLX",
  publisher: "LVLX",
  category: "sports",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "LVLX | Experiencias deportivas, carreras y activaciones",
    description:
      "Carreras, retos y activaciones deportivas diseñadas para conectar marcas, atletas y comunidades.",
    type: "website",
    locale: "es_PA",
    siteName: "LVLX"
  },
  twitter: {
    card: "summary_large_image",
    title: "LVLX | Experiencias deportivas",
    description: "Carreras, retos y activaciones deportivas de alto impacto."
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
