import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function LicencePro() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Gray Banner with Title */}
       {/* Gray Banner with Title */}
       <div className="bg-[#a3a59e] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif text-black">Licence Profesionelle Program</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <p className="text-base md:text-lg">
              The Licence Professionnelle is a three-year undergraduate program offered exclusively at our faculty, with
              two specialization tracks: Web Development and Infographics. It is tailored for students seeking a
              skill-based and professionally focused education, blending academic learning with real-world experience.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">Objectives</h2>
            <p className="mb-4">
              The primary goal of the Licence Professionnelle is to train students in the technical and creative skills
              required by today's digital and visual communication industries. The program emphasizes:
            </p>
            <ul className="list-disc pl-8 space-y-2 mb-4">
              <li>A hands-on, project-based approach</li>
              <li>Industry-relevant knowledge</li>
              <li>Preparation for direct integration into the workforce</li>
              <li>A possible pathway to further academic studies</li>
            </ul>
            <div className="flex justify-end">
              <Image src="/bac-plus-3.png" alt="BAC+3" width={150} height={100} />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">Program Structure</h2>
            <p className="mb-4">The program spans six semesters over three academic years. It includes:</p>
            <ul className="list-disc pl-8 space-y-2 mb-4">
              <li>Core theoretical courses in digital technologies, design, and communication</li>
              <li>Workshops and labs for applied learning</li>
              <li>Collaborative and individual projects</li>
              <li>Internships in professional environments</li>
            </ul>
            <p>
              From the first year, students are immersed in real-world problem-solving, often working on projects that
              simulate industry scenarios.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">Internships and Practical Training</h2>
            <p className="mb-4">
              One of the defining aspects of the Licence Professionnelle is its strong emphasis on practical experience.
              Students are required to complete mandatory internships, which:
            </p>
            <ul className="list-disc pl-8 space-y-2 mb-4">
              <li>Provide firsthand industry exposure</li>
              <li>Help build a professional network</li>
              <li>Often lead to job offers after graduation</li>
            </ul>
            <p>
              The program's balance between theory and practice ensures graduates are well-prepared and competitive in
              the job market.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">Pathway to Master's Programs</h2>
            <p>
              Although the Licence Professionnelle is designed for direct employment, academic advancement remains an
              option. Each year, 20% of the seats in related Master's programs are reserved for high-achieving students
              from the Licence Professionnelle track. This selective opportunity allows motivated students to pursue
              advanced studies and expand their career prospects.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-4">Career Opportunities</h2>
            <p className="mb-4">
              Graduates of the Licence Professionnelle are equipped to enter a wide range of careers in the tech and
              creative sectors, such as:
            </p>
            <ul className="list-disc pl-8 space-y-2 mb-4">
              <li>Web developer</li>
              <li>UI/UX designer</li>
              <li>Front-end or back-end engineer</li>
              <li>Graphic designer</li>
              <li>Multimedia content creator</li>
              <li>Digital project manager</li>
            </ul>
            <p>
              Thanks to the program's practical orientation, graduates often transition smoothly into the workforce.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              href="#"
              className="inline-block bg-[#3d6e70] text-white px-6 py-3 rounded hover:bg-[#4b6b3c] transition-colors"
            >
              download the LP guide from here
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
