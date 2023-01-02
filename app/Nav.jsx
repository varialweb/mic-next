'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  function NavLinks() {
    return (
      <>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="https://store.grantcardoneteam.com/?ref=UtWzq1w3jgsZd&fbclid=IwAR2_QGr93foFxTwFGS9s8kxoyALUjIvlmcvnaCZcWpQnA4mv6kvuuXhig0w">Shop</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </>
    )
  }

  return (
    <nav className="bg-[#02071D] flex items-center justify-between p-4 lg:px-16 lg:py-6 text-white">
      <Link href="/">
        <Image
          src="/img/icon.png" 
          width="48"
          height="48"
          alt="Home"
          className="lg:hidden"
        />
        <Image
          src="/img/logo.png" 
          width="268"
          height="96"
          alt="Home"
          className="hidden lg:inline"
        />
      </Link>
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden"
      >
        <Image 
          src="/img/hamburger.png"
          width="36"
          height="36"
          alt="Menu"
        />
      </button>
      <div className="hidden lg:flex uppercase font-medium text-[20px] gap-12">
        <NavLinks />
      </div>
      {menuOpen && (
        <div className="bg-[#02071D] text-white absolute w-4/5 h-screen left-0 top-0 p-4 flex flex-col gap-8">
          <Link href="/">
            <Image
              src="/img/icon.png" 
              width="48"
              height="48"
              alt="Home"
            />
          </Link>
          <NavLinks />
        </div>
      )}
    </nav>
  )
}