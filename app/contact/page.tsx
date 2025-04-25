import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Mail, Phone, MapPin, Clock, Facebook, Linkedin, Twitter, Instagram, Youtube } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 bg-[#f5f5f5]">
        {/* Hero Section */}
        <div className="relative h-64 bg-[#3d6e70]">
          <div className="absolute inset-0">
            <Image src="/contact-hero.jpg" alt="Contact Us" fill className="object-cover opacity-30" />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-center">Contact Us</h1>
            <p className="text-lg max-w-2xl text-center">
              Get in touch with the Faculty of Sciences at the University of Boumerdes
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif mb-6">Contact Information</h2>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-start mb-6">
                  <MapPin className="h-6 w-6 text-[#3d6e70] mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-gray-600">
                      Faculty of Sciences
                      <br />
                      University of M'Hamed Bougara
                      <br />
                      Avenue de l'Indépendance
                      <br />
                      35000 Boumerdès, Algeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <Phone className="h-6 w-6 text-[#3d6e70] mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Dean's Office: +213 24 91 XX XX
                      <br />
                      Student Affairs: +213 24 91 XX XX
                      <br />
                      International Relations: +213 24 91 XX XX
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <Mail className="h-6 w-6 text-[#3d6e70] mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: fs@univ-boumerdes.dz
                      <br />
                      Student Affairs: scolarite.fs@univ-boumerdes.dz
                      <br />
                      Dean's Office: doyen.fs@univ-boumerdes.dz
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#3d6e70] mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Sunday - Thursday: 8:00 AM - 4:00 PM
                      <br />
                      Friday - Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <h2 className="text-2xl font-serif mb-6">Connect With Us</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="mb-6">
                  Follow us on social media to stay updated with the latest news, events, and announcements from the
                  Faculty of Sciences.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-[#3d6e70] transition-colors hover:shadow-md transform hover:scale-105 transition-transform duration-300"
                  >
                    <Facebook className="h-8 w-8 text-[#1877F2] mb-2" />
                    <span className="text-sm">Facebook</span>
                  </Link>

                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-[#3d6e70] transition-colors hover:shadow-md transform hover:scale-105 transition-transform duration-300"
                  >
                    <Twitter className="h-8 w-8 text-[#1DA1F2] mb-2" />
                    <span className="text-sm">Twitter</span>
                  </Link>

                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-[#3d6e70] transition-colors hover:shadow-md transform hover:scale-105 transition-transform duration-300"
                  >
                    <Linkedin className="h-8 w-8 text-[#0A66C2] mb-2" />
                    <span className="text-sm">LinkedIn</span>
                  </Link>

                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-[#3d6e70] transition-colors hover:shadow-md transform hover:scale-105 transition-transform duration-300"
                  >
                    <Instagram className="h-8 w-8 text-[#E4405F] mb-2" />
                    <span className="text-sm">Instagram</span>
                  </Link>

                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-[#3d6e70] transition-colors hover:shadow-md transform hover:scale-105 transition-transform duration-300"
                  >
                    <Youtube className="h-8 w-8 text-[#FF0000] mb-2" />
                    <span className="text-sm">YouTube</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif mb-6">Send Us a Message</h2>

              <div className="bg-white rounded-lg shadow-md p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3d6e70] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3d6e70] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3d6e70] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3d6e70] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3d6e70] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3d6e70] focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#3d6e70] text-white py-3 rounded-md hover:bg-[#4b6b3c] transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif mb-6">Find Us</h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="aspect-w-16 aspect-h-9 h-96 relative">
                <Image src="/campus-map.jpg" alt="Campus Map" fill className="object-cover rounded-lg" />
              </div>
            </div>
          </div>

          {/* Departments Contact */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif mb-6">Department Contacts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-3">Department of Physics</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Head:</span> Dr. Ahmed Benali
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Email:</span> physics@univ-boumerdes.dz
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span> +213 24 91 XX XX
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-3">Department of Chemistry</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Head:</span> Dr. Leila Hamidouche
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Email:</span> chemistry@univ-boumerdes.dz
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span> +213 24 91 XX XX
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-3">Department of Computer Science</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Head:</span> Dr. Youcef Yahiatene
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Email:</span> cs@univ-boumerdes.dz
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span> +213 24 91 XX XX
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-3">Department of Mathematics</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Head:</span> Dr. Karim Belkebir
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Email:</span> math@univ-boumerdes.dz
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span> +213 24 91 XX XX
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-3">Department of Biology</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Head:</span> Dr. Samira Benali
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Email:</span> biology@univ-boumerdes.dz
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span> +213 24 91 XX XX
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-3">Department of Agronomy</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Head:</span> Dr. Ayoub Ould Mohamed
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Email:</span> agronomy@univ-boumerdes.dz
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span> +213 24 91 XX XX
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-3">Department of Sports Sciences</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Head:</span> Dr. Farid Meziane
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Email:</span> sports@univ-boumerdes.dz
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span> +213 24 91 XX XX
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
