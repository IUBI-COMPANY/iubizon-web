import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { FooterLayout } from "@/components/ui/FooterLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iubizon - Tu mundo multimedia",
  description:
    "De todo multimedia a precios accesibles para mayoristas y minoristas.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "iubi", url: "https://www.iubi.pe" }],
  creator: "iubizon",
  category: "technology",
  keywords: [
    //Generic words
    "venta de proyectores",
    "venta de proyectores epson",
    "proyectores de segunda",
    "proyectores epson",
    "proyectores multimedia",
    "proyectores usados",
    "proyectores de segunda mano",
    "compra proyectores",
    "ofertas de proyectores epson",
    "descuentos de proyectores epson",
    "remates de proyectores epson",
    "venta de productos multimedia",
    "venta de proyectores baratos",
    "proyectores a bajos precios",

    //By model
    "epson powerlite 98h",
    "epson powerlite 980w",
    "epson powerlite 119w",
    "epson powerlite 970",
    "epson powerlite 1925w",
    "epson powerlite 975w",
    "epson powerlite 108",

    //By location
    "comprar proyectores en lima",
    "venta de proyectores epson en lima",
    "venta de proyectores epson en san isidro",
    "venta de proyectores epson en miraflores",
    "venta de proyectores epson en barranco",
    "venta de proyectores epson en surco",
    "venta de proyectores epson en la molina",
    "venta de proyectores epson en san borja",
    "venta de proyectores epson en jesús maría",
    "venta de proyectores epson en magdalena del mar",
    "venta de proyectores epson en lince",
    "venta de proyectores epson en san miguel",
    "venta de proyectores epson en callao",
    "venta de proyectores epson en pueblo libre",
    "venta de proyectores epson en breña",
    "venta de proyectores epson en rimac",
    "venta de proyectores epson en san juan de lurigancho",
    "venta de proyectores epson en surquillo",
    "venta de proyectores epson en la victoria",
    "venta de proyectores epson en lurin",
    "venta de proyectores epson en ancón",
    "venta de proyectores epson en ate",
    "tienda de proyectores en lima",
    "venta de proyectores en todo el Perú",
    "envío de proyectores a provincia",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.iubizon.com",
    title: "iubizon - Tu mundo multimedia",
    description:
      "De todo multimedia a precios accesibles para mayoristas y minoristas.",
    images: [
      {
        url: "https://storage.googleapis.com/iubi-website.appspot.com/resources/seo-banner.jpg",
      },
    ],
    siteName: "iubizon - Tu mundo multimedia",
  },
  twitter: {
    card: "summary_large_image",
    title: "iubizon - Tu mundo multimedia",
    description:
      "De todo multimedia a precios accesibles para mayoristas y minoristas.",
    images: [
      {
        url: "https://storage.googleapis.com/iubi-website.appspot.com/resources/seo-banner.jpg",
      },
    ],
  },
  facebook: {
    appId: "1176594967865528",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17511349348"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17511349348');
        `}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">{`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-P8X65GN4');
`}</Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8X65GN4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <SpeedInsights />
        <Analytics />
        {/* LAYOUT */}
        <FooterLayout />
      </body>
    </html>
  );
}
