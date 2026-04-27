import type { Metadata } from "next"
import "./globals.css"

const baseUrl = "https://se0ng.dev"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Seonghwan Oh — Developer",
  description: "Full-stack developer. Java, Spring Boot, React, Next.js. Always learning.",
  keywords: ["developer", "full-stack", "Java", "Spring Boot", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Seonghwan Oh", url: baseUrl }],
  creator: "Seonghwan Oh",
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "Seonghwan Oh — Developer",
    description: "Full-stack developer. Java, Spring Boot, React, Next.js. Always learning.",
    siteName: "se0ng.dev",
    images: [
      {
        url: "https://se0ng.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Seonghwan Oh — Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seonghwan Oh — Developer",
    description: "Full-stack developer. Java, Spring Boot, React, Next.js.",
    images: ["https://se0ng.dev/og.png"],
    creator: "@osh0678",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑‍💻</text></svg>",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
