import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function AgronomyDepartment() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero section with GIF background */}
        <div className="relative h-[300px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full">
              <Image
                src="/agronomy-bg.gif"
                alt="Agronomy background"
                fill
                className="object-cover opacity-80"
                priority
              />
            </div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center">
              <h1 className="text-7xl font-serif text-white mb-4 text-center">Agronomy Department</h1>
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
                  The Department of Agronomy at M'hamed Bougara University of Boumerdes (UMBB) is dedicated to advancing
                  agricultural sciences through comprehensive education and research. Led by Head of Department OULD
                  MOHAMED Ayoub, the department offers programs that integrate theoretical knowledge with practical
                  applications, preparing students for careers in sustainable agriculture and related fields.
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
                        <h3 className="text-lg font-medium">Sustainable Agriculture</h3>
                        <p className="text-sm">
                          Developing environmentally friendly farming practices that maintain soil health and
                          biodiversity while ensuring food security and economic viability.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Plant Breeding & Genetics</h3>
                        <p className="text-sm">
                          Improving crop varieties for enhanced yield, disease resistance, and adaptation to climate
                          change through traditional breeding and modern biotechnology.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Soil Science & Conservation</h3>
                        <p className="text-sm">
                          Studying soil properties, fertility management, and conservation techniques to prevent erosion
                          and degradation of agricultural lands.
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
                        <h3 className="text-lg font-medium">Licence in Agronomy</h3>
                        <p className="text-sm">
                          A three-year program covering fundamental concepts in plant science, soil management, crop
                          production, and agricultural economics.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Master's in Agricultural Sciences</h3>
                        <p className="text-sm">
                          Specialized two-year programs in Plant Protection, Sustainable Agriculture, and Agricultural
                          Biotechnology, with research opportunities and field experience.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Doctorate in Agricultural Sciences</h3>
                        <p className="text-sm">
                          Advanced research program focusing on innovative solutions to agricultural challenges in
                          Algeria and the Mediterranean region.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Facilities */}
                <ScrollReveal animation="slide-right" delay={400}>
                  <div className="bg-gradient-to-br from-dark/10 to-dark-darker/5 p-6 rounded-lg border-l-4 border-dark shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">Facilities</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">Experimental Farm</h3>
                        <p className="text-sm">
                          A 10-hectare research and teaching facility where students gain hands-on experience in crop
                          cultivation, irrigation systems, and sustainable farming practices.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Plant Biotechnology Laboratory</h3>
                        <p className="text-sm">
                          State-of-the-art facility for tissue culture, molecular breeding, and genetic analysis of crop
                          plants.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Soil Analysis Center</h3>
                        <p className="text-sm">
                          Equipped with modern instruments for physical, chemical, and biological analysis of soil
                          samples from agricultural lands.
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
                        href="#agronomy-club"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Agronomy Club
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

            {/* Sustainable Agriculture Projects */}
            <ScrollReveal animation="slide-up">
              <div className="bg-gradient-to-r from-primary-light/20 to-primary-dark/20 p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-serif mb-6 text-center text-dark">Sustainable Agriculture Projects</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-xl font-medium mb-2 text-primary-dark">Desert Agriculture</h3>
                    <p className="text-sm">
                      Developing innovative irrigation and cultivation techniques for arid regions to combat
                      desertification and increase food production.
                    </p>
                    <Link href="#" className="mt-3 inline-block text-primary-dark hover:underline">
                      Learn more →
                    </Link>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-xl font-medium mb-2 text-primary-dark">Organic Farming</h3>
                    <p className="text-sm">
                      Researching organic farming methods adapted to local conditions, focusing on natural pest control
                      and soil fertility management.
                    </p>
                    <Link href="#" className="mt-3 inline-block text-primary-dark hover:underline">
                      Learn more →
                    </Link>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-xl font-medium mb-2 text-primary-dark">Climate-Resilient Crops</h3>
                    <p className="text-sm">
                      Developing and testing crop varieties that can withstand drought, heat stress, and other climate
                      change impacts.
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
                  Interested in studying agronomy at the University of Boumerdes? Learn more about our programs and
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
