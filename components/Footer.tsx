import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="py-16 border-t border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Image
              alt="Abhi Kansara Photography logo"
              src="/Logo.png"
              width={300}
              height={300}
              className="h-10 w-auto"
              priority
            />
            <div>
              <h2 className="text-primary font-logo font-bold text-xl tracking-tight uppercase leading-none">ABHI KANSARA</h2>
              <h2 className="text-primary font-logo font-bold text-xl tracking-tight uppercase leading-none">PHOTOGRAPHY</h2>
            </div>                  </div>
          <p className="font-serif text-2xl md:text-3xl leading-snug mb-8 max-w-sm">
            Interested in working together? <br />
            <a className="underline decoration-1 underline-offset-4 hover:text-slate-600 transition-colors italic" href="mailto:abhikansaraphotography@gmail.com">Get in touch.</a>
          </p>
        </div>
        <div>
          <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Sitemap</h5>
          <ul className="space-y-3">
            <li><a className="font-display text-sm hover:text-slate-500 transition-colors" href="#about">About</a></li>
            <li><a className="font-display text-sm hover:text-slate-500 transition-colors" href="#service">Service</a></li>
            <li><a className="font-display text-sm hover:text-slate-500 transition-colors" href="#works">Work</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Socials</h5>
          <ul className="space-y-3">
            <li><a className="font-display text-sm hover:text-slate-500 transition-colors flex items-center gap-2" href="https://www.instagram.com/abhikansara_photography">Instagram <span className="material-symbols-outlined text-[14px]">arrow_outward</span></a></li>
            {/* <li><a className="font-display text-sm hover:text-slate-500 transition-colors flex items-center gap-2" href="#">Twitter <span className="material-symbols-outlined text-[14px]">arrow_outward</span></a></li> */}
            <li><a className="font-display text-sm hover:text-slate-500 transition-colors flex items-center gap-2" href="https://www.linkedin.com/in/abhikansaraphotography">LinkedIn <span className="material-symbols-outlined text-[14px]">arrow_outward</span></a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-slate-100">
        <p className="font-mono text-xs text-slate-400 uppercase tracking-wider">© 2026 Abhi Kansara. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="font-mono text-xs text-slate-400 hover:text-primary uppercase tracking-wider" href="#">Privacy Policy</a>
          <a className="font-mono text-xs text-slate-400 hover:text-primary uppercase tracking-wider" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
