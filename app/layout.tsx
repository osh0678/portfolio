import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Seonghwan Oh — Developer",
  description: "Full-stack developer. Java, Spring Boot, React, Next.js. Always learning.",
  openGraph: {
    title: "Seonghwan Oh — Developer",
    description: "Full-stack developer. Java, Spring Boot, React, Next.js.",
    url: "https://se0ng.dev",
    siteName: "se0ng.dev",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
