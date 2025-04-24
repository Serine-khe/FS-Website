import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Programs() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96">
        <Image src="/campus.jpg" alt="University Campus" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="bg-white/80 p-4 flex items-center gap-4 max-w-md">
            <Image src="/logo.png" alt="Faculty of Sciences Logo" width={70} height={70} />
            <div className="border-l border-[#000000] pl-4">
              <div className="font-semibold text-sm sm:text-base">FACULTY OF SCIENCES</div>
              <div className="text-sm">UNIVERSITY OF BOUMERDES</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm px-4">
          Explore our academic programs and find your path to success
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-serif mb-12">
            Discover Diverse Educational
            <br />
            Opportunities at UMBB
          </h1>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-base md:text-lg">
              The University of UMBB offers a wide range of academic programs across various fields, designed to equip
              students with the knowledge and skills needed for success. Whether you're interested in science,
              technology, humanities, or professional studies, UMBB provides high- quality education through specialized
              courses and training programs. Explore our diverse formations and shape your future with us!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* LMD Program Card */}
            <div className="bg-[#4b6b3c] text-white p-6 rounded-lg">
              <h3 className="text-xl font-serif mb-4">LMD Program</h3>
              <p className="text-sm mb-6">
                The LMD system offers a flexible, internationally recognized education structure with Bachelor's,
                Master's, and Doctorate levels. It features a credit-based system and personalized study paths.
              </p>
              <Link href="/lmd-program" className="text-sm font-medium hover:underline">
                read more
              </Link>
            </div>

            {/* Classic Program Card */}
            <div className="bg-[#7a956b] text-white p-6 rounded-lg">
              <h3 className="text-xl font-serif mb-4">Classic Program</h3>
              <p className="text-sm mb-6">
                The Classic Engineering Program provides a structured five-year curriculum leading to a State Engineer
                Diploma. It focuses on specialized technical training with strong industry connections.
              </p>
              <Link href="/classic-program" className="text-sm font-medium hover:underline">
                read more
              </Link>
            </div>

            {/* Licence Pro Card */}
            <div className="bg-[#3d6e70] text-white p-6 rounded-lg">
              <h3 className="text-xl font-serif mb-4">Licence Pro</h3>
              <p className="text-sm mb-6">
                The Licence Professionnelle is a three-year program offering practical, career-focused education in Web
                Development and Infographics, with strong emphasis on internships and industry experience.
              </p>
              <Link href="/licence-pro" className="text-sm font-medium hover:underline">
                read more
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
