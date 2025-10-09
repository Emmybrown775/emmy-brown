import type { Metadata, Viewport } from "next";
import { Fira_Code, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Fira_Code({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Viewport configuration
export const viewport: Viewport = {
  themeColor: "#403d39",
  width: "device-width",
  initialScale: 1,
};

// Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://emmycodes.pxxl.pro"),

  title: "EmmyCodes | Software Engineer | Hardware Engineer",
  description:
    "Creative Software/Hardware Engineer with a few years of experience, specializing in web development, app development, hardware development, telegram bot development and so on. Building scalable products with great user experiences.",
  keywords: [
    "Software Engineer",
    "Hardware Engineer",
    "Web Development",
    "App Development",
    "Robotics",
    "Embedded Systems",
    "Cloud Computing",
    "Full Stack Developer",
    "EmmyCodes",
  ],
  authors: [{ name: "EmmyCodes" }],
  creator: "EmmyCodes",
  publisher: "EmmyCodes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emmycodes.pxxl.pro",
    siteName: "EmmyCodes Portfolio",
    title: "EmmyCodes | Software Engineer | Hardware Engineer",
    description:
      "Creative Software and Hardware Engineer specializing in web development, app development, robotics, embedded systems, automation and cloud computing. Building scalable products with great user experiences.",
    images: [
      {
        url: "/images/portfolio.png",
        width: 1200,
        height: 630,
        alt: "EmmyCodes - Software and Hardware Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmmyCodes | Software & Hardware Engineer",
    description:
      "FullStack Engineer(Software / Hardware) building scalable products with great user experiences",
    creator: "@EmmyCodes775",
    images: ["/images/portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "EmmyCodes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
