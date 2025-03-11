import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Tomorrow } from "next/font/google"
import { twMerge } from "tailwind-merge"
import { Footer } from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingNav } from "@/components/floating-navbar"
import { navigationItems } from "@/constants/navlinks"
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision"

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Siyaratech Innovations",
  description: "Pioneering Tomorrow's Solutions Today",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={twMerge(tomorrow.className, "antialiased min-h-screen bg-background text-foreground")}>
        <ThemeProvider attribute="class">
          <div className="flex flex-col min-h-screen p-2 bg-black">
            <div className="relative flex flex-col items-start justify-center overflow-clip w-full">
              <BackgroundBeamsWithCollision >
              <FloatingNav navItems={navigationItems} className="z-50" />
              <main className="flex-1 h-fit w-full">{children}</main>
              </BackgroundBeamsWithCollision >
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

