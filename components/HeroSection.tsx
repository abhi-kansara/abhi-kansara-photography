import Image from "next/image";

export function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 min-h-[calc(100vh-120px)] items-center pb-12">
      {/* Left Column: Typography */}
      <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-center gap-8 order-2 md:order-1">
        <div className="space-y-4">
          <h2 className="font-mono text-xs md:text-sm font-bold tracking-[0.2em] text-slate-500 uppercase">
            Wedding & Event Photographer
          </h2>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-primary tracking-tighter">
            Capturing<br />
            <span className="italic font-light">Life&apos;s</span><br />
            Elegance
          </h1>
          <p className="max-w-md text-slate-600 text-lg leading-relaxed pt-4 font-light">
            Based in London. Creating high-quality, emotional, and storytelling moments.
          </p>
        </div>
        <div className="pt-4">
          <button className="inline-flex items-center gap-3 border-b-2 border-primary pb-1 text-primary transition-all hover:gap-5 hover:opacity-70">
            <span className="font-mono text-sm font-bold uppercase tracking-widest">View Gallery</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
        <div className="flex gap-6 pt-12 md:pt-20">
          <a className="text-slate-400 hover:text-primary transition-colors" href="https://www.instagram.com/abhikansara_photography">
            <span className="sr-only">Instagram</span>
            <span className="font-mono text-xs uppercase border border-slate-200 px-3 py-1 rounded-full hover:border-primary">Instagram</span>
          </a>
          <a className="text-slate-400 hover:text-primary transition-colors" href="https://www.linkedin.com/in/abhikansaraphotography">
            <span className="sr-only">Twitter</span>
            <span className="font-mono text-xs uppercase border border-slate-200 px-3 py-1 rounded-full hover:border-primary">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Right Column: Hero Image */}
      <div className="md:col-span-6 lg:col-span-6 relative h-[60vh] md:h-[80vh] max-h-[700px] w-full order-1 md:order-2">
        <div className="h-full w-full overflow-hidden rounded-t-[10rem] rounded-b-lg border border-slate-200 p-2 bg-white shadow-xl shadow-slate-200/50">
          <div className="relative h-full w-full overflow-hidden rounded-t-[9.5rem] rounded-b-sm">
            <Image
              alt="High fashion portrait of a model with elegant styling"
              className="object-cover object-top transition-transform duration-1000 hover:scale-105"
              src="/IMG_4003.jpeg"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute bottom-8 -left-5 md:-left-10 z-10 hidden md:block">
            <div className="bg-white p-4 shadow-lg rounded-lg border border-slate-100 max-w-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Featured</span>
              </div>
              <p className="font-serif text-lg leading-tight italic">&quot;A Tale of Wedding&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
