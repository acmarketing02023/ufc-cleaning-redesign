import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import EmergencyBanner from "@/components/EmergencyBanner";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import IdleTimePopup from "@/components/IdleTimePopup";
import LiveChat from "@/components/LiveChat";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "UFC Cleaning | Professional Facility & Property Services in DFW",
  description:
    "Complete property services including residential cleaning, commercial cleaning, junk removal, power washing, demolition, and more. Serving all of Dallas-Fort Worth.",
  keywords:
    "cleaning services Dallas, commercial cleaning DFW, junk removal, power washing, demolition Texas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0284c7" />
        <SchemaMarkup />
        {/* Google Ads Conversion Tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18428852483"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18428852483');`}
        </script>
      </head>
      <body suppressHydrationWarning>
        <Header />
        <EmergencyBanner />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ExitIntentPopup />
        <IdleTimePopup />
        <LiveChat />
      </body>
    </html>
  );
}
