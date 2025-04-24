import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Mail } from "lucide-react"

export default function ContactScolarityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-end mb-8">
            <div className="flex items-center">
              <Image src="/logo-dark.png" alt="Faculty of Sciences Logo" width={60} height={60} />
              <div className="ml-4">
                <div className="text-sm font-medium">FACULTY OF SCIENCES</div>
                <div className="text-sm">UNIVERSITY OF BOUMERDES</div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-serif text-center mb-12">Contact the Student Office (Scolarity)</h1>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Request Email Account */}
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="mr-6">
                  <div className="w-20 h-20 border-2 border-[#3d6e70] p-3 rounded-md">
                    <Mail className="w-full h-full text-[#3d6e70]" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-medium mb-4 text-[#3d6e70]">Request a Professional Email Account</h2>
                  <Link
                    href="#email-form"
                    className="inline-block bg-[#3d6e70] text-white px-4 py-2 rounded hover:bg-[#4b6b3c] transition-colors"
                  >
                    Submit Request
                  </Link>
                </div>
              </div>

              {/* Request Grades Report */}
              <div className="flex items-start md:flex-row-reverse text-right bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="ml-6 md:mr-0 md:ml-6">
                  <div className="w-20 h-20 border-2 border-[#4b6b3c] p-3 rounded-md">
                    <Mail className="w-full h-full text-[#4b6b3c]" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-medium mb-4 text-[#4b6b3c]">Request Grades Report and Other Documents</h2>
                  <Link
                    href="#grades-form"
                    className="inline-block bg-[#4b6b3c] text-white px-4 py-2 rounded hover:bg-[#3d6e70] transition-colors"
                  >
                    Submit Request
                  </Link>
                </div>
              </div>
            </div>

            {/* Send Certificates */}
            <div className="flex items-start max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-16">
              <div className="mr-6">
                <div className="w-20 h-20 border-2 border-[#205375] p-3 rounded-md">
                  <Mail className="w-full h-full text-[#205375]" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-medium mb-4 text-[#205375]">Submit Certificates and Reports</h2>
                <Link
                  href="#certificates-form"
                  className="inline-block bg-[#205375] text-white px-4 py-2 rounded hover:bg-[#3d6e70] transition-colors"
                >
                  Submit Documents
                </Link>
              </div>
            </div>

            {/* Form Sections (Hidden by default, would be shown when the corresponding link is clicked) */}
            <div className="mt-16 space-y-12">
              {/* Email Account Request Form */}
              <div id="email-form" className="border border-gray-200 p-8 rounded-lg shadow-md bg-white">
                <h3 className="text-2xl font-serif text-[#3d6e70] mb-6">Request a Professional Email Account</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3d6e70] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3d6e70] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="studentId" className="block text-sm font-medium mb-2 text-gray-700">
                      Student ID
                    </label>
                    <input
                      type="text"
                      id="studentId"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3d6e70] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium mb-2 text-gray-700">
                      Department
                    </label>
                    <select
                      id="department"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3d6e70] focus:border-transparent"
                    >
                      <option value="">Select Department</option>
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="computer-science">Computer Science</option>
                      <option value="agronomy">Agronomy</option>
                      <option value="sports-sciences">Sports Sciences</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="personalEmail" className="block text-sm font-medium mb-2 text-gray-700">
                      Personal Email
                    </label>
                    <input
                      type="email"
                      id="personalEmail"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3d6e70] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium mb-2 text-gray-700">
                      Reason for Request
                    </label>
                    <textarea
                      id="reason"
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3d6e70] focus:border-transparent"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-[#3d6e70] text-white px-8 py-3 rounded-md hover:bg-[#4b6b3c] transition-colors inline-block"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>

              {/* Grades Report Request Form */}
              <div id="grades-form" className="border border-gray-200 p-8 rounded-lg shadow-md bg-white">
                <h3 className="text-2xl font-serif text-[#4b6b3c] mb-6">Request Grades Report or Other Documents</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="grFirstName" className="block text-sm font-medium mb-2 text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="grFirstName"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4b6b3c] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="grLastName" className="block text-sm font-medium mb-2 text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="grLastName"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4b6b3c] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="grStudentId" className="block text-sm font-medium mb-2 text-gray-700">
                      Student ID
                    </label>
                    <input
                      type="text"
                      id="grStudentId"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4b6b3c] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="grDepartment" className="block text-sm font-medium mb-2 text-gray-700">
                      Department
                    </label>
                    <select
                      id="grDepartment"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4b6b3c] focus:border-transparent"
                    >
                      <option value="">Select Department</option>
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="computer-science">Computer Science</option>
                      <option value="agronomy">Agronomy</option>
                      <option value="sports-sciences">Sports Sciences</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="documentType" className="block text-sm font-medium mb-2 text-gray-700">
                      Document Type
                    </label>
                    <select
                      id="documentType"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4b6b3c] focus:border-transparent"
                    >
                      <option value="">Select Document Type</option>
                      <option value="grades">Grades Report</option>
                      <option value="transcript">Academic Transcript</option>
                      <option value="enrollment">Enrollment Certificate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="grDetails" className="block text-sm font-medium mb-2 text-gray-700">
                      Additional Details
                    </label>
                    <textarea
                      id="grDetails"
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4b6b3c] focus:border-transparent"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-[#4b6b3c] text-white px-8 py-3 rounded-md hover:bg-[#3d6e70] transition-colors inline-block"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>

              {/* Certificates Submission Form */}
              <div id="certificates-form" className="border border-gray-200 p-8 rounded-lg shadow-md bg-white">
                <h3 className="text-2xl font-serif text-[#205375] mb-6">Submit Certificates and Reports</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="certFirstName" className="block text-sm font-medium mb-2 text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="certFirstName"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#205375] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="certLastName" className="block text-sm font-medium mb-2 text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="certLastName"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#205375] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="certStudentId" className="block text-sm font-medium mb-2 text-gray-700">
                      Student ID
                    </label>
                    <input
                      type="text"
                      id="certStudentId"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#205375] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="certDepartment" className="block text-sm font-medium mb-2 text-gray-700">
                      Department
                    </label>
                    <select
                      id="certDepartment"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#205375] focus:border-transparent"
                    >
                      <option value="">Select Department</option>
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="computer-science">Computer Science</option>
                      <option value="agronomy">Agronomy</option>
                      <option value="sports-sciences">Sports Sciences</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="documentCategory" className="block text-sm font-medium mb-2 text-gray-700">
                      Document Category
                    </label>
                    <select
                      id="documentCategory"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#205375] focus:border-transparent"
                    >
                      <option value="">Select Category</option>
                      <option value="medical">Medical Certificate</option>
                      <option value="internship">Internship Report</option>
                      <option value="project">Project Report</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="fileUpload" className="block text-sm font-medium mb-2 text-gray-700">
                      Upload Document (PDF format)
                    </label>
                    <input
                      type="file"
                      id="fileUpload"
                      accept=".pdf"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#205375] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="certComments" className="block text-sm font-medium mb-2 text-gray-700">
                      Comments
                    </label>
                    <textarea
                      id="certComments"
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#205375] focus:border-transparent"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-[#205375] text-white px-8 py-3 rounded-md hover:bg-[#3d6e70] transition-colors inline-block"
                    >
                      Submit Documents
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
