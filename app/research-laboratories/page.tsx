import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { HeroSlideshow } from "@/components/hero-slideshow"

export default function ResearchLaboratories() {
  const labsSlides = [
    {
      image: "/research-lab1.jpg",
      title: "Research Laboratories at UMBB",
      subtitle: "Advancing knowledge through innovation and scientific excellence",
    },
    {
      image: "/research-lab2.jpg",
      title: "Cutting-edge Research Facilities",
      subtitle: "State-of-the-art equipment supporting groundbreaking discoveries",
    },
    {
      image: "/research-lab3.jpg",
      title: "Collaborative Research Environment",
      subtitle: "Fostering partnerships between academia, industry, and international institutions",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero Banner Slideshow */}
      <HeroSlideshow slides={labsSlides} height="h-[400px]" />

      {/* Main Content */}
      <main className="flex-1 py-12 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <ScrollReveal duration={1000}>
            <div className="max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl font-serif text-center mb-6">Research Laboratories</h1>
              <p className="text-lg text-center">
                The Faculty of Sciences at UMBB hosts several research laboratories that contribute to scientific
                advancement across various disciplines. Our laboratories are equipped with modern facilities and staffed
                by experienced researchers dedicated to pushing the boundaries of knowledge.
              </p>
            </div>
          </ScrollReveal>

          {/* LIMOSE Lab - Featured Lab */}
          <ScrollReveal direction="up" delay={200}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image src="/limose-lab.jpg" alt="LIMOSE Laboratory" fill className="object-cover" />
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <h2 className="text-3xl font-serif text-[#3d6e70]">LIMOSE Laboratory</h2>
                    <span className="ml-4 bg-[#4b6b3c] text-white text-xs px-2 py-1 rounded">Featured Lab</span>
                  </div>
                  <h3 className="text-xl mb-4">Laboratory of Computer Modeling and Systems Engineering</h3>
                  <p className="mb-4">
                    LIMOSE (Laboratoire d'Informatique, de Modélisation et d'Optimisation des Systèmes et Entreprises)
                    is a leading research laboratory focused on computer modeling, optimization, and systems
                    engineering. Established in 2012, the laboratory brings together researchers from computer science,
                    mathematics, and engineering to address complex computational challenges.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Research Areas:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                        Artificial Intelligence
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                        Machine Learning
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                        Optimization Algorithms
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                        Computer Networks
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                        Information Security
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#3d6e70] rounded-full mr-2"></span>
                        Systems Modeling
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-600">Director: </span>
                      <span className="font-medium">Prof. Mohammed Bennai</span>
                    </div>
                    <Link
                      href="/research-laboratories/limose"
                      className="bg-[#3d6e70] text-white px-4 py-2 rounded hover:bg-[#4b6b3c] transition-colors"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Other Laboratories */}
          <ScrollReveal>
            <h2 className="text-3xl font-serif text-center mb-8">Our Research Laboratories</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Lab 1 */}
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image
                    src="/lab-physics.jpg"
                    alt="Laboratory of Materials Physics"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">Laboratory of Materials Physics</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Focused on the study of material properties, characterization techniques, and applications in
                    various technological fields.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-bold mb-1">Research Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Nanomaterials</span>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Semiconductors</span>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Thin Films</span>
                    </div>
                  </div>
                  <Link
                    href="/research-laboratories/materials-physics"
                    className="text-[#3d6e70] hover:underline inline-flex items-center text-sm group"
                  >
                    Learn more{" "}
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Lab 2 */}
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image
                    src="/lab-chemistry.jpg"
                    alt="Laboratory of Environmental Chemistry"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">Laboratory of Environmental Chemistry</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Dedicated to the study of chemical processes in the environment, pollution monitoring, and
                    remediation techniques.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-bold mb-1">Research Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Water Quality</span>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Soil Remediation</span>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Green Chemistry</span>
                    </div>
                  </div>
                  <Link
                    href="/research-laboratories/environmental-chemistry"
                    className="text-[#3d6e70] hover:underline inline-flex items-center text-sm group"
                  >
                    Learn more{" "}
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Lab 3 */}
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image
                    src="/lab-math.jpg"
                    alt="Laboratory of Applied Mathematics"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">Laboratory of Applied Mathematics</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Focusing on mathematical modeling, numerical analysis, and applications in various scientific
                    fields.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-bold mb-1">Research Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Topology</span>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Numerical Analysis</span>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">Differential Equations</span>
                    </div>
                  </div>
                  <Link
                    href="/research-laboratories/applied-mathematics"
                    className="text-[#3d6e70] hover:underline inline-flex items-center text-sm group"
                  >
                    Learn more{" "}
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
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