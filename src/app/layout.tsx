import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DeskWolf LLC — Every Call. Handled.",
  description:
    "Done-for-you voice AI and automation for high call-volume businesses. We answer your calls, recover the ones you miss, and qualify every new lead instantly.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "DeskWolf LLC — Every Call. Handled.",
    description:
      "Done-for-you voice AI and automation for high call-volume businesses.",
    url: "https://deskwolf.ai",
    siteName: "DeskWolf",
    type: "website",
    images: [{ url: "/images/og-card.png", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeskWolf LLC — Every Call. Handled.",
    description:
      "Done-for-you voice AI and automation for high call-volume businesses.",
    images: ["/images/og-card.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69d4a6e19a221131665b83f1"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
