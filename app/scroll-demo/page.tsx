import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"

export default function ScrollDemoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-[#3d6e70] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Scroll Animation Demo</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Scroll down to see various animation effects as elements come into view
            </p>
          </div>
        </div>

        {/* Fade In Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal type="fade" className="mb-12 text-center">
              <h2 className="text-3xl font-serif mb-4">Fade In Animation</h2>
              <p className="max-w-2xl mx-auto">
                This section simply fades in when it enters the viewport. This is a subtle effect that works well for
                most content.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ScrollReveal type="fade" delay={200} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Simple Fade</h3>
                <p>
                  Elements fade in smoothly as they enter the viewport, creating a clean and professional appearance.
                </p>
              </ScrollReveal>

              <ScrollReveal type="fade" delay={400} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Delayed Fade</h3>
                <p>
                  This element has a slight delay before it starts to fade in, creating a sequential appearance effect.
                </p>
              </ScrollReveal>

              <ScrollReveal type="fade" delay={600} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Longer Delay</h3>
                <p>
                  With an even longer delay, this element completes the sequence, drawing the user's attention across
                  the page.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Slide In Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollReveal type="fade-slide" direction="up" className="mb-12 text-center">
              <h2 className="text-3xl font-serif mb-4">Slide In Animation</h2>
              <p className="max-w-2xl mx-auto">
                Elements can slide in from different directions while fading in, adding more visual interest to the
                page.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ScrollReveal type="fade-slide" direction="left" className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Slide From Right</h3>
                <p>This element slides in from the right side of the screen as it enters the viewport.</p>
              </ScrollReveal>

              <ScrollReveal type="fade-slide" direction="right" className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Slide From Left</h3>
                <p>This element slides in from the left side of the screen as it enters the viewport.</p>
              </ScrollReveal>

              <ScrollReveal type="fade-slide" direction="up" className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Slide From Bottom</h3>
                <p>This element slides up from the bottom as it enters the viewport.</p>
              </ScrollReveal>

              <ScrollReveal type="fade-slide" direction="down" className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Slide From Top</h3>
                <p>This element slides down from the top as it enters the viewport.</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Scale Animation */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal type="scale" className="mb-12 text-center">
              <h2 className="text-3xl font-serif mb-4">Scale Animation</h2>
              <p className="max-w-2xl mx-auto">
                Elements can scale up as they enter the viewport, creating a subtle but engaging effect.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[1, 2, 3].map((i) => (
                <ScrollReveal key={i} type="scale" delay={i * 200} className="text-center">
                  <div className="h-48 w-48 mx-auto bg-[#4b6b3c] rounded-full flex items-center justify-center text-white text-4xl mb-4">
                    {i}
                  </div>
                  <h3 className="text-xl font-medium">Scale Animation {i}</h3>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Combined Effects */}
        <section className="py-20 bg-[#3d6e70] text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal type="fade-slide" direction="up" className="mb-12 text-center">
              <h2 className="text-3xl font-serif mb-4">Combined Effects</h2>
              <p className="max-w-2xl mx-auto">
                Different animation types can be combined to create more complex and interesting effects.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <ScrollReveal type="fade-slide" direction="left" className="flex items-center">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">Text Content</h3>
                  <p>
                    This text content slides in from the right while the image on the right slides in from the left,
                    creating a converging effect that draws attention to both elements.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal type="fade-slide" direction="right" className="flex items-center">
                <div className="h-64 w-full relative rounded-lg overflow-hidden">
                  <Image src="/campus-hero.jpg" alt="Campus" fill className="object-cover" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Staggered Animation */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal type="fade" className="mb-12 text-center">
              <h2 className="text-3xl font-serif mb-4">Staggered Animation</h2>
              <p className="max-w-2xl mx-auto">
                Multiple elements can be animated with increasing delays to create a staggered effect.
              </p>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              {[1, 2, 3, 4, 5].map((i) => (
                <ScrollReveal
                  key={i}
                  type="fade-slide"
                  direction="up"
                  delay={i * 150}
                  className="bg-gray-100 p-4 mb-3 rounded"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#4b6b3c] rounded-full flex items-center justify-center text-white mr-4">
                      {i}
                    </div>
                    <p>This is item {i} in the staggered animation sequence.</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
