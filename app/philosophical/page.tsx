import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import TerminalText from "@/components/terminal-text"

export default function PhilosophicalPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to main</span>
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-fuchsia-300">
            Philosophical Underpinnings
          </h1>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-fuchsia-300">Resistance as Methodology</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The Rufo Test approaches reactionary discourse as a predictable system that can be analyzed, understood,
                and countered. By treating oppression as a structured, analyzable phenomenon, we transform defensive
                postures into proactive strategies.
              </p>
              <div className="border border-fuchsia-800/50 rounded-lg p-5 bg-black/40">
                <TerminalText
                  text="Analyzing reactionary patterns... Predictive model engaged... Resistance protocols activated."
                  className="text-fuchsia-400"
                />
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-fuchsia-300">Queer Theory Intersection</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The Rufo Test draws from queer theory in its approach to challenging normative narrative structures. By
                revealing the constructedness of dominant discourse, we create space for multiplicitious identities and
                ways of being.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border border-fuchsia-800/30 rounded-lg bg-black/40">
                  <p className="text-center text-fuchsia-400">Challenging norms</p>
                </div>
                <div className="p-4 border border-fuchsia-800/30 rounded-lg bg-black/40">
                  <p className="text-center text-fuchsia-400">Revealing constructs</p>
                </div>
                <div className="p-4 border border-fuchsia-800/30 rounded-lg bg-black/40">
                  <p className="text-center text-fuchsia-400">Creating space</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-fuchsia-300">Broader Cultural Implications</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Power operates as a predictive system with recognizable patterns. Effective resistance requires
                sophisticated mapping of these patterns. Understanding is the first act of transformation.
              </p>
              <div className="border border-fuchsia-800/50 rounded-lg p-5 bg-black/40">
                <p className="text-center text-xl text-fuchsia-300 mb-2">
                  "We do not just resist. We anticipate. We transform."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
