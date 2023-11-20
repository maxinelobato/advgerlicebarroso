import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import GoogleTagManager from "@magicul/next-google-tag-manager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advogada de Família - Dra. Gerlice Barroso",
  description:
    "O escritório Lenoir Advogados Associados atende pessoa física e empresas em diversos Estados do Brasil. Nossa equipe está apta a trabalhar desde questões mais simples, até casos complexos que exigem o envolvimento de profissionais de diversas áreas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <meta
        name="facebook-domain-verification"
        content="0pp7qrk8a62xbewr980vkh2xrevbua"
      /> */}

      {/* <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-59RLMBM2');
          `,
        }}
      ></Script> */}
      <body className={inter.className}>
        <GoogleTagManager id="GTM-59RLMBM2" />
        {children}
        {/* <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-59RLMBM2`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript> */}
      </body>
    </html>
  );
}
