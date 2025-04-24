"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button onClick={() => setIsOpen(true)} className="p-2" aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="p-2" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="px-6 py-4">
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Actuality
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Graduation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Post-Graduation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Departments
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Research laboratories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  E-bibliotheque
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg font-medium border border-black px-4 py-2 inline-block"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
