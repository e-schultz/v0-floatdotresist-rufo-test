import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function RhetoricalPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to main</span>
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-fuchsia-300">
            Rhetorical Defense Mechanisms
          </h1>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-fuchsia-300">Strategies of Anticipation</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-fuchsia-800/50 rounded-lg p-5 bg-black/40">
                <h3 className="text-lg font-medium mb-3 text-cyan-400">Over-documentation</h3>
                <p className="text-gray-300">
                  Thoroughly document all aspects of progressive initiatives, leaving no room for misinterpretation or
                  selective quotation.
                </p>
              </div>

              <div className="border border-fuchsia-800/50 rounded-lg p-5 bg-black/40">
                <h3 className="text-lg font-medium mb-3 text-green-400">Transparent methodology</h3>
                <p className="text-gray-300">
                  Make all processes and decision-making visible, reducing the potential for claims of hidden agendas or
                  secretive operations.
                </p>
              </div>

              <div className="border border-fuchsia-800/50 rounded-lg p-5 bg-black/40">
                <h3 className="text-lg font-medium mb-3 text-blue-400">Pre-emptive explanations</h3>
                <p className="text-gray-300">
                  Develop comprehensive explanatory materials that address potential concerns before they can be
                  weaponized by opposition.
                </p>
              </div>

              <div className="border border-fuchsia-800/50 rounded-lg p-5 bg-black/40">
                <h3 className="text-lg font-medium mb-3 text-fuchsia-400">Emotional intelligence</h3>
                <p className="text-gray-300">
                  Craft communications with awareness of emotional triggers and responses, reducing vulnerability to
                  emotional manipulation tactics.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-fuchsia-300">Humor as Defensive Technology</h2>
            <div className="space-y-4 text-gray-300">
              <p>Strategic use of humor serves multiple defensive functions in the Rufo Test methodology:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-500 mt-1">•</span>
                  <span>Disarming potential hostility through shared laughter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-500 mt-1">•</span>
                  <span>Revealing logical inconsistencies in opposition arguments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-500 mt-1">•</span>
                  <span>Creating cognitive flexibility that resists rigid categorization</span>
                </li>
              </ul>
              <div className="border border-fuchsia-800/50 rounded-lg p-5 bg-black/40 mt-6">
                <p className="text-center italic text-fuchsia-300">
                  "Humor is not just relief; it's revelation. The laugh that follows absurdity is the first step toward
                  seeing systems of control."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
