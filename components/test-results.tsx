"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface TestResultsProps {
  percentages: {
    E: number
    N: number
    T: number
    J: number
  }
  personalityType: string
  resetTest: () => void
}

export function TestResults({ percentages, personalityType, resetTest }: TestResultsProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chrysalead-blue to-chrysalead-blue-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <Card className="bg-white/15 backdrop-blur-sm border-white/30 p-8 rounded-xl shadow-xl">
              <div className="flex justify-center mb-6">
                <Image src="/logo.png" alt="Chrysalead Logo" width={180} height={54} className="h-16 w-auto" />
              </div>

              <h1 className="text-3xl font-bold mb-8 text-center font-montserrat text-chrysalead-gold">
                Résultats de votre test MBTI
              </h1>

              <div className="bg-white/10 p-6 rounded-xl mb-8 border border-white/20">
                <h2 className="text-2xl font-bold text-center mb-6 font-montserrat">
                  Votre type de personnalité est <span className="text-chrysalead-gold">{personalityType}</span>
                </h2>

                <div className="space-y-6 mt-8">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Extraversion (E)</span>
                      <span className="font-medium">{percentages.E}%</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-300 to-blue-500 rounded-full"
                        style={{ width: `${percentages.E}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Intuition (N)</span>
                      <span className="font-medium">{percentages.N}%</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-300 to-amber-500 rounded-full"
                        style={{ width: `${percentages.N}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Pensée (T)</span>
                      <span className="font-medium">{percentages.T}%</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-300 to-green-500 rounded-full"
                        style={{ width: `${percentages.T}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Jugement (J)</span>
                      <span className="font-medium">{percentages.J}%</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-300 to-purple-500 rounded-full"
                        style={{ width: `${percentages.J}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button onClick={resetTest} className="bg-white/20 hover:bg-white/30 text-white">
                  Repasser le test
                </Button>
                <Link href="/">
                  <Button className="bg-chrysalead-gold hover:bg-chrysalead-gold-dark text-chrysalead-blue font-bold">
                    Retour à l'accueil
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
