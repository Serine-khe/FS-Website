import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  PieChart,
  BarChart,
  LineChart,
  Info,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Users,
  FileText,
  MapPin,
  Clock,
  Mail,
} from "lucide-react"

export default function StatisticsInformationGuidancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero section */}
       
        <div className="relative h-[300px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-[#0a1a3a]">
              <Image
                src="/stats-bg.jpg"
                alt="Statistics and information background"
                fill
                className="object-cover opacity-80"
                priority
                sizes="100vw"
              />
            </div>
          </div>
          
          {/* Text header overlay */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-4 text-center">
                Statistics & Information Guidance
              </h1>
              <div className="w-24 h-1 bg-white/80 mb-2"></div>
              <p className="text-white/90 text-lg max-w-2xl text-center">
                Empowering students with data-driven academic decisions
              </p>
            </div>
          </div>
        </div>

        

        {/* Content */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            {/* Introduction */}
            <ScrollReveal animation="fade-in">
              <div className="max-w-3xl mx-auto mb-12 text-center">
                <p className="text-lg">
                  The Statistics, Information, and Guidance Service at the Faculty of Sciences provides valuable data,
                  resources, and counseling to help students make informed decisions about their academic and career
                  paths. We collect and analyze educational statistics, provide information about programs and
                  opportunities, and offer guidance to support student success.
                </p>
              </div>
            </ScrollReveal>

            {/* Services Grid */}
            <ScrollReveal animation="fade-in">
              <h2 className="text-3xl font-serif mb-8 text-center">Our Services</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {/* Service 1 */}
              <ScrollReveal animation="slide-up" delay={100}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#205375]/10 rounded-full flex items-center justify-center mr-4">
                      <PieChart className="h-6 w-6 text-[#205375]" />
                    </div>
                    <h3 className="text-xl font-medium">Educational Statistics</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We collect, analyze, and publish statistics on student enrollment, academic performance, graduation
                    rates, and other educational metrics to inform decision-making and planning.
                  </p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#205375] rounded-full mr-2"></span>
                      Enrollment trends
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#205375] rounded-full mr-2"></span>
                      Academic performance data
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#205375] rounded-full mr-2"></span>
                      Graduation and retention rates
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Service 2 */}
              <ScrollReveal animation="slide-up" delay={200}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#4b6b3c]/10 rounded-full flex items-center justify-center mr-4">
                      <Info className="h-6 w-6 text-[#4b6b3c]" />
                    </div>
                    <h3 className="text-xl font-medium">Information Services</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We provide comprehensive information about academic programs, admission requirements, scholarship
                    opportunities, and campus resources to help students navigate their educational journey.
                  </p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#4b6b3c] rounded-full mr-2"></span>
                      Program guides
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#4b6b3c] rounded-full mr-2"></span>
                      Scholarship information
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#4b6b3c] rounded-full mr-2"></span>
                      Campus resource directory
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Service 3 */}
              <ScrollReveal animation="slide-up" delay={300}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#3d6e70]/10 rounded-full flex items-center justify-center mr-4">
                      <HelpCircle className="h-6 w-6 text-[#3d6e70]" />
                    </div>
                    <h3 className="text-xl font-medium">Academic Guidance</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We offer personalized guidance to help students make informed decisions about their academic paths,
                    course selection, and career planning.
                  </p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#3d6e70] rounded-full mr-2"></span>
                      Academic advising
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#3d6e70] rounded-full mr-2"></span>
                      Career counseling
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#3d6e70] rounded-full mr-2"></span>
                      Study plan development
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Statistics Section */}
            <ScrollReveal animation="fade-in">
              <h2 className="text-3xl font-serif mb-8 text-center">Faculty Statistics</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Enrollment Statistics */}
              <ScrollReveal animation="slide-right">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-medium">Student Enrollment by Department</h3>
                    <BarChart className="h-6 w-6 text-[#205375]" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Computer Science</span>
                        <span className="text-sm font-medium">28%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#205375] h-2.5 rounded-full" style={{ width: "28%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Biology</span>
                        <span className="text-sm font-medium">22%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#4b6b3c] h-2.5 rounded-full" style={{ width: "22%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Chemistry</span>
                        <span className="text-sm font-medium">18%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#3d6e70] h-2.5 rounded-full" style={{ width: "18%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Physics</span>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#797373] h-2.5 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Mathematics</span>
                        <span className="text-sm font-medium">12%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#a3a59e] h-2.5 rounded-full" style={{ width: "12%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Other Departments</span>
                        <span className="text-sm font-medium">5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#d9d9d9] h-2.5 rounded-full" style={{ width: "5%" }}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">Data based on 2024-2025 academic year enrollment</p>
                </div>
              </ScrollReveal>

              {/* Graduation Statistics */}
              <ScrollReveal animation="slide-left">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-medium">Graduation Rates by Program</h3>
                    <LineChart className="h-6 w-6 text-[#4b6b3c]" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">LMD Program</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#4b6b3c] h-2.5 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Classic Program</span>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#205375] h-2.5 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Licence Pro</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#3d6e70] h-2.5 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Master's Programs</span>
                        <span className="text-sm font-medium">76%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#797373] h-2.5 rounded-full" style={{ width: "76%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">PhD Programs</span>
                        <span className="text-sm font-medium">68%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#a3a59e] h-2.5 rounded-full" style={{ width: "68%" }}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">Data based on students who enrolled between 2020-2023</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Key Metrics */}
            <ScrollReveal animation="fade-in">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div className="bg-[#205375]/10 p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    <Users className="h-8 w-8 text-[#205375]" />
                  </div>
                  <div className="text-3xl font-bold mb-2">5,280</div>
                  <div className="text-sm text-gray-600">Total Students</div>
                </div>
                <div className="bg-[#4b6b3c]/10 p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-[#4b6b3c]" />
                  </div>
                  <div className="text-3xl font-bold mb-2">1,245</div>
                  <div className="text-sm text-gray-600">Graduates (2024)</div>
                </div>
                <div className="bg-[#3d6e70]/10 p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-[#3d6e70]" />
                  </div>
                  <div className="text-3xl font-bold mb-2">42</div>
                  <div className="text-sm text-gray-600">Academic Programs</div>
                </div>
                <div className="bg-[#797373]/10 p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    <Users className="h-8 w-8 text-[#797373]" />
                  </div>
                  <div className="text-3xl font-bold mb-2">187</div>
                  <div className="text-sm text-gray-600">Faculty Members</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Information Resources */}
            <ScrollReveal animation="fade-in">
              <h2 className="text-3xl font-serif mb-8 text-center">Information Resources</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <ScrollReveal animation="slide-up" delay={100}>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-medium mb-3">Program Guides</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Comprehensive guides to all academic programs offered at the Faculty of Sciences.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View Guides
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={200}>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-medium mb-3">Scholarship Directory</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Information about available scholarships, eligibility criteria, and application procedures.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View Directory
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={300}>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-medium mb-3">Career Pathways</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Information about career opportunities related to different academic programs.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Explore Careers
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={400}>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-medium mb-3">Annual Reports</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Yearly reports on faculty performance, achievements, and statistics.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View Reports
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={500}>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-medium mb-3">Student Success Stories</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Profiles of successful alumni and their career journeys after graduation.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Read Stories
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={600}>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-medium mb-3">FAQ Guide</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Answers to frequently asked questions about academic programs, policies, and procedures.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View FAQs
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Section */}
            <ScrollReveal animation="fade-in">
              <div className="bg-[#4b6b3c] text-white p-8 rounded-lg">
                <h2 className="text-3xl font-serif mb-6 text-center">Contact Our Office</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl mb-4">Schedule a Guidance Session</h3>
                    <p className="mb-6">
                      Our academic advisors are available to help you navigate your educational journey. Schedule a
                      one-on-one session to discuss your academic goals, program options, and career planning.
                    </p>
                    <Link
                      href="#"
                      className="inline-block bg-white text-[#4b6b3c] px-6 py-3 rounded hover:bg-gray-100 transition-colors"
                    >
                      Book an Appointment
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4">Contact Information</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p>Administration Building, First Floor</p>
                          <p>Faculty of Sciences, UMBB</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p>Sunday - Thursday: 9:00 AM - 3:00 PM</p>
                          <p>Friday - Saturday: Closed</p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                        <p>guidance@univ-boumerdes.dz</p>
                      </li>
                    </ul>
                  </div>
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
