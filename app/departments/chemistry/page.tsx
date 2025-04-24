import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ChemistryDepartment() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero section with GIF background */}
        <div className="relative h-[300px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-[#0a8599]">
              <Image
                src="/chemistry-bg.gif"
                alt="Chemistry background"
                fill
                className="object-cover opacity-80"
                priority
              />
            </div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center">
              <h1 className="text-7xl font-serif text-white mb-4 text-center">Chemistry Department</h1>
              <div className="w-24 h-1 bg-primary-light"></div>
            </div>
          </div>
        </div>

        {/* Content with solid background */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            {/* Department Description */}
            <ScrollReveal animation="fade-in">
              <div className="max-w-3xl mx-auto mb-12 text-center">
                <p className="text-lg">
                  The Department of Chemistry at M'hamed Bougara University of Boumerdes (UMBB) offers undergraduate and
                  postgraduate programs covering various disciplines of chemistry, including organic, inorganic,
                  analytical, and physical chemistry. The department focuses on both theoretical knowledge and practical
                  applications, equipping students with skills for academic research and industry careers.
                </p>
              </div>
            </ScrollReveal>

            {/* Content Sections */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Left Column - Research and Programs */}
              <div className="space-y-8">
                {/* Research Areas */}
                <ScrollReveal animation="slide-right">
                  <div className="bg-gradient-to-br from-primary-light/10 to-primary-dark/10 p-6 rounded-lg border-l-4 border-primary-dark shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">Research Areas</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">Organic Chemistry</h3>
                        <p className="text-sm">
                          Synthesis and characterization of novel organic compounds with potential applications in
                          pharmaceuticals, materials science, and agrochemicals.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Analytical Chemistry</h3>
                        <p className="text-sm">
                          Development of advanced analytical methods for environmental monitoring, food safety, and
                          quality control in industrial processes.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Physical Chemistry</h3>
                        <p className="text-sm">
                          Investigation of chemical kinetics, thermodynamics, and quantum chemistry to understand
                          fundamental processes at the molecular level.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Inorganic Chemistry</h3>
                        <p className="text-sm">
                          Study of coordination compounds, catalysts, and materials with applications in energy storage,
                          conversion, and environmental remediation.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Programs Offered */}
                <ScrollReveal animation="slide-right" delay={200}>
                  <div className="bg-gradient-to-br from-secondary-dark/10 to-secondary-dark/5 p-6 rounded-lg border-l-4 border-secondary-dark shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">Programs Offered</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">Licence in Chemistry</h3>
                        <p className="text-sm">
                          A three-year program providing a solid foundation in all major branches of chemistry, with
                          laboratory training and research projects.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Master's in Chemistry</h3>
                        <p className="text-sm">
                          Specialized two-year programs in Organic Chemistry, Analytical Chemistry, Physical Chemistry,
                          and Industrial Chemistry, with advanced research components.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Doctorate in Chemical Sciences</h3>
                        <p className="text-sm">
                          Advanced research program focusing on innovative solutions to chemical challenges in various
                          sectors, including energy, environment, and materials.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Laboratories */}
                <ScrollReveal animation="slide-right" delay={400}>
                  <div className="bg-gradient-to-br from-dark/10 to-dark-darker/5 p-6 rounded-lg border-l-4 border-dark shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">Laboratories</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">Organic Synthesis Laboratory</h3>
                        <p className="text-sm">
                          Equipped with modern instruments for the synthesis and characterization of organic compounds,
                          including spectroscopic and chromatographic techniques.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Analytical Chemistry Laboratory</h3>
                        <p className="text-sm">
                          Features advanced analytical instruments such as HPLC, GC-MS, ICP-MS, and spectrophotometers
                          for qualitative and quantitative analysis.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Physical Chemistry Laboratory</h3>
                        <p className="text-sm">
                          Dedicated to experiments in thermodynamics, kinetics, electrochemistry, and surface chemistry,
                          with computational facilities for molecular modeling.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column - Information Boxes */}
              <div className="space-y-8">
                {/* Message the scolarity */}
                <ScrollReveal animation="slide-left">
                  <div className="bg-gradient-to-br from-primary-dark/10 to-primary-light/5 p-6 rounded-lg border-l-4 border-primary-light shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">Message the Scolarity</h2>
                    <p className="mb-4">Form to contact the student office.</p>
                    <Link
                      href="/contact-scolarity"
                      className="inline-block bg-primary-dark hover:bg-primary-light text-white px-4 py-2 rounded transition-colors"
                    >
                      Contact Form
                    </Link>
                  </div>
                </ScrollReveal>

                {/* Majors, Fields & Details */}
                <ScrollReveal animation="slide-left" delay={200}>
                  <div className="bg-gradient-to-br from-secondary-dark/10 to-secondary-dark/5 p-6 rounded-lg border-l-4 border-secondary-dark shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">Majors, Fields & Details</h2>
                    <p className="mb-4">Info about fields offered, schedules, exam calendars, grade reports.</p>
                    <div className="space-y-2">
                      <Link
                        href="#fields"
                        className="block bg-secondary-dark hover:bg-secondary-dark/80 text-white px-4 py-2 rounded transition-colors"
                      >
                        Fields of Study
                      </Link>
                      <Link
                        href="#schedules"
                        className="block bg-secondary-dark hover:bg-secondary-dark/80 text-white px-4 py-2 rounded transition-colors"
                      >
                        Class Schedules
                      </Link>
                      <Link
                        href="#exams"
                        className="block bg-secondary-dark hover:bg-secondary-dark/80 text-white px-4 py-2 rounded transition-colors"
                      >
                        Exam Calendars
                      </Link>
                      <Link
                        href="#grades"
                        className="block bg-secondary-dark hover:bg-secondary-dark/80 text-white px-4 py-2 rounded transition-colors"
                      >
                        Grade Reports
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Clubs & Events */}
                <ScrollReveal animation="slide-left" delay={400}>
                  <div className="bg-gradient-to-br from-dark/10 to-dark-darker/5 p-6 rounded-lg border-l-4 border-dark shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">Clubs & Events</h2>
                    <p className="mb-4">
                      Student-led activities, department-specific clubs, seminars, and past events.
                    </p>
                    <div className="space-y-2">
                      <Link
                        href="#chemistry-club"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Chemistry Club
                      </Link>
                      <Link
                        href="#green-chemistry"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Green Chemistry Initiative
                      </Link>
                      <Link
                        href="#upcoming-seminars"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Upcoming Seminars
                      </Link>
                      <Link
                        href="#lab-workshops"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Laboratory Workshops
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Industry Partnerships */}
            <ScrollReveal animation="slide-up">
              <div className="bg-gradient-to-r from-primary-light/20 to-primary-dark/20 p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-serif mb-6 text-center text-dark">Industry Partnerships</h2>
                <p className="text-center mb-8 max-w-3xl mx-auto">
                  The Chemistry Department maintains strong connections with industrial partners, providing students
                  with internship opportunities and collaborative research projects.
                </p>
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="bg-white p-4 rounded-md shadow text-center">
                    <h3 className="text-lg font-medium mb-2 text-primary-dark">Sonatrach</h3>
                    <p className="text-sm">National Oil Company</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow text-center">
                    <h3 className="text-lg font-medium mb-2 text-primary-dark">Saidal</h3>
                    <p className="text-sm">Pharmaceutical Industry</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow text-center">
                    <h3 className="text-lg font-medium mb-2 text-primary-dark">ENAP</h3>
                    <p className="text-sm">National Company for Paints</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow text-center">
                    <h3 className="text-lg font-medium mb-2 text-primary-dark">Lafarge Holcim</h3>
                    <p className="text-sm">Cement Industry</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow text-center">
                    <h3 className="text-lg font-medium mb-2 text-primary-dark">EPA</h3>
                    <p className="text-sm">Environmental Protection Agencies</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Call to Action */}
            <ScrollReveal animation="fade-in">
              <div className="text-center">
                <h2 className="text-3xl font-serif mb-4">Join Our Department</h2>
                <p className="max-w-2xl mx-auto mb-6">
                  Interested in studying chemistry at the University of Boumerdes? Learn more about our programs and
                  application process.
                </p>
                <div className="flex justify-center gap-4">
                  <Link
                    href="/programs"
                    className="bg-primary-dark hover:bg-primary-light text-white px-6 py-3 rounded-md transition-colors"
                  >
                    Explore Programs
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-secondary-dark hover:bg-secondary-dark/80 text-white px-6 py-3 rounded-md transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
