import Image from "next/image";

export function SelectedWorks() {
  return (
    <section id="works" className="py-24 border-t border-slate-100">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Frames</h3>
          <p className="font-mono text-sm text-slate-500 max-w-md uppercase tracking-wide">
            Curated collections across weddings, high-profile events, and creative product narratives.
          </p>
        </div>
        <a className="group flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary hover:text-slate-600 transition-colors" href="#">
          View All Projects
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Event Photography */}
        <div className="group cursor-pointer">
          <div className="overflow-hidden rounded-lg mb-4 aspect-[4/5] relative">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
            <Image
              alt="Cinematic shot of a high-profile corporate event or social celebration"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              src="/IMG_6048.jpeg" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="flex justify-between items-start border-t border-slate-200 pt-4">
            <div>
              <h4 className="font-serif text-2xl font-medium text-primary mb-1 group-hover:italic transition-all">Events</h4>
              <p className="font-mono text-xs text-slate-500 uppercase tracking-wider">Concert • Corporate • Social Celebrations</p>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_outward</span>
          </div>
        </div>

        {/* Card 2: Wedding Photography */}
        <div className="group cursor-pointer md:mt-16">
          <div className="overflow-hidden rounded-lg mb-4 aspect-[4/5] relative">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
            <Image
              alt="Elegant wedding portrait capturing a candid, storytelling moment"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              src="/APK000399.jpeg"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="flex justify-between items-start border-t border-slate-200 pt-4">
            <div>
              <h4 className="font-serif text-2xl font-medium text-primary mb-1 group-hover:italic transition-all">Weddings | Pre-weddings</h4>
              <p className="font-mono text-xs text-slate-500 uppercase tracking-wider">Destination • Intimate • Traditional</p>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_outward</span>
          </div>
        </div>

        {/* Card 3: Product Photography */}
        <div className="group cursor-pointer">
          <div className="overflow-hidden rounded-lg mb-4 aspect-[4/5] relative">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
            <Image
              alt="Clean and minimalist high-end product photography"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              src="/APK000460.jpeg" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="flex justify-between items-start border-t border-slate-200 pt-4">
            <div>
              <h4 className="font-serif text-2xl font-medium text-primary mb-1 group-hover:italic transition-all">Products</h4>
              <p className="font-mono text-xs text-slate-500 uppercase tracking-wider">Lifestyle • E-commerce • Brand Stories</p>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_outward</span>
          </div>
        </div>
      </div>
    </section>
  );
}
