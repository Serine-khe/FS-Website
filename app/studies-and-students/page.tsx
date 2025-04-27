import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Calendar, Clock, MapPin, FileText, Users, GraduationCap, BookOpen, Mail } from 'lucide-react'

export default function StudiesAndStudentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero section */}
        
                <div className="relative h-[300px] overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-[#0a1a3a]">
                      <Image
                        src="/studies-bg.jpg"
                        alt="students and studies background"
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
                        Studies And Students
                      </h1>
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
                  The Studies and Students Department at the Faculty of Sciences is dedicated to supporting students throughout their academic journey. We provide essential services related to enrollment, academic planning, student life, and administrative support to ensure a successful educational experience.
                </p>
              </div>
            </ScrollReveal>

            {/* Services Grid */}
            <ScrollReveal animation="fade-in">
              <h2 className="text-3xl font-serif mb-8 text-center">Our Services</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Service 1 */}
              <ScrollReveal animation="slide-up" delay={100}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#4b6b3c]/10 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 text-[#4b6b3c]" />
                    </div>
                    <h3 className="text-xl font-medium">Enrollment & Registration</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We manage the enrollment process for new and returning students, including registration for courses, academic program changes, and administrative procedures.
                  </p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#4b6b3c] rounded-full mr-2"></span>
                      New student orientation
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#4b6b3c] rounded-full mr-2"></span>
                      Course registration assistance
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#4b6b3c] rounded-full mr-2"></span>
                      Program transfers
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Service 2 */}
              <ScrollReveal animation="slide-up" delay={200}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#3d6e70]/10 rounded-full flex items-center justify-center mr-4">
                      <Calendar className="h-6 w-6 text-[#3d6e70]" />
                    </div>
                    <h3 className="text-xl font-medium">Academic Calendar</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We maintain and communicate the academic calendar, including class schedules, examination periods, holidays, and important academic deadlines.
                  </p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#3d6e70] rounded-full mr-2"></span>
                      Semester schedules
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#3d6e70] rounded-full mr-2"></span>
                      Exam timetables
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#3d6e70] rounded-full mr-2"></span>
                      Academic deadlines
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Service 3 */}
              <ScrollReveal animation="slide-up" delay={300}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#205375]/10 rounded-full flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-[#205375]" />
                    </div>
                    <h3 className="text-xl font-medium">Academic Records</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We maintain student academic records, issue transcripts and certificates, and provide verification of enrollment and graduation status.
                  </p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#205375] rounded-full mr-2"></span>
                      Transcript requests
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#205375] rounded-full mr-2"></span>
                      Degree verification
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#205375] rounded-full mr-2"></span>
                      Grade reports
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Service 4 */}
              <ScrollReveal animation="slide-up" delay={400}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#797373]/10 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-[#797373]" />
                    </div>
                    <h3 className="text-xl font-medium">Student Support</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We provide various support services to enhance the student experience, including academic advising, accommodation assistance, and special needs support.
                  </p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#797373] rounded-full mr-2"></span>
                      Academic advising
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#797373] rounded-full mr-2"></span>
                      Student accommodation
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#797373] rounded-full mr-2"></span>
                      Special needs assistance
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Service 5 */}
              <ScrollReveal animation="slide-up" delay={500}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#4b6b3c]/10 rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="h-6 w-6 text-[#4b6b3c]" />
                    </div>
                    <h3 className="text-xl font-medium">Curriculum Management</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We coordinate with academic departments to ensure curriculum implementation, course offerings, and program requirements are clearly communicated to students.
                  </p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#4b6b3c] rounded-full mr-2"></span>
                      Program requirements
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#4b6b3c] rounded-full mr-2"></span>
                      Course catalogs
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#4b6b3c] rounded-full mr-2"></span>
                      Curriculum updates
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Service 6 */}
              <ScrollReveal animation="slide-up" delay={600}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#3d6e70]/10 rounded-full flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-[#3d6e70]" />
                    </div>
                    <h3 className="text-xl font-medium">Office Hours</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Our office is available to assist students with their administrative needs during regular business hours.
                  </p>
                  <div className="text-sm space-y-3 text-gray-700">
                    <div className="flex items-start">
                      <Clock className="h-4 w-4 text-[#3d6e70] mt-0.5 mr-2" />
                      <div>
                        <p className="font-medium">Sunday - Thursday</p>
                        <p>8:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-[#3d6e70] mt-0.5 mr-2" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p>Administration Building, Ground Floor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Important Dates */}
            <ScrollReveal animation="fade-in">
              <div className="bg-[#f5f5f5] p-8 rounded-lg shadow-md mb-16">
                <h2 className="text-3xl font-serif mb-6 text-center">Important Dates</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-medium mb-4 text-[#3d6e70]">Fall Semester 2024</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 text-[#3d6e70] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Registration Period</p>
                          <p className="text-sm text-gray-600">August 20-30, 2024</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 text-[#3d6e70] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Classes Begin</p>
                          <p className="text-sm text-gray-600">October 1, 2024</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 text-[#3d6e70] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Mid-term Examinations</p>
                          <p className="text-sm text-gray-600">November 1-20, 2024</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 text-[#3d6e70] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Final Examinations</p>
                          <p className="text-sm text-gray-600">January 8-21, 2025</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-4 text-[#4b6b3c]">Spring Semester 2024</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 text-[#4b6b3c] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Classes Begin</p>
                          <p className="text-sm text-gray-600">February 2, 2025</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 text-[#4b6b3c] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Mid-term Examinations</p>
                          <p className="text-sm text-gray-600">March 1-29, 2025</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 text-[#4b6b3c] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Final Examinations</p>
                          <p className="text-sm text-gray-600">May 4-18, 2025</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Forms and Documents */}
            <ScrollReveal animation="fade-in">
              <h2 className="text-3xl font-serif mb-8 text-center">Forms and Documents</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <ScrollReveal animation="slide-up" delay={100}>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-medium mb-3">Registration Form</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Form required for course registration each semester.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Download PDF
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={200}>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-medium mb-3">Transcript Request Form</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Form to request official academic transcripts.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Download PDF
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={300}>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-medium mb-3">Program Transfer Application</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Form for students wishing to transfer between academic programs.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Download PDF
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={400}>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-medium mb-3">Student Handbook</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Comprehensive guide to university policies and procedures.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Download PDF
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={500}>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-medium mb-3">Accommodation Request</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Form for students requiring special accommodations.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Download PDF
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={600}>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-medium mb-3">Graduation Application</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Form for students applying for graduation.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Download PDF
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Section */}
            <ScrollReveal animation="fade-in">
              <div className="bg-[#3d6e70] text-white p-8 rounded-lg">
                <h2 className="text-3xl font-serif mb-6 text-center">Contact Us</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl mb-4">Get in Touch</h3>
                    <p className="mb-6">
                      If you have any questions or need assistance with your academic journey, please don't hesitate to contact us. Our team is here to help you navigate your educational experience at UMBB.
                    </p>
                    <Link
                      href="/contact-scolarity"
                      className="inline-block bg-white text-[#3d6e70] px-6 py-3 rounded hover:bg-gray-100 transition-colors"
                    >
                      Contact Form
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4">Contact Information</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p>Administration Building, Ground Floor</p>
                          <p>Faculty of Sciences, UMBB</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p>Sunday - Thursday: 8:00 AM - 4:00 PM</p>
                          <p>Friday - Saturday: Closed</p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                        <p>studies@univ-boumerdes.dz</p>
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
