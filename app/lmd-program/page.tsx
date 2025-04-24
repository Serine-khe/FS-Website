import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function LMDProgram() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Gray Banner with Title */}
      <div className="bg-[#a3a59e] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif text-black">LMD Program</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-serif mb-6">What's LMD ?</h2>
            <p className="text-base mb-6">
              The LMD system was implemented in Algeria under Executive Decree No. 04-371 of November 21, 2004. It aims,
              through an innovative framework, to integrate the university into economic development and to harmonize
              the higher education system with the rest of the world.
            </p>

            <ul className="list-disc pl-8 space-y-3 mb-8">
              <li>
                The structure of the LMD (Bachelor–Master–Doctorate) system is based on three academic levels:
                Bachelor's – Master's – Doctorate
              </li>
              <li>Programs are organized into semesters and capitalizable teaching units (UEs)</li>
              <li>The implementation of a credit-based system</li>
            </ul>

            <div className="flex justify-center items-center gap-8 my-12">
              <div className="flex flex-col items-center">
                <Image src="/bac-icon.png" alt="BAC" width={80} height={80} />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#e8e8e8] flex items-center justify-center text-2xl font-bold">
                  +3
                </div>
                <div className="mt-2 text-center">License</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#e8e8e8] flex items-center justify-center text-2xl font-bold">
                  +2
                </div>
                <div className="mt-2 text-center">Master</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#e8e8e8] flex items-center justify-center text-2xl font-bold">
                  +3
                </div>
                <div className="mt-2 text-center">Doctorat</div>
              </div>
            </div>
          </div>

          {/* Rest of the content remains the same */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">The Semester</h2>
            <ul className="list-none space-y-3">
              <li>
                ▸ The semester is the periodic duration of training units: the basic unit of education is no longer the
                academic year but the semester.
              </li>
              <li>
                ▸ The three training cycles are measured in semesters:
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Bachelor's degree: 6 semesters</li>
                  <li>Master's degree: 4 semesters</li>
                  <li>Doctorate: 6 semesters</li>
                </ul>
              </li>
              <li>
                ▸ Each semester consists of a defined number of weeks: 1 semester = 15 weeks (including courses and
                evaluations).
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">Semester and Credits</h2>
            <ul className="list-none space-y-3">
              <li>▸ The semester corresponds to a set number of hours measured in credits.</li>
              <li>▸ The total of all course units (UE) in a semester equals 30 credits.</li>
              <li>
                ▸ Thus:
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>1st cycle = Bachelor's degree corresponds to 180 credits</li>
                  <li>2nd cycle = Master's degree corresponds to 120 credits</li>
                  <li>3rd cycle = Doctorate preparation</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">The Teaching Unit (UE)</h2>
            <ul className="list-none space-y-3">
              <li>
                ▸ The fundamental unit of a training program = an autonomous and coherent subdivision within a study
                curriculum.
              </li>
              <li>
                ▸ Teaching Methods:
                <br />
                Lectures, tutorials, practical work, fieldwork, research, etc., or a combination of these different
                forms.
              </li>
              <li>▸ Its value is defined in credits.</li>
              <li>▸ It is coded and numbered.</li>
              <li>
                ▸ Validation and Promotion Criteria:
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Achieve the required average for the UE.</li>
                  <li>Accumulate all required UEs to obtain a diploma or degree.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">The Credit System</h2>
            <ul className="list-none space-y-3">
              <li>
                ▸ A unit that determines the value of a Teaching Unit (UE) and the total workload (CTT) required to
                achieve its objectives.
              </li>
              <li>
                ▸ 1 credit = 20 hours of total student workload (CTT), including lectures, tutorials, practical work,
                research, internships, and personal study.
              </li>
              <li>
                ▸ Each semester consists of 30 credits, equivalent to:
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>600 hours of total student workload (CTT).</li>
                  <li>A maximum of 360 hours of in-person teaching per semester (exceptionally up to 420 hours).</li>
                  <li>In-person teaching is limited to 30 hours per week (exceptionally up to 35 hours).</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">What is a Study Path?</h2>
            <ul className="list-none space-y-3">
              <li>▸ It is the route chosen by the student to achieve their educational goals.</li>
              <li>
                ▸ A combination of mandatory, elective, and free-choice Teaching Units (UE) allows the student to create
                a personalized learning path.
              </li>
            </ul>
          </div>

          <div className="text-right mt-8">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-[#4b6b3c] text-white px-6 py-3 rounded hover:bg-[#3d6e70] transition-colors"
            >
              download the LMD guide from here
              <Download className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
