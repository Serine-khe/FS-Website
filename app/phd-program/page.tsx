import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PhDProgram() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Gray Banner with Title */}
      <div className="bg-[#a3a59e] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif text-black">PhD Program</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-serif mb-6">Doctoral Studies at UMBB</h2>
            <p className="text-base mb-6">
              The Doctoral program at the University of M'Hamed Bougara Boumerdès (UMBB) represents the highest level of
              academic achievement within the LMD system. It is designed to train highly qualified researchers capable
              of conducting original research and contributing to the advancement of knowledge in their respective
              fields.
            </p>

            <ul className="list-disc pl-8 space-y-3 mb-8">
              <li>
                The Doctoral program follows the completion of a Master's degree and typically spans three years (6
                semesters)
              </li>
              <li>
                Students work under the supervision of a qualified professor to develop and complete an original
                research project
              </li>
              <li>The program culminates in the defense of a doctoral thesis before a jury of experts</li>
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
                <div className="w-24 h-24 rounded-full bg-[#4b6b3c] text-white flex items-center justify-center text-2xl font-bold">
                  +3
                </div>
                <div className="mt-2 text-center font-bold">Doctorat</div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">Admission Requirements</h2>
            <ul className="list-none space-y-3">
              <li>
                ▸ Candidates must hold a Master's degree or equivalent qualification with excellent academic standing.
              </li>
              <li>
                ▸ Admission is highly competitive and based on:
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Academic record and grades</li>
                  <li>Research proposal quality</li>
                  <li>Availability of qualified supervisors</li>
                  <li>Results of the national doctoral competition</li>
                </ul>
              </li>
              <li>
                ▸ Candidates must demonstrate proficiency in research methodologies and languages relevant to their
                field.
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">Program Structure</h2>
            <ul className="list-none space-y-3">
              <li>▸ The program is primarily research-based, with limited coursework.</li>
              <li>
                ▸ Key components include:
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Advanced seminars in specialized topics</li>
                  <li>Research methodology workshops</li>
                  <li>Regular progress presentations</li>
                  <li>Publication of research findings in peer-reviewed journals</li>
                  <li>Participation in national and international conferences</li>
                </ul>
              </li>
              <li>▸ Each doctoral student is assigned a thesis supervisor and may also have a co-supervisor.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">Research Areas</h2>
            <p className="mb-4">The Faculty of Sciences offers doctoral programs in various disciplines, including:</p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-[#f5f5f5] p-4 rounded">
                <h3 className="font-bold mb-2">Physics</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Theoretical Physics</li>
                  <li>Materials Science</li>
                  <li>Renewable Energy</li>
                  <li>Quantum Physics</li>
                </ul>
              </div>
              <div className="bg-[#f5f5f5] p-4 rounded">
                <h3 className="font-bold mb-2">Chemistry</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Organic Chemistry</li>
                  <li>Analytical Chemistry</li>
                  <li>Environmental Chemistry</li>
                  <li>Catalysis</li>
                </ul>
              </div>
              <div className="bg-[#f5f5f5] p-4 rounded">
                <h3 className="font-bold mb-2">Computer Science</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Artificial Intelligence</li>
                  <li>Computer Networks</li>
                  <li>Information Security</li>
                  <li>Software Engineering</li>
                </ul>
              </div>
              <div className="bg-[#f5f5f5] p-4 rounded">
                <h3 className="font-bold mb-2">Mathematics</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Applied Mathematics</li>
                  <li>Probability and Statistics</li>
                  <li>Numerical Analysis</li>
                  <li>Mathematical Modeling</li>
                </ul>
              </div>
              <div className="bg-[#f5f5f5] p-4 rounded">
                <h3 className="font-bold mb-2">Biology</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Molecular Biology</li>
                  <li>Microbiology</li>
                  <li>Ecology</li>
                  <li>Biotechnology</li>
                </ul>
              </div>
              <div className="bg-[#f5f5f5] p-4 rounded">
                <h3 className="font-bold mb-2">Agronomy</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Sustainable Agriculture</li>
                  <li>Plant Genetics</li>
                  <li>Soil Science</li>
                  <li>Agricultural Biotechnology</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">International Collaboration</h2>
            <p className="mb-4">The doctoral program at UMBB emphasizes international collaboration through:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Joint supervision arrangements with foreign universities (cotutelle)</li>
              <li>Research stays abroad</li>
              <li>Participation in international research networks</li>
              <li>Hosting of visiting professors and researchers</li>
            </ul>
          </div>

          <div className="text-right mt-8">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-[#3d6e70] text-white px-6 py-3 rounded hover:bg-[#4b6b3c] transition-colors"
            >
              Download the PhD guide
              <Download className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
