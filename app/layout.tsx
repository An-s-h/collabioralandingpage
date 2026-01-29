import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Collabiora - Health Research Made Simple",
  description: "Join Collabiora to connect with medical researchers, participate in clinical trials, and advance healthcare innovation. Join our beta waitlist today.",
  keywords: "medical research, clinical trials, patient-researcher connection, healthcare innovation, Collabiora",
  icons: {
    icon: [
      { url: "/logo1.png", sizes: "32x32", type: "image/png" },
      { url: "/logo1.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logo1.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo1.png",
  },
  openGraph: {
    title: "Collabiora - Health Research Made Simple",
    description: "Join Collabiora to connect with medical researchers, participate in clinical trials, and advance healthcare innovation.",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Collabiora Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Collabiora - Health Research Made Simple",
    description: "Join Collabiora to connect with medical researchers, participate in clinical trials, and advance healthcare innovation.",
    images: ["/logo1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // HubSpot Portal ID - Update this with your actual Portal ID
  const hubspotPortalId = "244841682";

  return (
    <html lang="en">
      <head>
        {/* HubSpot Tracking Code - Sets hubspotutk cookie for contact association */}
        <Script
          id="hubspot-tracking"
          strategy="afterInteractive"
          src={`https://js.hs-scripts.com/${hubspotPortalId}.js`}
        />
        {/* Viral Loops SDK - API Only Mode (no automatic form binding) */}
        <Script
          id="viral-loops-loader"
          strategy="afterInteractive"
          src="https://app.viral-loops.com/widgetsV2/core/loader.js"
          data-campaign-id="nGVsE6bNtXHGQlXj1ykr3BNLwJE"
          data-vl-disable-void="true"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
