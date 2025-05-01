"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import logo from "@/assets/logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white py-[30px] ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
       <div className=" flex lg:gap-x-40 md:gap-x-10 ">
       <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo.src}
            alt="SalesRank.AI Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-xl font-semibold">SalesRank.AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ fontFamily: "var(--font-plus-jakarta)" }} className="hidden md:flex md:items-center md:gap-4">
          <Link href="/"   className="text-sm font-semibold  transition-colors hover:text-secondary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-semibold transition-colors hover:text-secondary">
            About
          </Link>
          <Link href="/pricing" className="text-sm font-semibold transition-colors hover:text-secondary">
            Pricing
          </Link>
          <Link href="/consulting" className="text-sm font-semibold transition-colors hover:text-secondary">
            Consulting
          </Link>
          <Link href="/ai-coach" className="text-sm font-semibold transition-colors hover:text-secondary">
            AI Coach
          </Link>
        </nav>
       </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden text-[16px] font-bold md:inline-flex rounded-full px-9 py-5 hover:bg-secondary hover:text-white">Get started</Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/consulting"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Consulting
                </Link>
                <Link
                  href="/ai-coach"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  AI Coach
                </Link>
                <Button  className="mt-4 w-full rounded-full">Get started</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
