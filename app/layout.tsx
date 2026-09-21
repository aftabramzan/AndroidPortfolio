import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Aftab Ali | Android & Cross-Platform App Developer",
  description:
    "Portfolio of Aftab Ali, an Android and cross-platform app developer specializing in Kotlin, Flutter, REST APIs, Firebase, and modern mobile application development.",
  keywords: [
    "Aftab Ali",
    "Android Developer",
    "Flutter Developer",
    "Kotlin",
    "Mobile App Developer",
    "Karachi Pakistan",
  ],
  openGraph: {
    title: "Aftab Ali | Android & Cross-Platform App Developer",
    description:
      "Portfolio of Aftab Ali, an Android and cross-platform app developer specializing in Kotlin, Flutter, REST APIs, Firebase, and modern mobile application development.",
    url: siteConfig.url,
    siteName: "Aftab Ali Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aftab Ali | Android & Cross-Platform App Developer",
    description:
      "Portfolio of Aftab Ali, an Android and cross-platform app developer specializing in Kotlin, Flutter, REST APIs, Firebase, and modern mobile application development.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground">
        <div className="relative min-h-screen overflow-hidden">
          <Navbar />
          <div className="relative z-10">{children}</div>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
