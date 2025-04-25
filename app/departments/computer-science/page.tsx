import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ComputerScienceDepartment() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero section with GIF background */}
        <div className="relative h-[300px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-[#0a1a3a]">
              <Image
                src="/computer-science-bg.gif"
                alt="Computer Science background"
                fill
                className="object-cover opacity-80"
                priority
              />
            </div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center">
              <h1 className="text-7xl font-serif text-white mb-4 text-center">Computer Science</h1>
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
                  The Computer Science Department at M'hamed Bougara University of Boumerdes (UMBB) offers Licence,
                  Professional Licence, and Engineering programs focused on software engineering, web development, and
                  artificial intelligence. The department collaborates with industry partners to align its curriculum
                  with market needs.
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
                        href="#coding-club"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        DevUp Club
                      </Link>
                      <Link
                        href="#ai-club"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        AI & Machine Learning Club
                      </Link>
                      <Link
                        href="#upcoming-seminars"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Upcoming Seminars
                      </Link>
                      <Link
                        href="#hackathons"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Hackathons & Competitions
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Programs Offered */}
                <ScrollReveal animation="slide-left">
                  <div className="bg-gradient-to-br from-primary-dark/10 to-primary-light/5 p-6 rounded-lg border-l-4 border-primary-light shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">Programs Offered</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">Licence in Computer Science</h3>
                        <p className="text-sm">
                          A three-year program covering fundamental concepts in programming, algorithms, data
                          structures, databases, and software engineering.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Professional Licence</h3>
                        <p className="text-sm">
                          Specialized three-year programs in Web Development, Mobile Applications, and Information
                          Security, with strong industry connections and internship opportunities.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Engineering Degree</h3>
                        <p className="text-sm">
                          A five-year program providing comprehensive training in software engineering, artificial
                          intelligence, and advanced computing systems.
                        </p>
                      </div>
                    </div>
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
                        <h3 className="text-xl font-medium">Dr. YAHIATENE Youcef</h3>
                        <p className="text-sm text-gray-600 mb-2">Department Chair, Professor of Computer Science</p>
                        <p className="text-sm">
                          Dr. Yahiatene specializes in artificial intelligence and machine learning. His current research
                          focuses on developing new algorithms for natural language processing and computer vision
                          applications. He has published extensively in top-tier conferences and journals.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Research & Innovation */}
                <ScrollReveal animation="slide-left" delay={400}>
                  <div className="bg-gradient-to-br from-dark/10 to-dark-darker/5 p-6 rounded-lg border-l-4 border-dark shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">Research & Innovation</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">LIMOSE Lab</h3>
                        <p className="text-sm">
                          Developing cutting-edge AI solutions for healthcare, agriculture, and smart cities, with a
                          focus on machine learning and deep neural networks.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Cybersecurity Research Group</h3>
                        <p className="text-sm">
                          Investigating advanced security threats and developing robust protection mechanisms for
                          critical infrastructure and digital systems.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Software Engineering & Quality Assurance</h3>
                        <p className="text-sm">
                          Researching methodologies for developing high-quality, reliable software systems through
                          innovative testing and verification techniques.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Featured Projects */}
            <ScrollReveal animation="slide-up">
              <div className="bg-gradient-to-r from-primary-light/20 to-primary-dark/20 p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-serif mb-6 text-center text-dark">Featured Projects</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-xl font-medium mb-2 text-primary-dark">Smart Campus Initiative</h3>
                    <p className="text-sm">
                      Developing IoT solutions to create a smart, connected campus with improved energy efficiency and
                      resource management.
                    </p>
                    <Link href="#" className="mt-3 inline-block text-primary-dark hover:underline">
                      Learn more →
                    </Link>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-xl font-medium mb-2 text-primary-dark">Natural Language Processing</h3>
                    <p className="text-sm">
                      Creating advanced NLP models for Arabic language processing and sentiment analysis in social
                      media.
                    </p>
                    <Link href="#" className="mt-3 inline-block text-primary-dark hover:underline">
                      Learn more →
                    </Link>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-xl font-medium mb-2 text-primary-dark">Blockchain Applications</h3>
                    <p className="text-sm">
                      Exploring blockchain technology for secure, transparent record-keeping in educational credentials
                      and research data.
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
                  Interested in studying computer science at the University of Boumerdes? Learn more about our programs
                  and application process.
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
