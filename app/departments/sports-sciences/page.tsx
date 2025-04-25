import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function SportsSciencesDepartment() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero section with GIF background */}
        <div className="relative h-[300px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-[#1a3a5f]">
              {/* Using a solid color background instead of GIF as requested to use fewer images */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a5f] to-[#3d6e70]"></div>
            </div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center">
              <h1 className="text-7xl font-serif text-white mb-4 text-center">Sports Sciences</h1>
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
                  The Department of Sports Sciences at M'hamed Bougara University of Boumerdes (UMBB) is dedicated to
                  the study of human movement, physical activity, and sport performance. Our programs combine scientific
                  knowledge with practical applications, preparing students for careers in sports coaching, physical
                  education, sports management, and health-related fields.
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
                        href="#sports-club"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Sports Club
                      </Link>
                      <Link
                        href="#fitness-club"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Fitness & Wellness Club
                      </Link>
                      <Link
                        href="#upcoming-tournaments"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Upcoming Tournaments
                      </Link>
                      <Link
                        href="#workshops"
                        className="block bg-dark hover:bg-dark-darker text-white px-4 py-2 rounded transition-colors"
                      >
                        Workshops & Training
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
                      The Department of Sports Sciences at UMBB was established in 2010 to meet the growing demand for
                      professionals in sports and physical education. Our department offers comprehensive programs that
                      combine theoretical knowledge with practical training in state-of-the-art facilities.
                    </p>
                    <p>
                      Our mission is to advance knowledge in sports sciences through research and education, promote
                      physical activity and healthy lifestyles, and prepare students for successful careers in various
                      sports-related fields. We emphasize both the scientific aspects of human movement and the
                      practical applications in sports coaching, physical education, and health promotion.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Faculty Spotlight */}
                <ScrollReveal animation="slide-left" delay={200}>
                  <div className="bg-gradient-to-br from-secondary-dark/10 to-secondary-dark/5 p-6 rounded-lg border-l-4 border-secondary-dark shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">Faculty Spotlight</h2>
                    <div className="flex items-start space-x-4">
                      <div className="w-24 h-24 rounded-full bg-secondary-dark/20 overflow-hidden flex-shrink-0">
                        <div className="w-full h-full bg-secondary-dark/40 flex items-center justify-center text-white text-2xl font-bold">
                          FM
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium">Dr. Farid Meziane</h3>
                        <p className="text-sm text-gray-600 mb-2">Department Chair, Professor of Sports Physiology</p>
                        <p className="text-sm">
                          Dr. Meziane specializes in exercise physiology and sports performance. His research focuses on
                          the physiological adaptations to high-intensity training and their implications for athletic
                          performance and health. He has published extensively in international journals and has served
                          as a consultant for national sports teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Research Areas */}
                <ScrollReveal animation="slide-left" delay={400}>
                  <div className="bg-gradient-to-br from-dark/10 to-dark-darker/5 p-6 rounded-lg border-l-4 border-dark shadow-md">
                    <h2 className="text-2xl font-serif mb-4 text-dark">Research Areas</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">Exercise Physiology</h3>
                        <p className="text-sm">
                          Investigating the physiological responses and adaptations to exercise, with applications in
                          athletic performance, health, and rehabilitation.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Sports Biomechanics</h3>
                        <p className="text-sm">
                          Analyzing human movement patterns in sports to optimize performance, prevent injuries, and
                          enhance technique through biomechanical principles.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Sports Psychology</h3>
                        <p className="text-sm">
                          Studying the psychological factors that influence sports performance, including motivation,
                          stress management, team dynamics, and mental training techniques.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Physical Education Pedagogy</h3>
                        <p className="text-sm">
                          Developing effective teaching methods and curricula for physical education at various
                          educational levels, with emphasis on inclusive and student-centered approaches.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Programs Offered */}
            <ScrollReveal animation="slide-up">
              <div className="bg-gradient-to-r from-primary-light/20 to-primary-dark/20 p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-serif mb-6 text-center text-dark">Programs Offered</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-xl font-medium mb-2 text-primary-dark">Licence in Sports Sciences</h3>
                    <p className="text-sm">
                      A three-year program providing a comprehensive foundation in sports sciences, including exercise
                      physiology, biomechanics, sports psychology, and teaching methodology.
                    </p>
                    <Link href="#" className="mt-3 inline-block text-primary-dark hover:underline">
                      Learn more →
                    </Link>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-xl font-medium mb-2 text-primary-dark">Master's in Sports Training</h3>
                    <p className="text-sm">
                      A specialized two-year program focusing on advanced training methods, performance analysis, and
                      sports coaching, with opportunities for specialization in various sports disciplines.
                    </p>
                    <Link href="#" className="mt-3 inline-block text-primary-dark hover:underline">
                      Learn more →
                    </Link>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-xl font-medium mb-2 text-primary-dark">Master's in Physical Education</h3>
                    <p className="text-sm">
                      A two-year program preparing students for careers in teaching physical education at various
                      educational levels, with emphasis on pedagogical approaches and curriculum development.
                    </p>
                    <Link href="#" className="mt-3 inline-block text-primary-dark hover:underline">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Facilities */}
            <ScrollReveal animation="fade-in">
              <h2 className="text-3xl font-serif mb-6 text-center">Facilities</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-4">Sports Performance Laboratory</h3>
                  <p className="mb-4">
                    Our state-of-the-art laboratory is equipped with advanced technology for assessing physical fitness,
                    measuring physiological responses to exercise, and analyzing sports performance. The facility
                    includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>VO2max testing equipment</li>
                    <li>Force plates for biomechanical analysis</li>
                    <li>Motion capture system</li>
                    <li>Body composition analyzers</li>
                    <li>Isokinetic dynamometers</li>
                  </ul>
                  <p>
                    The laboratory supports both teaching activities and research projects conducted by faculty members
                    and graduate students.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-4">Sports Complex</h3>
                  <p className="mb-4">
                    The department has access to the university's comprehensive sports complex, which serves as a
                    practical training ground for our students. The complex includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Indoor multipurpose gymnasium</li>
                    <li>Olympic-size swimming pool</li>
                    <li>Athletics track</li>
                    <li>Tennis and basketball courts</li>
                    <li>Fitness center with modern equipment</li>
                    <li>Specialized rooms for martial arts and gymnastics</li>
                  </ul>
                  <p>
                    These facilities provide an ideal environment for practical classes, sports training, and
                    recreational activities for the university community.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Career Opportunities */}
            <ScrollReveal animation="slide-up">
              <div className="bg-[#3d6e70] text-white p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-serif mb-6 text-center">Career Opportunities</h2>
                <p className="text-center mb-8">
                  Graduates from our Sports Sciences programs pursue diverse career paths in various sectors:
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                    <h3 className="text-lg font-medium mb-2">Education</h3>
                    <ul className="text-sm space-y-1">
                      <li>Physical Education Teacher</li>
                      <li>University Lecturer</li>
                      <li>Sports Program Coordinator</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                    <h3 className="text-lg font-medium mb-2">Sports Coaching</h3>
                    <ul className="text-sm space-y-1">
                      <li>Team or Individual Coach</li>
                      <li>Performance Analyst</li>
                      <li>Athletic Director</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                    <h3 className="text-lg font-medium mb-2">Health & Fitness</h3>
                    <ul className="text-sm space-y-1">
                      <li>Fitness Instructor</li>
                      <li>Personal Trainer</li>
                      <li>Wellness Program Manager</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                    <h3 className="text-lg font-medium mb-2">Sports Management</h3>
                    <ul className="text-sm space-y-1">
                      <li>Sports Event Coordinator</li>
                      <li>Sports Facility Manager</li>
                      <li>Sports Marketing Specialist</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Call to Action */}
            <ScrollReveal animation="fade-in">
              <div className="text-center">
                <h2 className="text-3xl font-serif mb-4">Join Our Department</h2>
                <p className="max-w-2xl mx-auto mb-6">
                  Interested in studying Sports Sciences at the University of Boumerdes? Learn more about our programs
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
