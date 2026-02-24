import Image from "next/image";

const PLACEHOLDER_SRC = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMmU4ZjAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk0YTNiOCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyMCI+UExBQ0VIT0xERVI8L3RleHQ+PC9zdmc+";

export default function Home() {
  return (
    <div className="bg-white text-slate-900 font-display antialiased selection:bg-primary selection:text-white">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

        {/* Sticky Glass Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100 px-6 py-4 md:px-12 lg:px-20 transition-all duration-300">
          <div className="mx-auto flex max-w-360 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl">camera</span>
              <h2 className="text-primary font-serif font-black text-xl tracking-tight uppercase">Alexa | Photo</h2>
            </div>
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-10">
              <a className="text-sm font-mono font-medium text-slate-600 hover:text-primary transition-colors uppercase tracking-widest" href="#">Works</a>
              <a className="text-sm font-mono font-medium text-slate-600 hover:text-primary transition-colors uppercase tracking-widest" href="#">Archive</a>
              <a className="text-sm font-mono font-medium text-slate-600 hover:text-primary transition-colors uppercase tracking-widest" href="#">About</a>
              <a className="text-sm font-mono font-medium text-slate-600 hover:text-primary transition-colors uppercase tracking-widest" href="#">Contact</a>
            </nav>
            {/* Mobile Menu Icon */}
            <button className="md:hidden p-2 text-primary">
              <span className="material-symbols-outlined">menu</span>
            </button>
            {/* CTA Button */}
            <div className="block"> {/* Removed 'hidden md:block' so it always shows */}
              <button className="group relative overflow-hidden bg-primary px-6 py-2.5 text-white transition-all bg-slate-700 hover:bg-slate-900 rounded-full">
                <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-widest">Let&apos;s Talk</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Layout */}
        <main className="grow pt-24 md:pt-0">
          <div className="mx-auto w-full max-w-360 px-6 md:px-12 lg:px-20">

            {/* Hero Split Screen */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 min-h-[calc(100vh-80px)] items-center py-12">
              {/* Left Column: Typography */}
              <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-center gap-8 order-2 md:order-1">
                <div className="space-y-4">
                  <h2 className="font-mono text-xs md:text-sm font-bold tracking-[0.2em] text-slate-500 uppercase">
                    Fashion & Portrait Photographer
                  </h2>
                  <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-primary tracking-tighter">
                    Capturing<br />
                    <span className="italic font-light">Life&apos;s</span><br />
                    Elegance
                  </h1>
                  <p className="max-w-md text-slate-600 text-lg leading-relaxed pt-4 font-light">
                    Based in New York. Creating visual narratives that blend high fashion with intimate storytelling.
                  </p>
                </div>
                <div className="pt-4">
                  <button className="inline-flex items-center gap-3 border-b-2 border-primary pb-1 text-primary transition-all hover:gap-5 hover:opacity-70">
                    <span className="font-mono text-sm font-bold uppercase tracking-widest">View Gallery</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
                <div className="flex gap-6 pt-12 md:pt-20">
                  <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                    <span className="sr-only">Instagram</span>
                    <span className="font-mono text-xs uppercase border border-slate-200 px-3 py-1 rounded-full hover:border-primary">Instagram</span>
                  </a>
                  <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                    <span className="sr-only">Twitter</span>
                    <span className="font-mono text-xs uppercase border border-slate-200 px-3 py-1 rounded-full hover:border-primary">Twitter</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Image */}
              <div className="md:col-span-7 lg:col-span-7 relative h-[60vh] md:h-[85vh] w-full order-1 md:order-2">
                <div className="h-full w-full overflow-hidden rounded-t-[10rem] rounded-b-lg border border-slate-200 p-2 bg-white shadow-xl shadow-slate-200/50">
                  <div className="relative h-full w-full overflow-hidden rounded-t-[9.5rem] rounded-b-sm">
                    <Image
                      alt="High fashion portrait of a model with elegant styling"
                      className="object-cover object-top transition-transform duration-1000 hover:scale-105"
                      src={PLACEHOLDER_SRC}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute bottom-8 -left-5 md:-left-10 z-10 hidden md:block">
                    <div className="bg-white p-4 shadow-lg rounded-lg border border-slate-100 max-w-45">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Featured</span>
                      </div>
                      <p className="font-serif text-lg leading-tight italic">&quot;Vogue Italia: Summer Edition&quot;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected Works Grid */}
            <section className="py-24 border-t border-slate-100">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                  <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Selected Works</h3>
                  <p className="font-mono text-sm text-slate-500 max-w-md uppercase tracking-wide">Curated collections from the past decade of fashion and portrait photography.</p>
                </div>
                <a className="group flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary hover:text-slate-600 transition-colors" href="#">
                  View All Projects
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg mb-4 aspect-4/5 relative">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
                    <Image
                      alt="Fashion model walking down a runway or street in high end clothing"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      src={PLACEHOLDER_SRC}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex justify-between items-start border-t border-slate-200 pt-4">
                    <div>
                      <h4 className="font-serif text-2xl font-medium text-primary mb-1 group-hover:italic transition-all">Editorial</h4>
                      <p className="font-mono text-xs text-slate-500 uppercase tracking-wider">Vogue • Elle • Harper&apos;s Bazaar</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_outward</span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group cursor-pointer md:mt-16">
                  <div className="overflow-hidden rounded-lg mb-4 aspect-4/5 relative">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
                    <Image
                      alt="Close up portrait of a woman with artistic makeup"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      src={PLACEHOLDER_SRC}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex justify-between items-start border-t border-slate-200 pt-4">
                    <div>
                      <h4 className="font-serif text-2xl font-medium text-primary mb-1 group-hover:italic transition-all">Portraiture</h4>
                      <p className="font-mono text-xs text-slate-500 uppercase tracking-wider">Studio • Natural Light • Personal</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_outward</span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg mb-4 aspect-4/5 relative">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
                    <Image
                      alt="Abstract product photography with geometric shapes"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      src={PLACEHOLDER_SRC}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex justify-between items-start border-t border-slate-200 pt-4">
                    <div>
                      <h4 className="font-serif text-2xl font-medium text-primary mb-1 group-hover:italic transition-all">Commercial</h4>
                      <p className="font-mono text-xs text-slate-500 uppercase tracking-wider">Campaigns • Lookbooks • Product</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_outward</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-16 border-t border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined text-primary text-xl">camera</span>
                    <span className="text-primary font-serif font-bold text-lg">ALEXA | PHOTO</span>
                  </div>
                  <p className="font-serif text-2xl md:text-3xl leading-snug mb-8 max-w-sm">
                    Interested in working together? <br />
                    <a className="underline decoration-1 underline-offset-4 hover:text-slate-600 transition-colors italic" href="mailto:hello@alexa.com">Get in touch.</a>
                  </p>
                </div>
                <div>
                  <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Sitemap</h5>
                  <ul className="space-y-3">
                    <li><a className="font-display text-sm hover:text-slate-500 transition-colors" href="#">Works</a></li>
                    <li><a className="font-display text-sm hover:text-slate-500 transition-colors" href="#">Archive</a></li>
                    <li><a className="font-display text-sm hover:text-slate-500 transition-colors" href="#">About</a></li>
                    <li><a className="font-display text-sm hover:text-slate-500 transition-colors" href="#">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Socials</h5>
                  <ul className="space-y-3">
                    <li><a className="font-display text-sm hover:text-slate-500 transition-colors flex items-center gap-2" href="#">Instagram <span className="material-symbols-outlined text-[14px]">arrow_outward</span></a></li>
                    <li><a className="font-display text-sm hover:text-slate-500 transition-colors flex items-center gap-2" href="#">Twitter <span className="material-symbols-outlined text-[14px]">arrow_outward</span></a></li>
                    <li><a className="font-display text-sm hover:text-slate-500 transition-colors flex items-center gap-2" href="#">LinkedIn <span className="material-symbols-outlined text-[14px]">arrow_outward</span></a></li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-slate-100">
                <p className="font-mono text-xs text-slate-400 uppercase tracking-wider">© 2024 Alexa Morgan. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                  <a className="font-mono text-xs text-slate-400 hover:text-primary uppercase tracking-wider" href="#">Privacy Policy</a>
                  <a className="font-mono text-xs text-slate-400 hover:text-primary uppercase tracking-wider" href="#">Terms of Service</a>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}