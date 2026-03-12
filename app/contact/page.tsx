"use client";

import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import BackButton from "@/components/BackButton";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-accent-ivory text-black selection:bg-accent-gold selection:text-white">
      <Navigation />
      <BackButton />

      <div className="flex-1 w-full pt-48 pb-32 px-6 sm:px-12 flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Side: Copy */}
            <AnimatedSection className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
              <span className="text-accent-gold uppercase tracking-[0.2em] text-sm mb-4 font-bold block">Inquiries</span>
              <h1 className="font-serif text-5xl sm:text-7xl text-slate-900 mb-6">
                Tell Me Your <br className="hidden lg:block" /><span className="italic text-slate-600">Story</span>
              </h1>
              <p className="text-slate-600 font-light mb-8 text-lg">
                Currently accepting commissions worldwide. Please provide some details about your event, and my team will be in touch securely.
              </p>
              <div className="hidden lg:block w-16 h-px bg-accent-gold" />
            </AnimatedSection>

            {/* Right Side: Form */}
            <AnimatedSection className="lg:col-span-7" delay={0.2}>
              <form className="flex flex-col gap-10 text-left w-full max-w-xl mx-auto lg:mx-0 p-8 sm:p-12 bg-white shadow-2xl rounded-sm border border-slate-100">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">Name(s)</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-slate-200 pb-3 text-slate-900 focus:outline-none focus:border-accent-gold transition-colors duration-300 placeholder:text-slate-300 text-lg"
                    placeholder="John & Jane"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-slate-200 pb-3 text-slate-900 focus:outline-none focus:border-accent-gold transition-colors duration-300 placeholder:text-slate-300 text-lg"
                    placeholder="hello@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="details" className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">Event Details</label>
                  <textarea
                    id="details"
                    rows={4}
                    className="w-full bg-transparent border-b border-slate-200 pb-3 text-slate-900 focus:outline-none focus:border-accent-gold transition-colors duration-300 resize-none placeholder:text-slate-300 text-lg"
                    placeholder="Date, Venue, Number of Guests, Vision..."
                  />
                </div>

                <button
                  type="button"
                  className="mt-4 self-stretch sm:self-start px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold text-white bg-slate-900 hover:bg-accent-gold transition-all duration-300 shadow-md hover:shadow-xl"
                  onClick={(e) => { e.preventDefault(); alert("Form submitted successfully!"); }}
                >
                  Send Inquiry
                </button>
              </form>
            </AnimatedSection>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
