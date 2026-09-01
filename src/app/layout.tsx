import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ConsentManager from "@/components/analytics/ConsentManager";
import AnalyticsClickTracker from "@/components/analytics/AnalyticsClickTracker";
import FloatingWhatsApp from "@/components/contact/FloatingWhatsApp";
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: "Pepro — Solutions numériques sur mesure à Ris-Orangis",
  description:
    "Sites web, e-commerce, logiciels métier, IA et ingénierie numérique sur mesure.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Solutions numériques sur mesure à Ris-Orangis`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: "Pepro - Agence de développement logiciel sur-mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Solutions numériques sur mesure à Ris-Orangis`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Script id="google-consent-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
      </head>
      <body>
        <ConsentManager />
        <AnalyticsClickTracker />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
