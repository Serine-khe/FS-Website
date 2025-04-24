import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function BiologyDepartment() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero section with GIF background */}
        <div className="relative h-[300px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-black">
              <Image src="/biology-bg.gif" alt="Biology background" fill className="object-cover opacity-80" priority />
            </div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center">
              <h1 className="text-7xl font-serif text-white mb-4 text-center">Biology Department</h1>
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
                  The Department of Biology at M'hamed Bougara University of Boumerdes (UMBB) is part of the Faculty of
                  Science, offering a wide range of programs in fields such as molecular biology, ecology, microbiology,
                  and biotechnology. The department is committed to integrating theoretical knowledge with hands-on
                  laboratory experience, providing students with the skills needed to excel in academic and professional
                  careers.
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
                        <h3 className="text-lg font-medium">Molecular Biology & Genetics</h3>
                        <p className="text-sm">
                          Investigation of genetic mechanisms, gene expression, and molecular processes in various
                          organisms, with applications in medicine, agriculture, and biotechnology.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Ecology & Biodiversity</h3>
                        <p className="text-sm">
                          Study of ecosystems, species interactions, and conservation strategies, with a focus on
                          Mediterranean and North African biodiversity.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Microbiology & Immunology</h3>
                        <p className="text-sm">
                          Research on microorganisms, host-pathogen interactions, and immune responses, with
                          implications for infectious disease control and public health.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Biotechnology & Bioinformatics</h3>
                        <p className="text-sm">
                          Development of biological technologies and computational methods for analyzing biological
                          data, with applications in medicine, agriculture, and environmental management.
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
                        <h3 className="text-lg font-medium">Licence in Biological Sciences</h3>
                        <p className="text-sm">
                          A three-year program providing a comprehensive foundation in biology, with options to
                          specialize in areas such as molecular biology, ecology, or microbiology.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Master's in Biological Sciences</h3>
                        <p className="text-sm">
                          Specialized two-year programs in Molecular Biology & Biotechnology, Ecology & Environmental
                          Biology, and Microbiology & Health Sciences.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Doctorate in Biological Sciences</h3>
                        <p className="text-sm">
                          Advanced research program focusing on innovative approaches to biological challenges, with
                          opportunities for international collaboration.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Laboratories */}
                <ScrollReveal animation="slide-right" delay={400}>
                  <div className="bg-gradient-to-br from-dark/10 to-dark-darker/5 p-6 rounded-lg border-l-4 border-dark shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">Laboratories & Facilities</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">Molecular Biology Laboratory</h3>
                        <p className="text-sm">
                          Equipped with PCR machines, DNA sequencers, and cell culture facilities for genetic and
                          molecular research.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Microbiology Laboratory</h3>
                        <p className="text-sm">
                          Features sterile workstations, incubators, and microscopy equipment for studying
                          microorganisms and their interactions.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Ecology Field Station</h3>
                        <p className="text-sm">
                          A dedicated facility for ecological research, with equipment for field sampling, environmental
                          monitoring, and biodiversity assessment.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Bioinformatics Center</h3>
                        <p className="text-sm">
                          Computational resources for analyzing biological data, including high-performance computing
                          clusters and specialized software for genomics and proteomics.
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
                        href="#biology-club"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Biology Club
                      </Link>
                      <Link
                        href="#ecology-club"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Ecology & Conservation Club
                      </Link>
                      <Link
                        href="#upcoming-seminars"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Upcoming Seminars
                      </Link>
                      <Link
                        href="#field-trips"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Field Trips & Workshops
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Current Research Projects */}
            <ScrollReveal animation="slide-up">
              <div className="bg-gradient-to-r from-primary-light/20 to-primary-dark/20 p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-serif mb-6 text-center text-dark">Current Research Projects</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-xl font-medium mb-2 text-primary-dark">Biodiversity Assessment</h3>
                    <p className="text-sm">
                      Comprehensive survey of plant and animal species in Algeria's coastal regions, with implications
                      for conservation and sustainable development.
                    </p>
                    <Link href="#" className="mt-3 inline-block text-primary-dark hover:underline">
                      Learn more →
                    </Link>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-xl font-medium mb-2 text-primary-dark">Microbial Diversity</h3>
                    <p className="text-sm">
                      Investigation of microorganisms in extreme environments, with potential applications in
                      biotechnology and bioremediation.
                    </p>
                    <Link href="#" className="mt-3 inline-block text-primary-dark hover:underline">
                      Learn more →
                    </Link>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-xl font-medium mb-2 text-primary-dark">Genomic Analysis</h3>
                    <p className="text-sm">
                      Molecular characterization of endemic plant and animal species, contributing to understanding of
                      evolutionary processes and conservation strategies.
                    </p>
                    <Link href="#" className="mt-3 inline-block text-primary-dark hover:underline">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Call to Action */}
            <ScrollReveal animation="fade-in">
              <div className="text-center">
                <h2 className="text-3xl font-serif mb-4">Join Our Department</h2>
                <p className="max-w-2xl mx-auto mb-6">
                  Interested in studying biology at the University of Boumerdes? Learn more about our programs and
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
