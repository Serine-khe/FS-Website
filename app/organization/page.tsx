import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSlideshow } from "@/components/hero-slideshow"

export default function OrganizationPage() {
  const organizationSlides = [
    {
      image: "/campus-sunset.jpg",
      title: "discover FS UMBB, where minds are built to innovate",
    },
    {
      image: "/campus-sunset2.jpg",
      title: "Seven departments, one mission: excellence in education",
    },
    {
      image: "/campus-sunset3.jpg",
      title: "State-of-the-art laboratories advancing scientific research",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Banner Slideshow */}
        <HeroSlideshow slides={organizationSlides} height="h-[300px]" />

        <div className="container mx-auto px-4 py-16">
          <hr className="border-gray-300 mb-16" />

          {/* Statistics - First Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center transform transition-transform duration-500 hover:scale-105">
              <h2 className="text-5xl md:text-6xl font-serif text-[#205375] mb-4">10 k</h2>
              <p className="text-base">Under-Graduate Students, Masters Students and PhD researchers.</p>
            </div>

            <div className="text-center transform transition-transform duration-500 hover:scale-105">
              <h2 className="text-5xl md:text-6xl font-serif text-[#205375] mb-4">453</h2>
              <p className="text-base">Staff between Professors and researchers</p>
            </div>

            <div className="text-center transform transition-transform duration-500 hover:scale-105">
              <h2 className="text-5xl md:text-6xl font-serif text-[#205375] mb-4">6</h2>
              <p className="text-base">Laboratories and their contributions.</p>
            </div>
          </div>

          {/* Statistics - Second Row */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center transform transition-transform duration-500 hover:scale-105">
              <h2 className="text-5xl md:text-6xl font-serif text-[#205375] mb-4">7</h2>
              <p className="text-base">Departments</p>
            </div>

            <div className="text-center transform transition-transform duration-500 hover:scale-105">
              <h2 className="text-5xl md:text-6xl font-serif text-[#205375] mb-4">18 k</h2>
              <p className="text-base">Graduates since establishment</p>
            </div>

            <div className="text-center transform transition-transform duration-500 hover:scale-105">
              <h2 className="text-5xl md:text-6xl font-serif text-[#205375] mb-4">78</h2>
              <p className="text-base">Research publications annually</p>
            </div>
          </div>
        </div>

        {/* Departments Section */}
        <div className="bg-[#f5f5f5] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-center mb-12">Our Departments</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link
                href="/departments/physics"
                className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-medium mb-3">Department of Physics</h3>
                <p className="text-sm mb-4">
                  Specializing in theoretical and experimental physics, with state-of-the-art laboratories for research
                  in various domains.
                </p>
              </Link>

              <Link
                href="/departments/chemistry"
                className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-medium mb-3">Department of Chemistry</h3>
                <p className="text-sm mb-4">
                  Focusing on organic, inorganic, and analytical chemistry, with strong ties to the hydrocarbon
                  industry.
                </p>
              </Link>

              <Link
                href="/departments/computer-science"
                className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-medium mb-3">Department of Computer Science</h3>
                <p className="text-sm mb-4">
                  Providing education in software engineering, artificial intelligence, and data science with modern
                  computing facilities.
                </p>
              </Link>

              <Link
                href="/departments/mathematics"
                className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-medium mb-3">Department of Mathematics</h3>
                <p className="text-sm mb-4">
                  Offering programs in pure and applied mathematics, with research focus on algebra, analysis, and
                  mathematical modeling.
                </p>
              </Link>

              <Link
                href="/departments/biology"
                className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-medium mb-3">Department of Biology</h3>
                <p className="text-sm mb-4">
                  Covering various aspects of biological sciences, from molecular biology to ecology and environmental
                  studies.
                </p>
              </Link>

              <Link
                href="/departments/agronomy"
                className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-medium mb-3">Department of Agronomy</h3>
                <p className="text-sm mb-4">
                  Dedicated to agricultural sciences, with research on sustainable farming practices and food security.
                </p>
              </Link>

              <Link
                href="/departments/sports-sciences"
                className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-medium mb-3">Department of Sports Sciences</h3>
                <p className="text-sm mb-4">
                  Focusing on physical education, sports training, and sports medicine with modern training facilities.
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Research Laboratories Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-center mb-12">Research Laboratories</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border border-gray-200 p-6 rounded hover:border-[#205375] transition-colors duration-300">
                <h3 className="text-xl font-medium mb-3">Laboratory of Applied Mathematics</h3>
                <p className="text-sm">
                  Focusing on mathematical modeling, numerical analysis, and applications in various scientific fields.
                </p>
              </div>

              <div className="border border-gray-200 p-6 rounded hover:border-[#205375] transition-colors duration-300">
                <h3 className="text-xl font-medium mb-3">Laboratory of Materials Physics</h3>
                <p className="text-sm">
                  Researching advanced materials, their properties, and applications in technology and industry.
                </p>
              </div>

              <div className="border border-gray-200 p-6 rounded hover:border-[#205375] transition-colors duration-300">
                <h3 className="text-xl font-medium mb-3">Laboratory of Environmental Chemistry</h3>
                <p className="text-sm">
                  Studying chemical processes in the environment, pollution monitoring, and remediation techniques.
                </p>
              </div>

              <div className="border border-gray-200 p-6 rounded hover:border-[#205375] transition-colors duration-300">
                <h3 className="text-xl font-medium mb-3">Laboratory of Molecular Biology</h3>
                <p className="text-sm">
                  Investigating genetic and molecular aspects of living organisms, with applications in health and
                  biotechnology.
                </p>
              </div>

              <div className="border border-gray-200 p-6 rounded hover:border-[#205375] transition-colors duration-300">
                <h3 className="text-xl font-medium mb-3">Laboratory of Computer Systems</h3>
                <p className="text-sm">
                  Developing innovative computing solutions, algorithms, and software for various applications.
                </p>
              </div>

              <div className="border border-gray-200 p-6 rounded hover:border-[#205375] transition-colors duration-300">
                <h3 className="text-xl font-medium mb-3">Laboratory of Agricultural Sciences</h3>
                <p className="text-sm">
                  Conducting research on crop improvement, soil science, and sustainable agricultural practices.
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
