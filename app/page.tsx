import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { EnhancedButton } from "@/components/enhanced-button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function Home() {
  const heroSlides = [
    {
      image: "/campus-hero.jpg",
      title: "University of M'Hamed Bougara of Boumerdès Faculty of science",
      subtitle:
        "The Faculty of Sciences, established in 1998, is part of the University of Boumerdès in Algeria. It is located in the city of Boumerdès.",
      buttonText: "learn more",
      buttonLink: "/history",
    },
    {
      image: "/campus2.jpg",
      title: "Discover Excellence in Scientific Education",
      subtitle:
        "Join our community of researchers, professors, and students dedicated to advancing knowledge and innovation.",
      buttonText: "explore programs",
      buttonLink: "/programs",
    },
    {
      image: "/campus3.jpg",
      title: "Research & Innovation at UMBB",
      subtitle:
        "Our faculty leads cutting-edge research across multiple scientific disciplines with state-of-the-art facilities.",
      buttonText: "view research",
      buttonLink: "/research-laboratories",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero Slideshow */}
      <HeroSlideshow slides={heroSlides} />

      {/* Welcome Section */}
      <section className="py-16 bg-[#F4EAE0]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex items-center justify-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif">Welcome to the faculty of science</h2>
              <Image src="/logo-dark.png" alt="Faculty of Sciences Logo" width={80} height={80} className="ml-4" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* History Card */}
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-2 duration-300">
                <div className="h-48 relative">
                  <Image src="/history.jpg" alt="History" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-center mb-4 text-[#205375]">History</h3>
                  <p className="text-sm mb-6">
                    The Faculty of Science at UMBB is a place of academic excellence, fostering innovation in mathematics,
                    physics, chemistry, biology, computer science, agronomy, and sports sciences. With a rich history...
                  </p>
                  <div className="text-center">
                    <EnhancedButton href="/history" variant="primary" size="sm">
                      learn more
                    </EnhancedButton>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Organization Card */}
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-2 duration-300">
                <div className="h-48 relative">
                  <Image src="/organization.jpg" alt="Organization" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-center mb-4 text-[#205375]">Organization</h3>
                  <p className="text-sm mb-6">
                    The Faculty of Science at UMBB is structured into seven departments, supported by a diverse academic
                    community of students, faculty, and researchers. With state-of-the-art laboratories...
                  </p>
                  <div className="text-center">
                    <EnhancedButton href="/organization" variant="primary" size="sm">
                      learn more
                    </EnhancedButton>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Community Card */}
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-2 duration-300">
                <div className="h-48 relative">
                  <Image src="/community.jpg" alt="Community" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-center mb-4 text-[#205375]">Community</h3>
                  <p className="text-sm mb-6">
                    The Faculty of Science at UMBB is home to a vibrant academic community, including renowned
                    professors, researchers, and alumni who have made significant contributions to science and
                    education...
                  </p>
                  <div className="text-center">
                    <EnhancedButton href="/community" variant="primary" size="sm">
                      learn more
                    </EnhancedButton>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 bg-[#3D6E70] text-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-white">News From FS</h2>
              <Link href="/actuality" className="text-white hover:underline flex items-center">
                View all news <span className="ml-2">→</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Event 1 */}
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm hover:bg-white/20 transition-colors duration-300 transform hover:-translate-y-2 duration-300">
                <div className="h-48 relative mb-4 overflow-hidden rounded-sm">
                  <Image src="/event1.jpg" alt="A2I 2025 Conference" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex items-center text-sm mb-2 text-[#F4EAE0]">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>April 16-17, 2025</span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>FS UMBB</span>
                </div>
                <h3 className="text-xl font-medium mb-2">A2I 2025: National Second Edition AI Conference</h3>
                <p className="text-sm mb-4">
                  Join us for the second national edition of the Artificial Intelligence and Innovation conference,
                  featuring keynote speakers from industry and academia, workshops, and networking opportunities.
                </p>
                <Link
                  href="/actuality/a2i-2025"
                  className="text-[#F4EAE0] hover:underline inline-flex items-center group"
                >
                  Read more{" "}
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Event 2 */}
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm hover:bg-white/20 transition-colors duration-300 transform hover:-translate-y-2 duration-300">
                <div className="h-48 relative mb-4 overflow-hidden rounded-sm">
                  <Image src="/event2.jpg" alt="TedX University of Boumerdes" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex items-center text-sm mb-2 text-[#F4EAE0]">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>April 26, 2025</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <h3 className="text-xl font-medium mb-2">TedX University of Boumerdes</h3>
                <p className="text-sm mb-4">
                  Experience thought-provoking talks from innovators, creators, and change-makers at the first-ever TedX
                  event hosted by the University of Boumerdes. This year's theme: "Bridging Horizons."
                </p>
                <Link
                  href="/actuality/tedx-boumerdes"
                  className="text-[#F4EAE0] hover:underline inline-flex items-center group"
                >
                  Read more{" "}
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Event 3 */}
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm hover:bg-white/20 transition-colors duration-300 transform hover:-translate-y-2 duration-300">
                <div className="h-48 relative mb-4 overflow-hidden rounded-sm">
                  <Image src="/event3.jpg" alt="Boumerdes Smart City Hackathon" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex items-center text-sm mb-2 text-[#F4EAE0]">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>December 19-21, 2024</span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Computer Science Dept.</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Boumerdes Smart City Hackathon</h3>
                <p className="text-sm mb-4">
                  Calling all developers, designers, and innovators! Join us for a 48-hour hackathon focused on
                  developing smart solutions for urban challenges in Boumerdes. Cash prizes and internship opportunities
                  await the winning teams.
                </p>
                <Link
                  href="/actuality/smart-city-hackathon"
                  className="text-[#F4EAE0] hover:underline inline-flex items-center group"
                >
                  Read more{" "}
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
