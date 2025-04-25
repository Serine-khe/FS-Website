import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative bg-[#315f7d] py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-end mb-8">
              <div className="flex items-center">
                <Image src="/logo.png" alt="Faculty of Sciences Logo" width={60} height={60} />
                <div className="ml-2 text-white">
                  <div className="text-sm font-medium">FACULTY OF SCIENCES</div>
                  <div className="text-sm">UNIVERSITY OF BOUMERDES</div>
                </div>
              </div>
            </div>

            <ScrollReveal>
              <div className="text-center text-white mb-12">
                <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Community</h1>
                <p className="max-w-2xl mx-auto">
                  Meet the brilliant minds shaping the future of science at the Faculty of Sciences. Our community
                  includes distinguished professors, researchers, and alumni who contribute to scientific advancement
                  and innovation.
                </p>
              </div>
            </ScrollReveal>

            {/* Faculty Profiles - First Row */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Profile 1 */}
              <ScrollReveal direction="left" delay={200}>
                <div className="bg-[#d9d9d9]/80 rounded-lg p-6 backdrop-blur-sm transform transition-transform duration-300 hover:scale-105">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-32 h-32 rounded-full bg-white overflow-hidden mb-4">
                      <Image
                        src="/faculty-yahiatene.jpg"
                        alt="YAHIATENE Youssef"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <blockquote className="text-center italic mb-4">
                      "highlighted that "about 80% of cybersecurity threats originate from within institutions,"
                      emphasizing the importance of internal security awareness."
                    </blockquote>
                    <div className="text-center">
                      <h3 className="text-xl font-bold">YAHIATENE Youssef</h3>
                      <p className="text-sm">PhD Computer Science Department Head</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Profile 2 */}
              <ScrollReveal direction="right" delay={200}>
                <div className="bg-[#d9d9d9]/80 rounded-lg p-6 backdrop-blur-sm transform transition-transform duration-300 hover:scale-105">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-32 h-32 rounded-full bg-white overflow-hidden mb-4">
                      <Image
                        src="/faculty-benzenati.jpg"
                        alt="BENZENATI Tayeb"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <blockquote className="text-center italic mb-4">
                      "Meet the brilliant minds shaping the future of science—our esteemed professors, dedicated to
                      innovation, research, and inspiring the next generation of scholars."
                    </blockquote>
                    <div className="text-center">
                      <h3 className="text-xl font-bold">BENZENATI Tayeb</h3>
                      <p className="text-sm">Phd Computer Science & AI researcher, Professor at FS Umbb</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Faculty Profiles - Second Row */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Profile 3 */}
              <ScrollReveal direction="left" delay={400}>
                <div className="bg-[#d9d9d9]/80 rounded-lg p-6 backdrop-blur-sm transform transition-transform duration-300 hover:scale-105">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-32 h-32 rounded-full bg-white overflow-hidden mb-4">
                      <Image
                        src="/faculty-kamel-baddari.jpg"
                        alt="Dr. Kamel Baddari"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <blockquote className="text-center italic mb-4">
                      " earned a State Engineer degree in Geophysics from the National Institute of Hydrocarbons in
                      Boumerdes, where he graduated top of his class.positioned as math and physics professor "
                    </blockquote>
                    <div className="text-center">
                      <h3 className="text-xl font-bold">Dr. Kamel Baddari</h3>
                      <p className="text-sm">Minister of Higher Education and Scientific Research</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Profile 4 */}
              <ScrollReveal direction="right" delay={400}>
                <div className="bg-[#d9d9d9]/80 rounded-lg p-6 backdrop-blur-sm transform transition-transform duration-300 hover:scale-105">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-32 h-32 rounded-full bg-white overflow-hidden mb-4">
                      <Image
                        src="/faculty-assia-massoud.jpg"
                        alt="Assia Massoud Belkadhi"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <blockquote className="text-center italic mb-4">
                      "Meet the brilliant minds shaping the future of science—our esteemed professors, dedicated to
                      innovation, research, and inspiring the next generation of scholars."
                    </blockquote>
                    <div className="text-center">
                      <h3 className="text-xl font-bold">Assia Massoud Belkadhi</h3>
                      <p className="text-sm">Professor</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Alumni Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl font-serif text-center mb-12">Distinguished Alumni</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Alumni 1 */}
              <ScrollReveal direction="up" delay={200}>
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="h-48 relative">
                    <Image src="/alumni-mohammed-amine.jpg" alt="Alumni" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">Dr. Mohammed Amine</h3>
                    <p className="text-sm text-gray-600 mb-3">Class of 2010 - Computer Science</p>
                    <p className="text-sm mb-4">
                      Leading researcher in artificial intelligence at Google Research, with over 50 publications in
                      top-tier conferences.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Alumni 2 */}
              <ScrollReveal direction="up" delay={400}>
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="h-48 relative">
                    <Image src="/alumni-leila-benali.jpg" alt="Alumni" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">Dr. Leila Benali</h3>
                    <p className="text-sm text-gray-600 mb-3">Class of 2005 - Chemistry</p>
                    <p className="text-sm mb-4">
                      Award-winning chemist and entrepreneur, founder of a biotech company specializing in sustainable
                      materials.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Alumni 3 */}
              <ScrollReveal direction="up" delay={600}>
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="h-48 relative">
                    <Image src="/alumni-ahmed-taleb.jpg" alt="Alumni" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">Prof. Ahmed Taleb</h3>
                    <p className="text-sm text-gray-600 mb-3">Class of 1998 - Physics</p>
                    <p className="text-sm mb-4">
                      Renowned physicist working on quantum computing at MIT, recipient of the National Medal of
                      Science.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Student Life Section */}
        <div className="bg-[#f5f5f5] py-16">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl font-serif text-center mb-12">Student Life</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Student Organizations */}
              <ScrollReveal direction="left" delay={200}>
                <div>
                  <h3 className="text-2xl font-medium mb-6">Student Organizations</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-16 h-16 mr-4 relative flex-shrink-0">
                        <Image src="/science-club.jpg" alt="DevUp" width={64} height={64} className="rounded" />
                      </div>
                      <div>
                        <h4 className="font-medium">DevUp</h4>
                        <p className="text-sm">
                          Organizing workshops, competitions, and science fairs to promote scientific curiosity and
                          innovation.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-16 h-16 mr-4 relative flex-shrink-0">
                        <Image
                          src="/robotics-team.jpg"
                          alt="Robotics Team"
                          width={64}
                          height={64}
                          className="rounded"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">Robotics Team</h4>
                        <p className="text-sm">
                          Award-winning team participating in national and international robotics competitions.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-16 h-16 mr-4 relative flex-shrink-0">
                        <Image
                          src="/environmental-society.jpg"
                          alt="Environmental Society"
                          width={64}
                          height={64}
                          className="rounded"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">Environmental Society</h4>
                        <p className="text-sm">
                          Promoting sustainability and environmental awareness through campus initiatives and community
                          outreach.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Campus Activities */}
              <ScrollReveal direction="right" delay={200}>
                <div>
                  <h3 className="text-2xl font-medium mb-6">Campus Activities</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden">
                      <div className="h-48 relative">
                        <Image src="/science-fair.jpg" alt="Annual Science Fair" fill className="object-cover" />
                      </div>
                      <div className="p-4 bg-white">
                        <h4 className="font-medium">Annual Science Fair</h4>
                        <p className="text-sm">
                          Showcasing student research projects and innovations to the university community and industry
                          partners.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <div className="h-48 relative">
                        <Image
                          src="/international-conferences.jpg"
                          alt="International Conferences"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h4 className="font-medium">International Conferences</h4>
                        <p className="text-sm">
                          Hosting academic conferences that bring together researchers from around the world to share
                          knowledge.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}