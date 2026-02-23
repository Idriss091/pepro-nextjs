import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "animate.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import AnalyticsClickTracker from "@/components/analytics/AnalyticsClickTracker";
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

import "@/assets/css/animate.css";
import "@/assets/css/font-awesome.css";
import "@/assets/css/flaticon-set.css";
import "@/assets/css/helper.css";
import "@/assets/css/unit-test.css";
import "@/assets/css/validnavs.css";
import "@/assets/css/style.css";
import "@/assets/css/a11y-overrides.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: "Pepro - Agence de développement logiciel sur-mesure à Paris",
  description:
    "Pepro est votre partenaire pour des solutions web et logistiques innovantes.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Agence de développement logiciel sur-mesure à Paris`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: "Pepro - Agence de developpement logiciel sur-mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Agence de développement logiciel sur-mesure à Paris`,
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
      <body className="bg-dark">
        <GoogleAnalytics />
        <AnalyticsClickTracker />
        {children}
      </body>
    </html>
  );
}
