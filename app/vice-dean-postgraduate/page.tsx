import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { Calendar, Download, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'

export default function ViceDeanPostgraduatePage() {
  const deanSlides = [
    {
      image: "/vice-dean-office.jpg",
      title: "Office of the Vice Dean of Postgraduate Education",
      subtitle: "Advancing research and academic excellence through graduate programs",
    },
    {
      image: "/vice-dean-research.jpg",
      title: "Research and External Affairs",
      subtitle: "Fostering international partnerships and research collaborations",
    },
    {
      image: "/vice-dean-scholarships.jpg",
      title: "PhD Scholarship Opportunities",
      subtitle: "Supporting the next generation of researchers and academics",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero Banner Slideshow */}
      <HeroSlideshow slides={deanSlides} height="h-[400px]" />

      {/* Main Content */}
      <main className="flex-1 py-12 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <ScrollReveal duration={1000}>
            <div className="max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl font-serif text-center mb-6">Vice Dean of Postgraduate Education</h1>
              <p className="text-lg text-center">
                The Office of the Vice Dean of Postgraduate Education, Research and External Affairs oversees all
                aspects of graduate education, research initiatives, and international partnerships at the Faculty of
                Sciences.
              </p>
            </div>
          </ScrollReveal>

          {/* About the Office - Featured Section */}
          <ScrollReveal direction="up" delay={200}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image src="/vice-dean-building.jpg" alt="Office of the Vice Dean" fill className="object-cover" />
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <h2 className="text-3xl font-serif text-[#3d6e70]">About the Office</h2>
                    <span className="ml-4 bg-[#4b6b3c] text-white text-xs px-2 py-1 rounded">Postgraduate Affairs</span>
                  </div>
                  <p className="mb-6">
                    The Office of the Vice Dean of Postgraduate Education, Research and External Affairs is responsible
                    for coordinating graduate programs, fostering research initiatives, and developing international
                    partnerships. Our mission is to support academic excellence and innovation across all scientific
                    disciplines within the faculty.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-[#3d6e70]" />
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-sm text-gray-600">Building A, 2nd Floor, Room 204</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5 text-[#3d6e70]" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-gray-600">+213 (0) 27 72 XX XX</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="mt-1 h-5 w-5 text-[#3d6e70]" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-gray-600">vicedean.postgrad@univ-science.dz</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="mt-1 h-5 w-5 text-[#3d6e70]" />
                      <div>
                        <h3 className="font-medium">Office Hours</h3>
                        <p className="text-sm text-gray-600">Sunday - Thursday: 9:00 AM - 3:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-600">Vice Dean: </span>
                      <span className="font-medium">Prof. Ahmed Benali</span>
                    </div>
                    <Link
                      href="#contact"
                      className="bg-[#3d6e70] text-white px-4 py-2 rounded hover:bg-[#4b6b3c] transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* PhD Scholarship Opportunities */}
          <ScrollReveal>
            <h2 className="text-3xl font-serif text-center mb-8">Current PhD Scholarship Opportunities</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Scholarship 1 */}
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <Image
                    src="/national-phd-scholarship.jpg"
                    alt="National PhD Scholarship Program"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      Applications Open
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                      Deadline: Dec 15, 2023
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">National PhD Scholarship Program 2023-2024</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Full scholarship covering tuition, monthly stipend, research allowance, and travel grant for
                    doctoral studies in Physics, Chemistry, Mathematics, Computer Science, and Biology.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-bold mb-1">Fields of Study:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Physics</span>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Chemistry</span>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Mathematics</span>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Computer Science</span>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Biology</span>
                    </div>
                  </div>
                  <Link href="#" className="text-[#3d6e70] hover:underline inline-flex items-center text-sm group">
                    Download Application Form{" "}
                    <Download className="ml-1 h-4 w-4 transform group-hover:translate-y-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Scholarship 2 */}
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <Image
                    src="/franco-algerian-phd.jpg"
                    alt="Franco-Algerian Joint PhD Program"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      Applications Open
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                      Deadline: Jan 30, 2024
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">Franco-Algerian Joint PhD Program</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Joint doctoral program between Algerian and French universities with full funding for 3 years.
                    Includes monthly stipend, travel expenses, and health insurance.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-bold mb-1">Fields of Study:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Physics</span>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Computer Science</span>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Renewable Energy</span>
                    </div>
                  </div>
                  <Link href="#" className="text-[#3d6e70] hover:underline inline-flex items-center text-sm group">
                    View Details{" "}
                    <ExternalLink className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Scholarship 3 */}
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <Image
                    src="/international-scholarship.jpg"
                    alt="International Research Excellence Scholarship"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                      Coming Soon
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      Opens: Feb 1, 2024
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">International Research Excellence Scholarship</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Merit-based scholarship for outstanding doctoral candidates conducting research in priority areas.
                    Includes full tuition coverage, monthly stipend, and research funding.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-bold mb-1">Fields of Study:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Biotechnology</span>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Artificial Intelligence</span>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Renewable Energy</span>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Materials Science</span>
                    </div>
                  </div>
                  <span className="text-gray-400 inline-flex items-center text-sm cursor-not-allowed">
                    Coming Soon <Calendar className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Research Priority Areas */}
          <ScrollReveal>
            <h2 className="text-3xl font-serif text-center mb-8">Research Priority Areas</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Priority 1 */}
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 p-6">
                <h3 className="text-xl font-medium mb-3 text-[#3d6e70]">Renewable Energy & Sustainability</h3>
                <p className="text-sm text-gray-600">
                  Research focused on solar energy, biofuels, energy storage solutions, and sustainable development
                  practices.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Solar Energy</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Biofuels</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Energy Storage</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Priority 2 */}
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 p-6">
                <h3 className="text-xl font-medium mb-3 text-[#3d6e70]">Artificial Intelligence & Data Science</h3>
                <p className="text-sm text-gray-600">
                  Advanced research in machine learning, computer vision, natural language processing, and big data
                  analytics.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Machine Learning</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Computer Vision</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Natural Language Processing</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Priority 3 */}
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 p-6">
                <h3 className="text-xl font-medium mb-3 text-[#3d6e70]">Biotechnology & Health Sciences</h3>
                <p className="text-sm text-gray-600">
                  Research in genomics, pharmaceutical development, biomedical engineering, and public health.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Genomics</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Pharmaceutical Development</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Biomedical Engineering</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Priority 4 */}
            <ScrollReveal direction="up" delay={400}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 p-6">
                <h3 className="text-xl font-medium mb-3 text-[#3d6e70]">Materials Science & Nanotechnology</h3>
                <p className="text-sm text-gray-600">
                  Development of advanced materials, nanomaterials, and their applications in various industries.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Advanced Materials</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Nanomaterials</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Industrial Applications</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Priority 5 */}
            <ScrollReveal direction="up" delay={500}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 p-6">
                <h3 className="text-xl font-medium mb-3 text-[#3d6e70]">Environmental Science & Conservation</h3>
                <p className="text-sm text-gray-600">
                  Research on climate change, biodiversity conservation, pollution control, and sustainable resource
                  management.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Climate Change</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Biodiversity Conservation</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Pollution Control</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Priority 6 */}
            <ScrollReveal direction="up" delay={600}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 p-6">
                <h3 className="text-xl font-medium mb-3 text-[#3d6e70]">Agricultural Innovation</h3>
                <p className="text-sm text-gray-600">
                  Research on crop improvement, agricultural technology, food security, and sustainable farming
                  practices.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Crop Improvement</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Agricultural Technology</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                    <span className="text-sm">Food Security</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* International Partnerships */}
          <ScrollReveal>
            <h2 className="text-3xl font-serif text-center mb-8">International Partnerships</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ScrollReveal direction="left" delay={100}>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-medium mb-4 text-[#3d6e70]">Partner Universities</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#3d6e70]"></div>
                    <span className="text-gray-600">University of Paris-Saclay, France</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#3d6e70]"></div>
                    <span className="text-gray-600">Technical University of Munich, Germany</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#3d6e70]"></div>
                    <span className="text-gray-600">University of Barcelona, Spain</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#3d6e70]"></div>
                    <span className="text-gray-600">Cairo University, Egypt</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#3d6e70]"></div>
                    <span className="text-gray-600">University of Tunis El Manar, Tunisia</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-medium mb-4 text-[#3d6e70]">Research Institutions</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#3d6e70]"></div>
                    <span className="text-gray-600">National Center for Scientific Research (CNRS), France</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#3d6e70]"></div>
                    <span className="text-gray-600">Max Planck Institutes, Germany</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#3d6e70]"></div>
                    <span className="text-gray-600">Center for Research in Agricultural Genomics, Spain</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#3d6e70]"></div>
                    <span className="text-gray-600">National Research Center, Egypt</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#3d6e70]"></div>
                    <span className="text-gray-600">Pasteur Institute of Tunis, Tunisia</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div id="contact">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-serif text-center mb-6 text-[#3d6e70]">Contact the Office</h2>
                <p className="text-center text-gray-600 mb-6">
                  For inquiries about PhD programs, scholarships, or research opportunities, please fill out the form
                  below.
                </p>

                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-[#3d6e70] focus:outline-none focus:ring-1 focus:ring-[#3d6e70]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-[#3d6e70] focus:outline-none focus:ring-1 focus:ring-[#3d6e70]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-[#3d6e70] focus:outline-none focus:ring-1 focus:ring-[#3d6e70]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-[#3d6e70] focus:outline-none focus:ring-1 focus:ring-[#3d6e70]"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="PhD Scholarships">PhD Scholarships</option>
                      <option value="Research Opportunities">Research Opportunities</option>
                      <option value="International Partnerships">International Partnerships</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-[#3d6e70] focus:outline-none focus:ring-1 focus:ring-[#3d6e70]"
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="rounded-md bg-[#3d6e70] px-6 py-2 text-white transition-colors hover:bg-[#4b6b3c] focus:outline-none focus:ring-2 focus:ring-[#3d6e70] focus:ring-offset-2"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}