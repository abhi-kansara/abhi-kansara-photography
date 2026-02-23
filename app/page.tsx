import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <header className="mb-12 border-b border-zinc-800 pb-6">
        <h1 className="text-4xl font-bold tracking-tighter">ABHI KANSARA</h1>
        <p className="text-zinc-400 mt-2">Visual Storyteller & Photographer</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* This is where we will map through your friend's photos later */}
        <div className="aspect-square bg-zinc-900 animate-pulse rounded-lg"></div>
        <div className="aspect-square bg-zinc-900 animate-pulse rounded-lg"></div>
        <div className="aspect-square bg-zinc-900 animate-pulse rounded-lg"></div>
      </section>
    </main>
  )
}