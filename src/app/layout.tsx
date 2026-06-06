import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";



export const metadata: Metadata = {
  title: 'Nexus - Integrated Wellness Super App',
  description: 'Unify your physical health, mental wellbeing, and financial behavior with Nexus, the privacy-first super app for holistic self-awareness and AI-driven coaching.',
  keywords: ["wellness app, super app, mental health, physical health, financial wellbeing, psychosomatic, AI coaching, privacy-first, no wearables, stress management, emotional spending"],
  openGraph: {
    "title": "Nexus - Integrated Wellness Super App",
    "description": "Unify your physical health, mental wellbeing, and financial behavior with Nexus, the privacy-first super app for holistic self-awareness and AI-driven coaching.",
    "url": "https://www.nexusapp.com",
    "siteName": "Nexus",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169842.jpg",
        "alt": "Nexus app dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Nexus - Integrated Wellness Super App",
    "description": "Unify your physical health, mental wellbeing, and financial behavior with Nexus, the privacy-first super app for holistic self-awareness and AI-driven coaching.",
    "images": [
      "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169842.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${sourceSans3.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
