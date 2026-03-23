import type { Metadata } from "next";
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
  openGraph: {
    title: "DeskWolf LLC — Every Call. Handled.",
    description:
      "Done-for-you voice AI and automation for high call-volume businesses.",
    url: "https://deskwolf.ai",
    siteName: "DeskWolf",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
