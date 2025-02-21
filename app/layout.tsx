import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Islamic Learning Platform",
  description: "Learn Islam through online courses, videos, and bundled packages",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
              <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Islamic Learning. All rights reserved.</p>
              <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                  Terms of Service
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                  Privacy
                </Link>
              </nav>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

