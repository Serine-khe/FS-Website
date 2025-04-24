import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Search, BookOpen, FileText, Download, BookMarked, Bookmark, Filter } from "lucide-react"

export default function EBibliotheque() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 bg-[#f5f5f5]">
        {/* Hero Section */}
        <div className="relative h-64 bg-[#3d6e70]">
          <div className="absolute inset-0">
            <Image src="/library-bg.jpg" alt="Library" fill className="object-cover opacity-30" />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-center">E-Bibliothèque</h1>
            <p className="text-lg max-w-2xl text-center">
              Access our digital library resources, including academic journals, e-books, research papers, and theses
            </p>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white py-8 shadow-md">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for books, journals, articles..."
                  className="w-full border border-gray-300 rounded-md py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#3d6e70] focus:border-transparent"
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#3d6e70]"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-between mt-4 text-sm">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-[#3d6e70]">
                    <Filter className="h-4 w-4 mr-1" />
                    Filters
                  </button>
                  <span className="text-gray-400">|</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Resource type:</span>
                    <select className="border-none bg-transparent text-[#3d6e70] focus:outline-none">
                      <option value="all">All</option>
                      <option value="books">Books</option>
                      <option value="journals">Journals</option>
                      <option value="articles">Articles</option>
                      <option value="theses">Theses</option>
                    </select>
                  </div>
                </div>
                <Link href="/e-bibliotheque/advanced-search" className="text-[#3d6e70] hover:underline">
                  Advanced Search
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Categories Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-6">Resource Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/e-bibliotheque/books"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1 hover:bg-[#f9f9f9]"
              >
                <BookOpen className="h-10 w-10 text-[#4b6b3c] mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-medium mb-2">E-Books</h3>
                <p className="text-sm text-gray-600">
                  Access our collection of digital textbooks and reference materials
                </p>
              </Link>

              <Link
                href="/e-bibliotheque/journals"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1 hover:bg-[#f9f9f9]"
              >
                <BookMarked className="h-10 w-10 text-[#4b6b3c] mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-medium mb-2">Academic Journals</h3>
                <p className="text-sm text-gray-600">Browse scientific journals across various disciplines</p>
              </Link>

              <Link
                href="/e-bibliotheque/articles"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1 hover:bg-[#f9f9f9]"
              >
                <FileText className="h-10 w-10 text-[#4b6b3c] mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-medium mb-2">Research Papers</h3>
                <p className="text-sm text-gray-600">Explore research papers published by our faculty and students</p>
              </Link>

              <Link
                href="/e-bibliotheque/theses"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1 hover:bg-[#f9f9f9]"
              >
                <Bookmark className="h-10 w-10 text-[#4b6b3c] mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-medium mb-2">Theses & Dissertations</h3>
                <p className="text-sm text-gray-600">Access graduate and doctoral theses from our university</p>
              </Link>
            </div>
          </div>

          {/* Featured Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif mb-6">Featured Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Resource 1 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="h-48 relative">
                  <Image src="/resource1.jpg" alt="Journal of Computer Science" fill className="object-cover" />
                  <div className="absolute top-2 right-2 bg-[#3d6e70] text-white text-xs px-2 py-1 rounded">
                    Journal
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">Journal of Computer Science and Applications</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Latest volume featuring research on artificial intelligence, machine learning, and cybersecurity.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Updated: May 2025</span>
                    <Link
                      href="/e-bibliotheque/journals/computer-science"
                      className="text-[#3d6e70] hover:underline text-sm flex items-center"
                    >
                      Access <Download className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Resource 2 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="h-48 relative">
                  <Image src="/resource2.jpg" alt="Physics Textbook" fill className="object-cover" />
                  <div className="absolute top-2 right-2 bg-[#4b6b3c] text-white text-xs px-2 py-1 rounded">E-Book</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">Modern Physics: Principles and Applications</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Comprehensive textbook covering quantum mechanics, relativity, and nuclear physics.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Published: 2024</span>
                    <Link
                      href="/e-bibliotheque/books/modern-physics"
                      className="text-[#3d6e70] hover:underline text-sm flex items-center"
                    >
                      Access <Download className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Resource 3 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="h-48 relative">
                  <Image src="/resource3.jpg" alt="Thesis" fill className="object-cover" />
                  <div className="absolute top-2 right-2 bg-[#205375] text-white text-xs px-2 py-1 rounded">Thesis</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">Biodiversity Conservation in Mediterranean Ecosystems</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Doctoral thesis examining conservation strategies for endemic species in North African coastal
                    regions.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Defended: March 2025</span>
                    <Link
                      href="/e-bibliotheque/theses/biodiversity-conservation"
                      className="text-[#3d6e70] hover:underline text-sm flex items-center"
                    >
                      Access <Download className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Database Access */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-serif mb-6">Academic Databases</h2>
            <p className="mb-6">
              The Faculty of Sciences provides access to the following international academic databases. Please note
              that access is restricted to UMBB students and staff.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="https://www.sciencedirect.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 rounded p-4 hover:border-[#3d6e70] transition-colors flex items-center"
              >
                <Image src="/sciencedirect-logo.png" alt="Science Direct" width={40} height={40} className="mr-3" />
                <div>
                  <h3 className="font-medium">Science Direct</h3>
                  <p className="text-xs text-gray-600">Full-text scientific database</p>
                </div>
              </Link>

              <Link
                href="https://www.scopus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 rounded p-4 hover:border-[#3d6e70] transition-colors flex items-center"
              >
                <Image src="/scopus-logo.png" alt="Scopus" width={40} height={40} className="mr-3" />
                <div>
                  <h3 className="font-medium">Scopus</h3>
                  <p className="text-xs text-gray-600">Abstract and citation database</p>
                </div>
              </Link>

              <Link
                href="https://www.webofknowledge.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 rounded p-4 hover:border-[#3d6e70] transition-colors flex items-center"
              >
                <Image src="/web-of-science-logo.png" alt="Web of Science" width={40} height={40} className="mr-3" />
                <div>
                  <h3 className="font-medium">Web of Science</h3>
                  <p className="text-xs text-gray-600">Citation indexing service</p>
                </div>
              </Link>

              <Link
                href="https://www.ieee.org/publications/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 rounded p-4 hover:border-[#3d6e70] transition-colors flex items-center"
              >
                <Image src="/ieee-logo.png" alt="IEEE Xplore" width={40} height={40} className="mr-3" />
                <div>
                  <h3 className="font-medium">IEEE Xplore</h3>
                  <p className="text-xs text-gray-600">Engineering and technology research</p>
                </div>
              </Link>

              <Link
                href="https://www.jstor.org"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 rounded p-4 hover:border-[#3d6e70] transition-colors flex items-center"
              >
                <Image src="/jstor-logo.png" alt="JSTOR" width={40} height={40} className="mr-3" />
                <div>
                  <h3 className="font-medium">JSTOR</h3>
                  <p className="text-xs text-gray-600">Digital library of academic journals</p>
                </div>
              </Link>

              <Link
                href="https://www.proquest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 rounded p-4 hover:border-[#3d6e70] transition-colors flex items-center"
              >
                <Image src="/proquest-logo.png" alt="ProQuest" width={40} height={40} className="mr-3" />
                <div>
                  <h3 className="font-medium">ProQuest</h3>
                  <p className="text-xs text-gray-600">Dissertations and theses database</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-[#3d6e70] text-white p-8 rounded-lg">
            <h2 className="text-2xl font-serif mb-6">Need Help?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl mb-4">Library Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-2"></span>
                    <span>Document delivery service for articles not available in our databases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-2"></span>
                    <span>Research assistance and literature search support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-2"></span>
                    <span>Citation management tools and training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-2"></span>
                    <span>Workshops on academic writing and publishing</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-4">Contact the Library</h3>
                <p className="mb-4">
                  Our librarians are available to assist you with your research needs and provide guidance on using our
                  digital resources.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-[#3d6e70] px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
