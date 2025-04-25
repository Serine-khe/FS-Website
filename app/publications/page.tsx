import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Search, Filter, Download, ExternalLink } from "lucide-react"

export default function Publications() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero section */}
        <div className="relative h-[200px] bg-[#4b6b3c]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4b6b3c] to-[#3d6e70] opacity-90"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center">
              <h1 className="text-5xl font-serif text-white mb-4 text-center">Scientific Publications</h1>
              <div className="w-24 h-1 bg-white"></div>
            </div>
          </div>
        </div>

        {/* Content with solid background */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            {/* Introduction */}
            <ScrollReveal animation="fade-in">
              <div className="max-w-3xl mx-auto mb-12 text-center">
                <p className="text-lg">
                  Faculty members and researchers at UMBB regularly publish their findings in peer-reviewed journals,
                  conference proceedings, and books. This page highlights recent publications from our academic
                  community, showcasing our contributions to various fields of science.
                </p>
              </div>
            </ScrollReveal>

            {/* Search and Filter */}
            <ScrollReveal animation="fade-in">
              <div className="max-w-4xl mx-auto mb-12">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="mb-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search publications by title, author, or keywords..."
                        className="w-full border border-gray-300 rounded-md py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#3d6e70] focus:border-transparent"
                      />
                      <button
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#3d6e70]"
                        aria-label="Search"
                      >
                        <Search className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center">
                      <Filter className="h-4 w-4 mr-2 text-[#3d6e70]" />
                      <span className="text-sm font-medium">Filter by:</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <select className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#3d6e70]">
                        <option value="">All Departments</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="biology">Biology</option>
                        <option value="mathematics">Mathematics</option>
                        <option value="computer-science">Computer Science</option>
                        <option value="agronomy">Agronomy</option>
                        <option value="sports-sciences">Sports Sciences</option>
                      </select>
                      <select className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#3d6e70]">
                        <option value="">All Years</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                      </select>
                      <select className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#3d6e70]">
                        <option value="">All Publication Types</option>
                        <option value="journal">Journal Articles</option>
                        <option value="conference">Conference Papers</option>
                        <option value="book">Book Chapters</option>
                        <option value="thesis">Theses</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Recent Publications */}
            <ScrollReveal animation="fade-in">
              <h2 className="text-3xl font-serif mb-8 text-center">Recent Publications</h2>
            </ScrollReveal>

            <div className="space-y-6 mb-12">
              {/* Publication 1 */}
              <ScrollReveal animation="slide-right">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#3d6e70] shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Machine Learning Approaches for Drought Prediction in Semi-Arid Regions: A Case Study of
                        Northern Algeria
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Authors:</span> Kaddour, M., Benali, A., Hamidouche, L., & Ould
                        Mohamed, A.
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Journal:</span> Environmental Modeling & Software, 2025, Vol. 143,
                        pp. 105-118
                      </p>
                      <p className="text-sm mb-4">
                        This study presents a novel approach to drought prediction using ensemble machine learning
                        techniques, combining meteorological data with satellite imagery to improve forecast accuracy in
                        semi-arid regions. The model demonstrated 87% accuracy in predicting drought conditions up to
                        three months in advance.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-[#3d6e70]/10 text-[#3d6e70] text-xs px-2 py-1 rounded">
                          Machine Learning
                        </span>
                        <span className="bg-[#3d6e70]/10 text-[#3d6e70] text-xs px-2 py-1 rounded">
                          Climate Science
                        </span>
                        <span className="bg-[#3d6e70]/10 text-[#3d6e70] text-xs px-2 py-1 rounded">
                          Environmental Modeling
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link
                        href="#"
                        className="text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                        aria-label="Download PDF"
                      >
                        <Download className="h-5 w-5" />
                      </Link>
                      <Link
                        href="#"
                        className="text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                        aria-label="External Link"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Publication 2 */}
              <ScrollReveal animation="slide-left">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#4b6b3c] shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Synthesis and Characterization of Novel Biodegradable Polymers from Agricultural Waste
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Authors:</span> Hamidouche, L., Benali, S., & Taleb, K.
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Journal:</span> Green Chemistry, 2024, Vol. 26, pp. 4532-4547
                      </p>
                      <p className="text-sm mb-4">
                        This research presents a sustainable approach to polymer synthesis using agricultural waste
                        products. The developed materials show promising mechanical properties and complete
                        biodegradability, offering potential applications in packaging and agricultural films.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-[#4b6b3c]/10 text-[#4b6b3c] text-xs px-2 py-1 rounded">
                          Green Chemistry
                        </span>
                        <span className="bg-[#4b6b3c]/10 text-[#4b6b3c] text-xs px-2 py-1 rounded">
                          Polymer Science
                        </span>
                        <span className="bg-[#4b6b3c]/10 text-[#4b6b3c] text-xs px-2 py-1 rounded">
                          Sustainable Materials
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link
                        href="#"
                        className="text-[#4b6b3c] hover:text-[#3d6e70] transition-colors"
                        aria-label="Download PDF"
                      >
                        <Download className="h-5 w-5" />
                      </Link>
                      <Link
                        href="#"
                        className="text-[#4b6b3c] hover:text-[#3d6e70] transition-colors"
                        aria-label="External Link"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Publication 3 */}
              <ScrollReveal animation="slide-right">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#205375] shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Genetic Diversity and Conservation Status of Endemic Plant Species in Coastal Mediterranean
                        Ecosystems
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Authors:</span> Benali, S., Meziane, F., & Belkebir, K.
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Journal:</span> Biodiversity and Conservation, 2024, Vol. 33, pp.
                        1289-1310
                      </p>
                      <p className="text-sm mb-4">
                        This study assesses the genetic diversity of five endemic plant species in coastal Mediterranean
                        ecosystems of Algeria. The findings reveal significant genetic variation within populations and
                        identify priority areas for conservation efforts.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-[#205375]/10 text-[#205375] text-xs px-2 py-1 rounded">
                          Conservation Biology
                        </span>
                        <span className="bg-[#205375]/10 text-[#205375] text-xs px-2 py-1 rounded">Genetics</span>
                        <span className="bg-[#205375]/10 text-[#205375] text-xs px-2 py-1 rounded">
                          Mediterranean Ecology
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link
                        href="#"
                        className="text-[#205375] hover:text-[#4b6b3c] transition-colors"
                        aria-label="Download PDF"
                      >
                        <Download className="h-5 w-5" />
                      </Link>
                      <Link
                        href="#"
                        className="text-[#205375] hover:text-[#4b6b3c] transition-colors"
                        aria-label="External Link"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Publication 4 */}
              <ScrollReveal animation="slide-left">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#3d6e70] shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Numerical Solutions for Non-Linear Partial Differential Equations Using Advanced Spectral
                        Methods
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Authors:</span> Belkebir, K., Kaddour, M., & Bennai, M.
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Journal:</span> Journal of Computational Physics, 2023, Vol. 458,
                        Article 111157
                      </p>
                      <p className="text-sm mb-4">
                        This paper presents a novel spectral method for solving non-linear partial differential
                        equations with applications in fluid dynamics and wave propagation. The proposed approach
                        demonstrates superior accuracy and computational efficiency compared to traditional methods.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-[#3d6e70]/10 text-[#3d6e70] text-xs px-2 py-1 rounded">
                          Numerical Analysis
                        </span>
                        <span className="bg-[#3d6e70]/10 text-[#3d6e70] text-xs px-2 py-1 rounded">
                          Differential Equations
                        </span>
                        <span className="bg-[#3d6e70]/10 text-[#3d6e70] text-xs px-2 py-1 rounded">
                          Computational Physics
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link
                        href="#"
                        className="text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                        aria-label="Download PDF"
                      >
                        <Download className="h-5 w-5" />
                      </Link>
                      <Link
                        href="#"
                        className="text-[#3d6e70] hover:text-[#4b6b3c] transition-colors"
                        aria-label="External Link"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Publication Categories */}
            <ScrollReveal animation="fade-in">
              <h2 className="text-3xl font-serif mb-8 text-center">Publication Categories</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <ScrollReveal animation="slide-up" delay={100}>
                <div className="bg-[#3d6e70] text-white p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-medium mb-2">Journal Articles</h3>
                  <p className="text-sm mb-4">
                    Peer-reviewed research papers published in scientific journals across various disciplines.
                  </p>
                  <p className="text-2xl font-bold">142</p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={200}>
                <div className="bg-[#4b6b3c] text-white p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-medium mb-2">Conference Papers</h3>
                  <p className="text-sm mb-4">
                    Research presented at national and international scientific conferences and symposia.
                  </p>
                  <p className="text-2xl font-bold">87</p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={300}>
                <div className="bg-[#205375] text-white p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-medium mb-2">Book Chapters</h3>
                  <p className="text-sm mb-4">
                    Contributions to edited volumes and academic books in specialized fields.
                  </p>
                  <p className="text-2xl font-bold">35</p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={400}>
                <div className="bg-[#7A956B] text-white p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-medium mb-2">Theses & Dissertations</h3>
                  <p className="text-sm mb-4">
                    Master's theses and doctoral dissertations completed at our institution.
                  </p>
                  <p className="text-2xl font-bold">64</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mb-12">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-[#3d6e70]"
                  aria-current="page"
                >
                  1
                </a>
                <a
                  href="#"
                  className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  3
                </a>
                <span className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <a
                  href="#"
                  className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  8
                </a>
                <a
                  href="#"
                  className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Next
                </a>
              </nav>
            </div>

            {/* Call to Action */}
            <ScrollReveal animation="fade-in">
              <div className="bg-[#4b6b3c] text-white p-8 rounded-lg text-center">
                <h2 className="text-3xl font-serif mb-4">Submit Your Publication</h2>
                <p className="max-w-2xl mx-auto mb-6">
                  Are you a faculty member or researcher at UMBB? Submit your recent publications to be featured on this
                  page and in our institutional repository.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-[#4b6b3c] px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Submit Publication
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
