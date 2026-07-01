import "./globals.css";

export const metadata = {
  title: "LVLX | Experiencias deportivas premium",
  description:
    "Landing page premium para experiencias deportivas, retos de alto impacto y activaciones de marca.",
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
