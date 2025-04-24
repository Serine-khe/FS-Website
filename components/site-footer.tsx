import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
          {/* Security & Brand */}
          <div>
            <h4 className="text-lg font-medium mb-4">Security & Brand</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Report Copyright Infringement
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Report security Issue
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Trademark Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Website */}
          <div>
            <h4 className="text-lg font-medium mb-4">website</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Digital Accessibility
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Privacy statement
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-lg font-medium mb-4">Get In Touch</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact FS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Maps & Directions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
          <div className="text-sm flex items-center gap-1">
            <span>Faculty of science</span>
            <span className="inline-flex items-center justify-center rounded-full border border-white w-4 h-4 text-xs">
              c
            </span>
            <span>2025. Tous droits reserves.</span>
          </div>

          <div className="flex items-center gap-4">
            <Image src="/logo-light.png" alt="Faculty of Sciences Logo" width={40} height={40} />
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Facebook">
              <div className="w-8 h-8 flex items-center justify-center border border-white rounded-sm hover:bg-white hover:text-black transition-colors">
                f
              </div>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <div className="w-8 h-8 flex items-center justify-center border border-white rounded-sm hover:bg-white hover:text-black transition-colors">
                in
              </div>
            </Link>
            <Link href="#" aria-label="Email">
              <div className="w-8 h-8 flex items-center justify-center border border-white rounded-sm hover:bg-white hover:text-black transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
