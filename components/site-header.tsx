"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [departmentsOpen, setDepartmentsOpen] = useState(false)
  const [graduationOpen, setGraduationOpen] = useState(false)
  const [postGradOpen, setPostGradOpen] = useState(false)
  const [researchOpen, setResearchOpen] = useState(false)

  const departments = [
    { name: "Physics", path: "/departments/physics" },
    { name: "Chemistry", path: "/departments/chemistry" },
    { name: "Computer Science", path: "/departments/computer-science" },
    { name: "Mathematics", path: "/departments/mathematics" },
    { name: "Biology", path: "/departments/biology" },
    { name: "Agronomy", path: "/departments/agronomy" },
    { name: "Sports Sciences", path: "/departments/sports-sciences" },
  ]

  const graduationPrograms = [
    { name: "LMD Program", path: "/lmd-program" },
    { name: "Classic Program", path: "/classic-program" },
    { name: "Licence Pro", path: "/licence-pro" },
    { name: "Scolarity Service", path: "/contact-scolarity" },
  ]

  const postGradPrograms = [
    { name: "PhD Program", path: "/phd-program" },
    { name: "Vice Dean Of Postgraduate", path: "/vice-dean-of-postgraduate" },
  ]

  const researchLabs = [
    { name: "Research Laboratories", path: "/research-laboratories" },
    { name: "Projects", path: "/projects" },
    { name: "Publications", path: "/publications" },

  
  ]

  const isDepartmentPage = departments.some((dept) => pathname === dept.path)
  const isGraduationPage = graduationPrograms.some((prog) => pathname === prog.path)
  const isPostGradPage = postGradPrograms.some((prog) => pathname === prog.path)
  const isResearchPage = researchLabs.some((lab) => pathname === lab.path)

  return (
    <header className="border-b border-gray-200 py-2 bg-[#205375] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        {/* Top row with logo and search */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="transform transition-transform hover:scale-105 duration-300">
              <Image
                src="/logo-light.png"
                alt="Faculty of Sciences Logo"
                width={120}
                height={150}
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2">
            <button
              className="p-2 text-white lg:hidden transition-transform duration-300 hover:scale-110 active:scale-95"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <button
              className="p-2 text-white transition-transform duration-300 hover:scale-110 active:scale-95"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Navigation buttons row */}
        <nav className={`${mobileMenuOpen ? "flex" : "hidden"} lg:flex flex-wrap justify-center gap-2 pb-2`}>
          <Link
            href="/#news"
            className={`px-3 py-1.5 text-sm text-white hover:bg-white hover:text-[#205375] transition-all duration-300 
            transform hover:-translate-y-1 active:translate-y-0 ${pathname === "/actuality" ? "bg-white text-[#205375]" : ""}`}
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault()
                document.getElementById("news")?.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Actuality
          </Link>

          {/* Graduation Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setGraduationOpen(!graduationOpen)}
              className={`px-3 py-1.5 text-sm text-white hover:bg-white hover:text-[#205375] transition-all duration-300 
              transform hover:-translate-y-1 active:translate-y-0 flex items-center ${
                isGraduationPage ? "bg-white text-[#205375]" : ""
              }`}
            >
              Graduation
              {graduationOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
            </button>

            {/* Desktop Dropdown */}
            <div className="hidden lg:group-hover:block absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg z-50">
              <div className="py-1">
                {graduationPrograms.map((prog) => (
                  <Link
                    key={prog.path}
                    href={prog.path}
                    className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      pathname === prog.path ? "bg-gray-100 font-medium" : "text-gray-700"
                    }`}
                  >
                    {prog.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Dropdown */}
            {graduationOpen && (
              <div className="lg:hidden mt-1 bg-[#5a7a9f] rounded-md">
                <div className="py-1">
                  {graduationPrograms.map((prog) => (
                    <Link
                      key={prog.path}
                      href={prog.path}
                      className={`block px-4 py-2 text-sm text-white hover:bg-[#4a6a8f] transition-colors ${
                        pathname === prog.path ? "bg-[#4a6a8f] font-medium" : ""
                      }`}
                      onClick={() => {
                        setGraduationOpen(false)
                        setMobileMenuOpen(false)
                      }}
                    >
                      {prog.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Post-Graduation Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setPostGradOpen(!postGradOpen)}
              className={`px-3 py-1.5 text-sm text-white hover:bg-white hover:text-[#205375] transition-all duration-300 
              transform hover:-translate-y-1 active:translate-y-0 flex items-center ${
                isPostGradPage ? "bg-white text-[#205375]" : ""
              }`}
            >
              Post-Graduation
              {postGradOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
            </button>

            {/* Desktop Dropdown */}
            <div className="hidden lg:group-hover:block absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg z-50">
              <div className="py-1">
                {postGradPrograms.map((prog) => (
                  <Link
                    key={prog.path}
                    href={prog.path}
                    className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      pathname === prog.path ? "bg-gray-100 font-medium" : "text-gray-700"
                    }`}
                  >
                    {prog.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Dropdown */}
            {postGradOpen && (
              <div className="lg:hidden mt-1 bg-[#5a7a9f] rounded-md">
                <div className="py-1">
                  {postGradPrograms.map((prog) => (
                    <Link
                      key={prog.path}
                      href={prog.path}
                      className={`block px-4 py-2 text-sm text-white hover:bg-[#4a6a8f] transition-colors ${
                        pathname === prog.path ? "bg-[#4a6a8f] font-medium" : ""
                      }`}
                      onClick={() => {
                        setPostGradOpen(false)
                        setMobileMenuOpen(false)
                      }}
                    >
                      {prog.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Departments Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setDepartmentsOpen(!departmentsOpen)}
              className={`px-3 py-1.5 text-sm text-white hover:bg-white hover:text-[#205375] transition-all duration-300 
              transform hover:-translate-y-1 active:translate-y-0 flex items-center ${
                isDepartmentPage ? "bg-white text-[#205375]" : ""
              }`}
            >
              Departements
              {departmentsOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
            </button>

            {/* Desktop Dropdown */}
            <div className="hidden lg:group-hover:block absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg z-50">
              <div className="py-1">
                {departments.map((dept) => (
                  <Link
                    key={dept.path}
                    href={dept.path}
                    className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      pathname === dept.path ? "bg-gray-100 font-medium" : "text-gray-700"
                    }`}
                  >
                    {dept.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Dropdown */}
            {departmentsOpen && (
              <div className="lg:hidden mt-1 bg-[#5a7a9f] rounded-md">
                <div className="py-1">
                  {departments.map((dept) => (
                    <Link
                      key={dept.path}
                      href={dept.path}
                      className={`block px-4 py-2 text-sm text-white hover:bg-[#4a6a8f] transition-colors ${
                        pathname === dept.path ? "bg-[#4a6a8f] font-medium" : ""
                      }`}
                      onClick={() => {
                        setDepartmentsOpen(false)
                        setMobileMenuOpen(false)
                      }}
                    >
                      {dept.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/programs"
            className={`px-3 py-1.5 text-sm text-white hover:bg-white hover:text-[#205375] transition-all duration-300 
            transform hover:-translate-y-1 active:translate-y-0 ${
              pathname === "/programs" ||
              pathname.includes("/lmd-program") ||
              pathname.includes("/classic-program") ||
              pathname.includes("/licence-pro")
                ? "bg-white text-[#205375]"
                : ""
            }`}
          >
            Program
          </Link>

          {/* Research Laboratories Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setResearchOpen(!researchOpen)}
              className={`px-3 py-1.5 text-sm text-white hover:bg-white hover:text-[#205375] transition-all duration-300 
              transform hover:-translate-y-1 active:translate-y-0 flex items-center ${
                isResearchPage ? "bg-white text-[#205375]" : ""
              }`}
            >
              Research laboratories
              {researchOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
            </button>

            {/* Desktop Dropdown */}
            <div className="hidden lg:group-hover:block absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg z-50">
              <div className="py-1">
                {researchLabs.map((lab) => (
                  <Link
                    key={lab.path}
                    href={lab.path}
                    className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      pathname === lab.path ? "bg-gray-100 font-medium" : "text-gray-700"
                    }`}
                  >
                    {lab.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Dropdown */}
            {researchOpen && (
              <div className="lg:hidden mt-1 bg-[#5a7a9f] rounded-md">
                <div className="py-1">
                  {researchLabs.map((lab) => (
                    <Link
                      key={lab.path}
                      href={lab.path}
                      className={`block px-4 py-2 text-sm text-white hover:bg-[#4a6a8f] transition-colors ${
                        pathname === lab.path ? "bg-[#4a6a8f] font-medium" : ""
                      }`}
                      onClick={() => {
                        setResearchOpen(false)
                        setMobileMenuOpen(false)
                      }}
                    >
                      {lab.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/e-bibliotheque"
            className={`px-3 py-1.5 text-sm text-white hover:bg-white hover:text-[#205375] transition-all duration-300 
            transform hover:-translate-y-1 active:translate-y-0 ${pathname === "/e-bibliotheque" ? "bg-white text-[#205375]" : ""}`}
          >
            E-bibliotheque
          </Link>
          <Link
            href="/contact"
            className="px-3 py-1.5 text-sm border border-white text-white hover:bg-white hover:text-[#205375] transition-all 
            duration-300 transform hover:-translate-y-1 active:translate-y-0 hover:shadow-md"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
