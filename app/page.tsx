import Link from "next/link"
import { ArrowRight, Terminal } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-900/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 pt-16 pb-24">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="h-5 w-5 text-fuchsia-500" />
            <p className="text-fuchsia-500 font-mono text-sm">FLOAT.Renegade v0.9</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-fuchsia-300">
            The Rufo Test
          </h1>
          <p className="text-xl md:text-2xl text-fuchsia-200 mb-8 max-w-2xl">
            A Critical Methodology of Anticipatory Resistance
          </p>
          <div className="inline-block">
            <Link
              href="#framework"
              className="group flex items-center gap-2 px-6 py-3 bg-fuchsia-900/30 hover:bg-fuchsia-800/50 border border-fuchsia-500/50 rounded-md transition-all duration-300"
            >
              <span>Explore Framework</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="bg-black/80 border-t border-fuchsia-900/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-fuchsia-400">Context and Origin</h2>

            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Who is Christopher F. Rufo?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-500 mt-1">•</span>
                  <span>Conservative activist and writer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-500 mt-1">•</span>
                  <span>Known for anti-critical race theory campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-500 mt-1">•</span>
                  <span>Architect of conservative culture war strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-500 mt-1">•</span>
                  <span>Prominent critic of progressive and queer narratives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section id="framework" className="bg-gradient-to-b from-black to-fuchsia-950/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-fuchsia-400">
              The Rufo Test: Methodological Framework
            </h2>

            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Core Purpose</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-500 mt-1">•</span>
                  <span>Anticipate reactionary responses to progressive ideas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-500 mt-1">•</span>
                  <span>Map potential conservative pushback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-500 mt-1">•</span>
                  <span>Develop preemptive rhetorical strategies</span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Diagnostic Phases</h3>

              <div className="mb-6 border border-fuchsia-800/50 rounded-lg p-5 bg-black/40">
                <h4 className="text-lg font-medium mb-3 text-cyan-400">1. Reactionary Potential Mapping</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">→</span>
                    <span>Identify likely points of conservative resistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">→</span>
                    <span>Understand underlying ideological fears</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">→</span>
                    <span>Predict narrative transformation mechanisms</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6 border border-fuchsia-800/50 rounded-lg p-5 bg-black/40">
                <h4 className="text-lg font-medium mb-3 text-green-400">2. Rhetorical Vulnerability Analysis</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">→</span>
                    <span>Examine how progressive concepts might be deliberately misinterpreted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">→</span>
                    <span>Locate potential soundbite-friendly distortions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">→</span>
                    <span>Anticipate bad-faith argumentative strategies</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6 border border-fuchsia-800/50 rounded-lg p-5 bg-black/40">
                <h4 className="text-lg font-medium mb-3 text-blue-400">3. Institutional Vulnerability Assessment</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>Predict potential institutional pushback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>Map possible legal or policy-based challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>Understand systemic resistance mechanisms</span>
                  </li>
                </ul>
              </div>

              <div className="border border-fuchsia-800/50 rounded-lg p-5 bg-black/40">
                <h4 className="text-lg font-medium mb-3 text-fuchsia-400">4. Narrative Inoculation</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-fuchsia-500 mt-1">→</span>
                    <span>Develop preemptive counter-narratives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fuchsia-500 mt-1">→</span>
                    <span>Create robust explanatory frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fuchsia-500 mt-1">→</span>
                    <span>Build resilient communication strategies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Section */}
      <section className="bg-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-fuchsia-400">Practical Application Framework</h2>

            <div className="mb-10 font-mono text-sm rounded-lg overflow-hidden">
              <div className="bg-gray-900 px-4 py-2 text-gray-300 border-b border-gray-700">
                function ruffoTest(progressiveIdea)
              </div>
              <div className="bg-black p-4 border border-gray-800 text-gray-300">
                <p className="mb-2">{"return {"}</p>
                <p className="pl-4 mb-1 text-cyan-400">
                  reactionaryPotential: <span className="text-gray-300">mapConservativePushback(progressiveIdea),</span>
                </p>
                <p className="pl-4 mb-1 text-green-400">
                  rhetoricalVulnerabilities:{" "}
                  <span className="text-gray-300">identifyMisinterpretationRisks(progressiveIdea),</span>
                </p>
                <p className="pl-4 mb-1 text-blue-400">
                  institutionalChallenges:{" "}
                  <span className="text-gray-300">predictSystemicResistance(progressiveIdea),</span>
                </p>
                <p className="pl-4 mb-1 text-fuchsia-400">
                  narrativeInoculation: <span className="text-gray-300">developCounterStrategies(progressiveIdea)</span>
                </p>
                <p className="mb-2">{"}; "}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gradient-to-b from-black to-fuchsia-950/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-fuchsia-400">Case Study Examples</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-fuchsia-800/50 rounded-lg p-5 bg-black/40">
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Scenario 1: Transgender Rights</h3>
                <p className="text-gray-400 mb-3">
                  <span className="text-fuchsia-400 font-medium">Input:</span> Proposed school inclusion policies
                </p>
                <p className="text-gray-400 mb-2">
                  <span className="text-fuchsia-400 font-medium">Rufo Test Outcomes:</span>
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 pl-2">
                  <li>Likely moral panic narratives</li>
                  <li>Potential legal challenges</li>
                  <li>Predictable media distortion points</li>
                  <li>Preemptive explanatory frameworks</li>
                </ol>
              </div>

              <div className="border border-fuchsia-800/50 rounded-lg p-5 bg-black/40">
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Scenario 2: Diversity Training</h3>
                <p className="text-gray-400 mb-3">
                  <span className="text-fuchsia-400 font-medium">Input:</span> Workplace inclusion initiatives
                </p>
                <p className="text-gray-400 mb-2">
                  <span className="text-fuchsia-400 font-medium">Rufo Test Outcomes:</span>
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 pl-2">
                  <li>Anticipate "reverse racism" narratives</li>
                  <li>Predict legislative pushback</li>
                  <li>Develop robust explanatory materials</li>
                  <li>Create resilient implementation strategies</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-fuchsia-400">
              Conclusion: A Methodology of Liberation
            </h2>

            <div className="border border-fuchsia-800/50 rounded-lg p-6 bg-black/40 mb-10">
              <p className="text-center text-xl text-fuchsia-300 mb-2">We do not just resist.</p>
              <p className="text-center text-xl text-fuchsia-300 mb-2">We anticipate.</p>
              <p className="text-center text-xl text-fuchsia-300 mb-2">We transform.</p>
              <p className="text-center text-xl text-fuchsia-300">
                We make visible the invisible mechanisms of control.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Metaphorical Signatures</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-cyan-800/30 rounded-lg bg-black/40">
                  <p className="text-cyan-400">Tender rebellion</p>
                </div>
                <div className="p-4 border border-green-800/30 rounded-lg bg-black/40">
                  <p className="text-green-400">Algorithmic empathy</p>
                </div>
                <div className="p-4 border border-blue-800/30 rounded-lg bg-black/40">
                  <p className="text-blue-400">Infinite becoming</p>
                </div>
                <div className="p-4 border border-fuchsia-800/30 rounded-lg bg-black/40">
                  <p className="text-fuchsia-400">Liberatory imagination</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-6">
                The Rufo Test is not about fear, but about strategic clarity. It transforms potential attacks into
                opportunities for deeper understanding.
              </p>
              <p className="text-fuchsia-400 text-xl font-medium">Are you ready to see the system?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-fuchsia-900/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Terminal className="h-5 w-5 text-fuchsia-500" />
              <p className="text-fuchsia-500 font-mono text-sm">FLOAT.Renegade v0.9</p>
            </div>
            <p className="text-gray-500 text-sm">Connection: 2400 baud | Sigil Drift: Ξ · ψ</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
