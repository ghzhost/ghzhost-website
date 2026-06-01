import "./globals.css";

export const metadata = {
  title: "GhzHost — Infraestruturas do Futuro | Hosting 2150",
  description:
    "Hospedagem de última geração. Servidores quânticos, cloud neural, VPS, servidores de jogos e revenda. Infraestrutura hiperconectada para a próxima era.",
  keywords: "hosting, hospedagem, VPS, cloud, servidores, jogos, minecraft, GhzHost",
  openGraph: {
    title: "GhzHost — Infraestruturas do Futuro",
    description: "Hospedagem de última geração com infraestrutura hiperconectada.",
    url: "https://ghzhost.com",
    siteName: "GhzHost",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/img/logo.png" />
        <meta name="theme-color" content="#009fe3" />
      </head>
      <body>
        {/* Animated Cyber Grid Background */}
        <div className="cyber-grid" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
