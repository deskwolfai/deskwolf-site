import type { Metadata } from "next";
import "@/styles/globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
