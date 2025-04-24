import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HistoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-end mb-8">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Faculty of Sciences Logo" width={60} height={60} />
              <div className="ml-2">
                <div className="text-sm font-medium">FACULTY OF SCIENCES</div>
                <div className="text-sm">UNIVERSITY OF BOUMERDES</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-[#205375] mb-8">The history of FS</h1>

              <div className="mb-8">
                <h2 className="text-xl font-medium mb-4">Faculty History – Introduction</h2>
                <p className="text-base">
                  The Faculty of Science at the University of M'Hamed Bougara Boumerdès (UMBB) has a rich history of
                  academic excellence and scientific research. Since its foundation, the faculty has played a crucial
                  role in advancing education in mathematics, physics, chemistry, biology, computer science, agronomy,
                  and sports sciences. Evolving from specialized institutes into a leading academic institution, the
                  faculty continues to shape the future of science through cutting-edge research, innovation, and
                  high-quality education.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="border-l border-gray-200 pl-12">
              <div className="mb-12">
                <h2 className="text-2xl font-serif text-[#205375] mb-4">Foundation & Evolution:</h2>
                <p className="text-base">
                  Explain the origins of the faculty, starting from the African Center for Hydrocarbons and Textiles
                  (CAHT) in 1964, its transformation into the National Institute of Hydrocarbons and Chemistry (INHC) in
                  1973, and finally, its establishment as part of UMBB in 1998.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-serif text-[#205375] mb-4">Milestones & Achievements:</h2>
                <p className="text-base">
                  Highlight key developments such as new research programs, collaborations, and modern facilities that
                  contributed to the faculty's growth.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-serif text-[#205375] mb-4">Mission & Vision</h2>
                <p className="text-base">
                  Briefly describe its commitment to scientific research, innovation, and education in various
                  scientific fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
