import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { FooterLayout } from "@/components/ui/layout/FooterLayout";
import { HeaderLayout } from "@/components/ui/layout/HeaderLayout";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iubizon.com"),
  title: {
    default:
      "iubizon - Venta y Reparación de Proyectores Epson en Lima | Servicio Técnico",
    template: "%s",
  },
  description:
    "Venta, reparación y mantenimiento de proyectores Epson en Lima, Perú. Equipos nuevos y reacondicionados con garantía extendida. Servicio técnico especializado.",
  alternates: {
    canonical: "https://www.iubizon.com",
  },
  authors: [{ name: "iubizon", url: "https://www.iubizon.com" }],
  creator: "iubizon",
  publisher: "iubizon",
  category: "technology",
  keywords: [
    //Generic words
    "venta de proyectores",
    "venta de proyectores nuevos",
    "venta de proyectores epson",
    "proyectores reacondicionados",
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

    //Repairs and maintenance
    "reparación de proyectores",
    "reparación de proyectores lima",
    "reparación de proyectores epson",
    "servicio técnico de proyectores",
    "servicio técnico proyectores lima",
    "mantenimiento de proyectores",
    "mantenimiento de proyectores epson",
    "reparación proyectores epson lima",
    "técnico de proyectores",
    "reparación de proyectores a domicilio",
    "mantenimiento preventivo proyectores",
    "servicio de proyectores",
    "arreglo de proyectores",
    "proyectores que no encienden",
    "reparación lámpara proyector",
    "cambio de lámpara proyector",
    "limpieza de proyectores",
    "calibración de proyectores",
    "proyector no da imagen",
    "proyector sobrecalentado",
    "reparación urgente proyectores",

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
        url: "https://www.iubizon.com/tu-mundo-multimedia.jpg",
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
        url: "https://www.iubizon.com/tu-mundo-multimedia.jpg",
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
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "iubizon",
    description:
      "Venta, reparación y mantenimiento de proyectores Epson en Lima, Perú. Equipos nuevos y reacondicionados con garantía extendida. Servicio técnico especializado.",
    url: "https://www.iubizon.com",
    logo: "https://www.iubizon.com/images/logo.png",
    image: "https://www.iubizon.com/tu-mundo-multimedia.jpg",
    telephone: "+51972300301",
    email: "iubizon.company@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle las acacias, Pje. los Jazmines 181",
      addressLocality: "Chorrillos",
      addressRegion: "Lima",
      postalCode: "15067",
      addressCountry: "PE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -12.186,
      longitude: -77.014,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "12:00",
      },
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    sameAs: [
      "https://www.facebook.com/iubizon/",
      "https://www.instagram.com/iubizon",
      "https://www.tiktok.com/@iubizon",
    ],
    areaServed: {
      "@type": "Country",
      name: "Peru",
    },
  };

  return (
    <html lang="es">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          strategy="beforeInteractive"
        />
      </head>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1158970212368986');
            fbq('track', 'PageView');
          `,
        }}
      />
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
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1158970212368986&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
        <HeaderLayout />
        {children}
        <SpeedInsights />
        <Analytics />
        {/* LAYOUT */}
        <FooterLayout />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
