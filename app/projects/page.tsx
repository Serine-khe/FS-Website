import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ResearchProjects() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero section */}
        <div className="relative h-[200px] bg-[#3d6e70]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3d6e70] to-[#4b6b3c] opacity-90"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center">
              <h1 className="text-5xl font-serif text-white mb-4 text-center">Research Projects</h1>
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
                  The Faculty of Sciences at UMBB is engaged in a wide range of research projects across various
                  disciplines. Our faculty members and students collaborate on innovative research initiatives that
                  address local and global challenges, contributing to scientific advancement and societal development.
                </p>
              </div>
            </ScrollReveal>

            {/* Ongoing Projects */}
            <ScrollReveal animation="fade-in">
              <h2 className="text-3xl font-serif mb-8 text-center">Ongoing Projects</h2>
            </ScrollReveal>

            <div className="space-y-8 mb-16">
              {/* Project 1 */}
              <ScrollReveal animation="slide-right">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#3d6e70] shadow-md">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-medium mb-2">Sustainable Water Management in Semi-Arid Regions</h3>
                      <p className="text-gray-600 mb-4">
                        <span className="font-medium">Duration:</span> 2023-2026 |{" "}
                        <span className="font-medium">Funding:</span> National Research Fund
                      </p>
                      <p className="mb-4">
                        This interdisciplinary project combines expertise from hydrology, chemistry, and environmental
                        sciences to develop innovative approaches for water conservation and management in semi-arid
                        regions of Algeria. The research focuses on groundwater quality assessment, water treatment
                        technologies, and sustainable irrigation practices.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-[#3d6e70]/10 text-[#3d6e70] text-xs px-2 py-1 rounded">
                          Water Resources
                        </span>
                        <span className="bg-[#3d6e70]/10 text-[#3d6e70] text-xs px-2 py-1 rounded">
                          Environmental Chemistry
                        </span>
                        <span className="bg-[#3d6e70]/10 text-[#3d6e70] text-xs px-2 py-1 rounded">
                          Sustainable Development
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Principal Investigator:</span> Dr. Leila Hamidouche, Department of
                        Chemistry
                      </p>
                    </div>
                    <div className="md:w-1/4 flex justify-center items-center">
                      <div className="w-20 h-20 rounded-full bg-[#3d6e70] flex items-center justify-center text-white text-3xl font-bold">
                        WM
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 2 */}
              <ScrollReveal animation="slide-left">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#4b6b3c] shadow-md">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-medium mb-2">Artificial Intelligence for Early Disease Detection</h3>
                      <p className="text-gray-600 mb-4">
                        <span className="font-medium">Duration:</span> 2024-2027 |{" "}
                        <span className="font-medium">Funding:</span> International Cooperation Grant
                      </p>
                      <p className="mb-4">
                        This project leverages machine learning and computer vision techniques to develop AI-based
                        systems for early detection of plant diseases in agricultural settings and certain human
                        pathologies through medical imaging. The research aims to create accessible diagnostic tools
                        that can be deployed in resource-limited environments.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-[#4b6b3c]/10 text-[#4b6b3c] text-xs px-2 py-1 rounded">
                          Artificial Intelligence
                        </span>
                        <span className="bg-[#4b6b3c]/10 text-[#4b6b3c] text-xs px-2 py-1 rounded">
                          Computer Vision
                        </span>
                        <span className="bg-[#4b6b3c]/10 text-[#4b6b3c] text-xs px-2 py-1 rounded">Healthcare</span>
                        <span className="bg-[#4b6b3c]/10 text-[#4b6b3c] text-xs px-2 py-1 rounded">Agriculture</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Principal Investigator:</span> Dr. Mohammed Kaddour, Department of
                        Computer Science
                      </p>
                    </div>
                    <div className="md:w-1/4 flex justify-center items-center">
                      <div className="w-20 h-20 rounded-full bg-[#4b6b3c] flex items-center justify-center text-white text-3xl font-bold">
                        AI
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 3 */}
              <ScrollReveal animation="slide-right">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#205375] shadow-md">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-medium mb-2">
                        Biodiversity Conservation in Mediterranean Ecosystems
                      </h3>
                      <p className="text-gray-600 mb-4">
                        <span className="font-medium">Duration:</span> 2022-2025 |{" "}
                        <span className="font-medium">Funding:</span> Ministry of Environment
                      </p>
                      <p className="mb-4">
                        This project studies the biodiversity of Mediterranean coastal ecosystems in Algeria, focusing
                        on endemic species, habitat conservation, and the impacts of climate change. The research
                        combines field surveys, genetic analysis, and ecological modeling to develop conservation
                        strategies for threatened species and ecosystems.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-[#205375]/10 text-[#205375] text-xs px-2 py-1 rounded">Biodiversity</span>
                        <span className="bg-[#205375]/10 text-[#205375] text-xs px-2 py-1 rounded">Ecology</span>
                        <span className="bg-[#205375]/10 text-[#205375] text-xs px-2 py-1 rounded">
                          Conservation Biology
                        </span>
                        <span className="bg-[#205375]/10 text-[#205375] text-xs px-2 py-1 rounded">Climate Change</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Principal Investigator:</span> Dr. Samira Benali, Department of
                        Biology
                      </p>
                    </div>
                    <div className="md:w-1/4 flex justify-center items-center">
                      <div className="w-20 h-20 rounded-full bg-[#205375] flex items-center justify-center text-white text-3xl font-bold">
                        BC
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Completed Projects */}
            <ScrollReveal animation="fade-in">
              <h2 className="text-3xl font-serif mb-8 text-center">Completed Projects</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {/* Completed Project 1 */}
              <ScrollReveal animation="slide-up" delay={100}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-medium mb-2">Renewable Energy Integration in Rural Areas</h3>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Duration:</span> 2019-2022
                  </p>
                  <p className="text-sm mb-4">
                    Developed and implemented solar energy solutions for remote rural communities, improving energy
                    access and reducing dependency on fossil fuels.
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Principal Investigator:</span> Dr. Ahmed Benali, Department of Physics
                  </p>
                </div>
              </ScrollReveal>

              {/* Completed Project 2 */}
              <ScrollReveal animation="slide-up" delay={200}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-medium mb-2">Mathematical Modeling of Epidemic Spread</h3>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Duration:</span> 2020-2023
                  </p>
                  <p className="text-sm mb-4">
                    Developed advanced mathematical models to predict the spread of infectious diseases in urban
                    environments, contributing to public health planning and intervention strategies.
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Principal Investigator:</span> Dr. Karim Belkebir, Department of
                    Mathematics
                  </p>
                </div>
              </ScrollReveal>

              {/* Completed Project 3 */}
              <ScrollReveal animation="slide-up" delay={300}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-medium mb-2">Drought-Resistant Crop Varieties</h3>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Duration:</span> 2018-2022
                  </p>
                  <p className="text-sm mb-4">
                    Identified and developed crop varieties with enhanced drought resistance, improving agricultural
                    productivity in arid regions of Algeria.
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Principal Investigator:</span> Dr. Ayoub Ould Mohamed, Department of
                    Agronomy
                  </p>
                </div>
              </ScrollReveal>

              {/* Completed Project 4 */}
              <ScrollReveal animation="slide-up" delay={400}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-medium mb-2">Green Chemistry for Industrial Waste Treatment</h3>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Duration:</span> 2019-2023
                  </p>
                  <p className="text-sm mb-4">
                    Developed environmentally friendly methods for treating industrial waste, reducing environmental
                    pollution and promoting sustainable industrial practices.
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Principal Investigator:</span> Dr. Leila Hamidouche, Department of
                    Chemistry
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Call to Action */}
            <ScrollReveal animation="fade-in">
              <div className="bg-[#3d6e70] text-white p-8 rounded-lg text-center">
                <h2 className="text-3xl font-serif mb-4">Collaborate With Us</h2>
                <p className="max-w-2xl mx-auto mb-6">
                  Interested in collaborating on research projects? We welcome partnerships with academic institutions,
                  industry, and government organizations.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-[#3d6e70] px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Contact Our Research Office
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
