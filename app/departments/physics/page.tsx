import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function PhysicsDepartment() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero section with GIF background */}
        <div className="relative h-[300px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-black">
              <Image src="/physics-bg.gif" alt="Physics background" fill className="object-cover opacity-70" priority />
            </div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center">
              <h1 className="text-7xl font-serif text-white mb-4 text-center">Physics Department</h1>
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
                  The Department of Physics at the University of Boumerdes is dedicated to excellence in teaching and
                  research in the physical sciences. Our faculty members are engaged in cutting-edge research in various
                  fields of physics, including quantum mechanics, astrophysics, condensed matter physics, and
                  theoretical physics.
                </p>
              </div>
            </ScrollReveal>

            {/* Content Sections */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Message the scolarity */}
                <ScrollReveal animation="slide-right">
                  <div className="bg-gradient-to-br from-primary-light/10 to-primary-dark/10 p-6 rounded-lg border-l-4 border-primary-dark shadow-md">
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
                <ScrollReveal animation="slide-right" delay={200}>
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
                <ScrollReveal animation="slide-right" delay={400}>
                  <div className="bg-gradient-to-br from-dark/10 to-dark-darker/5 p-6 rounded-lg border-l-4 border-dark shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">Clubs & Events</h2>
                    <p className="mb-4">
                      Student-led activities, department-specific clubs, seminars, and past events.
                    </p>
                    <div className="space-y-2">
                      <Link
                        href="#physics-club"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Physics Club
                      </Link>
                      <Link
                        href="#astronomy-club"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Astronomy Club
                      </Link>
                      <Link
                        href="#upcoming-seminars"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Upcoming Seminars
                      </Link>
                      <Link
                        href="#past-events"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Past Events
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* About the Department */}
                <ScrollReveal animation="slide-left">
                  <div className="bg-gradient-to-br from-primary-dark/10 to-primary-light/5 p-6 rounded-lg border-l-4 border-primary-light shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">About the Department</h2>
                    <p className="mb-4">
                      The Department of Physics at the University of Boumerdes is dedicated to excellence in teaching
                      and research in the physical sciences. Our faculty members are engaged in cutting-edge research in
                      various fields of physics, including quantum mechanics, astrophysics, condensed matter physics,
                      and theoretical physics.
                    </p>
                    <p>
                      We offer undergraduate and graduate programs designed to provide students with a strong foundation
                      in physics and prepare them for careers in research, industry, and education. Our state-of-the-art
                      laboratories and facilities provide students with hands-on experience and opportunities to
                      participate in groundbreaking research.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Faculty Spotlight */}
                <ScrollReveal animation="slide-left" delay={200}>
                  <div className="bg-gradient-to-br from-secondary-dark/10 to-secondary-dark/5 p-6 rounded-lg border-l-4 border-secondary-dark shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">Faculty Spotlight</h2>
                    <div className="flex items-start space-x-4">
                      <div className="w-24 h-24 rounded-full bg-secondary-dark/20 overflow-hidden flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          alt="Faculty member"
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium">Dr. Ahmed Benali</h3>
                        <p className="text-sm text-gray-600 mb-2">Department Chair, Professor of Theoretical Physics</p>
                        <p className="text-sm">
                          Dr. Benali's research focuses on quantum field theory and its applications to particle
                          physics. He has published over 50 papers in international journals and is a recipient of the
                          National Medal for Scientific Achievement.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Research Highlights */}
                <ScrollReveal animation="slide-left" delay={400}>
                  <div className="bg-gradient-to-br from-dark/10 to-dark-darker/5 p-6 rounded-lg border-l-4 border-dark shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">Research Highlights</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">Quantum Computing</h3>
                        <p className="text-sm">
                          Our quantum computing lab is developing new algorithms for quantum information processing and
                          exploring quantum entanglement for secure communications.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Astrophysics</h3>
                        <p className="text-sm">
                          The astrophysics group is studying black holes, neutron stars, and cosmic microwave background
                          radiation to understand the fundamental laws of the universe.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Materials Science</h3>
                        <p className="text-sm">
                          Our materials science team is developing new superconducting materials and investigating their
                          properties for applications in energy storage and transmission.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Featured Research Projects */}
            <ScrollReveal animation="slide-up">
              <div className="bg-gradient-to-r from-primary-light/20 to-primary-dark/20 p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-serif mb-6 text-center text-dark">Featured Research Projects</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-xl font-medium mb-2 text-primary-dark">Quantum Entanglement</h3>
                    <p className="text-sm">
                      Investigating quantum entanglement for applications in quantum computing and secure
                      communications.
                    </p>
                    <Link href="#" className="mt-3 inline-block text-primary-dark hover:underline">
                      Learn more →
                    </Link>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-xl font-medium mb-2 text-primary-dark">Dark Matter Detection</h3>
                    <p className="text-sm">
                      Developing new methods for detecting dark matter particles and understanding their properties.
                    </p>
                    <Link href="#" className="mt-3 inline-block text-primary-dark hover:underline">
                      Learn more →
                    </Link>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-xl font-medium mb-2 text-primary-dark">Superconductivity</h3>
                    <p className="text-sm">
                      Exploring high-temperature superconductors for energy-efficient power transmission and storage.
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
                  Interested in studying physics at the University of Boumerdes? Learn more about our programs and
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
