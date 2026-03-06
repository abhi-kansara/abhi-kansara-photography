import Image from "next/image";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900 font-display antialiased">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow pt-28 md:pt-32">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20">
            
            {/* Section 1: Intro */}
            <section className="grid grid-cols-1 md:grid-cols-13 gap-12 lg:gap-20 items-center py-12 md:py-24">
              {/* Left: Text */}
              <div className="order-2 md:order-1 md:col-span-7 lg:col-span-8 flex flex-col gap-6">
                <div>
                  <h2 className="font-mono text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-2">
                    The Photographer
                  </h2>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                    Hello, I&apos;m <span className="italic font-light">Abhi</span>.
                  </h1>
                </div>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed font-light">
                  <p>
                    My name is Abhi Kansara, a passionate photographer and visual storyteller with over seven years of professional experience in wedding and event photography. My journey with photography began in India, where I had the opportunity to capture countless meaningful moments and celebrations through my lens.
                  </p>
                  <p>
                    For me, photography is more than just taking pictures it is about preserving emotions, authenticity, and memories that last a lifetime. I believe that the most powerful images are the ones that feel natural and genuine, capturing the real connection and joy shared in every moment.
                  </p>
                  <p>
                    I specialize in wedding photography, event photography, portraits, and lifestyle photography, always focusing on creating images that feel elegant, natural, and timeless.
                  </p>
                  <p>
                    Currently based in London, Ontario, Canada, I continue to grow my photography journey by working with clients from diverse cultures and backgrounds. My goal is always the same: to create beautiful, meaningful photographs that tell your story and preserve your most special moments.
                  </p>
                  <p>
                    Whether it&apos;s a wedding, engagement, family session, or special event, I am dedicated to capturing memories that you will cherish for years to come.
                  </p>
                </div>
              </div>
              
              {/* Right: Photo */}
              <div className="order-1 md:order-2 md:col-span-6 lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="aspect-[3/4] relative bg-white p-4 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 ease-out">
                    <div className="relative w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                      <Image 
                        src="/Abhi.jpeg" 
                        alt="Portrait of Abhi Kansara"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Why I Do This */}
            <section className="grid grid-cols-1 md:grid-cols-13 gap-12 lg:gap-20 items-center py-12 md:py-24 border-t border-slate-100">
              {/* Left: Photo */}
              <div className="md:col-span-6 lg:col-span-5 relative">
                 <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
                  <Image 
                    src="/APK000467.jpeg" 
                    alt="Photographer in action"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                 {/* Decorative element */}
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-slate-50 rounded-full -z-10"></div>
              </div>

              {/* Right: Text */}
              <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-6">
                <div>
                  <h2 className="font-mono text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-2">
                    My Philosophy
                  </h2>
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                    Why I Do This
                  </h3>
                </div>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed font-light">
                  <p>
                    Photography, for me, is about more than just creating beautiful images it is about capturing the emotions, connections, and stories that make every moment meaningful. The smiles, the laughter, the quiet moments, and the celebrations are memories that deserve to be preserved forever.
                  </p>
                  <p>
                    Growing up around weddings and celebrations in India, I saw how important photographs become over time. They are not just pictures; they are memories that families return to again and again. Knowing that my work becomes part of someone’s story is what inspires me to keep doing what I love.
                  </p>
                  <p>
                    Every event and every couple has a unique story, and my goal is to capture those moments in the most natural and authentic way possible. I believe the best photographs are the ones that feel real moments that bring back the same emotions even years later.
                  </p>
                  <p>
                    This passion for storytelling through images is the reason I do what I do.
                  </p>
                </div>
              </div>
            </section>

            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
