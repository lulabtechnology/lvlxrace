import "./globals.css";

export const metadata = {
  title: "LVLX | Experiencias deportivas premium",
  description:
    "Experiencias deportivas, retos y activaciones de alto impacto para marcas, atletas y comunidades.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
