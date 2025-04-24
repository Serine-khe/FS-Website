import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ClassicProgram() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Gray Banner with Title */}
      <div className="bg-[#a3a59e] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif text-black">Classic (Engineering) Program</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-serif mb-6">Origins & Expansions</h2>
            <p className="text-base">
              The engineering education system is designed to train highly qualified professionals in scientific and
              technical fields. Inspired by the French system, it was adopted in Algeria to meet the needs of industrial
              and technological development. Unlike the LMD system, engineering education follows a long, specialized,
              and structured academic model based on yearly progression
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">The Classic System in Algeria (ING)</h2>
            <p className="mb-4">
              The engineering system in Algeria consists of a five-year program after the Baccalaureate, leading to the
              State Engineer Diploma (Diplôme d'Ingénieur d'État). This degree is recognized for its high level of
              specialization and its d'État). This degree is recognized for its high level of specialization and its
              focus on applied research and industry.
            </p>
          </div>

          <div className="mb-12 relative">
            <h2 className="text-2xl font-serif mb-4">Structure and Duration</h2>
            <p className="mb-4">The engineering curriculum is divided into two main phases:</p>

            <div className="absolute right-0 top-0">
              <Image src="/bac-plus-5.png" alt="BAC+5" width={150} height={100} />
            </div>

            <ol className="list-decimal pl-8 space-y-6 mb-4">
              <li>
                <strong>Preparatory Cycle (Common Core) – 2 years</strong>
                <ul className="list-none space-y-2 mt-2">
                  <li>- General training in fundamental sciences and technology.</li>
                  <li>
                    - Core subjects: Mathematics, Physics, Chemistry, Computer Science, Electronics, Mechanics, etc.
                  </li>
                  <li>
                    - Access to the engineering specialization cycle after passing the preparatory years and/or an
                    entrance exam.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Specialization Cycle – 3 years</strong>
                <ul className="list-none space-y-2 mt-2">
                  <li>- Advanced training in a specific engineering field.</li>
                  <li>- Acquisition of technical, scientific, and professional skills.</li>
                  <li>- Completion of a Final Year Project (PFE – Projet de Fin d'Études) in the last year.</li>
                </ul>
              </li>
            </ol>
            <p>
              At the end of the five years, students defend a thesis in front of a jury and obtain the State Engineer
              Diploma.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">Organization and Workload</h2>
            <p className="mb-4">
              Unlike the LMD system, the engineering system does not use ECTS credits. Instead, it is based on a yearly
              academic structure, meaning students must pass an entire year to advance to the next one.
            </p>
            <ul className="list-disc pl-8 space-y-2 mb-4">
              <li>
                <strong>Academic Year</strong>: Continuous cycle (no modular validation per semester).
              </li>
              <li>
                <strong>Assessments</strong>: Continuous assessments, semester exams, and laboratory work.
              </li>
              <li>
                <strong>Final Year Project (PFE)</strong> in the 5th year, with an internship in industry or research.
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">The Teaching Unit (UE)</h2>
            <p className="mb-4">Courses are organized into different units:</p>
            <ul className="list-disc pl-8 space-y-2 mb-4">
              <li>
                <strong>Fundamental Units (UEF)</strong> – Core scientific knowledge (Mathematics, Physics, Chemistry,
                Computer Science)
              </li>
              <li>
                <strong>Technical and Technological Units (UETT)</strong> – Engineering-specific subjects (Electricity,
                Mechanics, Thermodynamics, etc.)
              </li>
              <li>
                <strong>Specialization Units (UES)</strong> – Advanced coursework depending on the chosen field.
              </li>
              <li>
                <strong>Professional and Elective Units (UET)</strong> – Project management, communication, languages,
                and entrepreneurship.
              </li>
            </ul>
          </div>

          <div className="text-right mt-8">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-[#7a956b] text-white px-6 py-3 rounded hover:bg-[#4b6b3c] transition-colors"
            >
              download the ING guide from here
              <Download className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
