"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface TestInstructionsProps {
  onStart: () => void
}

export function TestInstructions({ onStart }: TestInstructionsProps) {
  return (
    <Card className="bg-white/15 backdrop-blur-sm border-white/30 p-8 rounded-xl shadow-xl text-center">
      <div className="flex justify-center mb-6">
        <Image src="/logo.png" alt="Chrysalead Logo" width={180} height={54} className="h-16 w-auto" />
      </div>

      <h1 className="text-3xl font-bold mb-6 font-montserrat text-chrysalead-gold">Test de Personnalité MBTI</h1>

      <div className="mb-8 text-left">
        <h2 className="text-xl font-semibold mb-4 text-center">Instructions</h2>
        <p className="mb-4 text-white/90">Veuillez lire attentivement avant de commencer :</p>
        <ol className="space-y-3 list-decimal list-inside text-white/90">
          <li className="pl-2">Répondez honnêtement, selon votre nature profonde.</li>
          <li className="pl-2">Pensez à votre comportement habituel, pas à des exceptions.</li>
          <li className="pl-2">Évitez de trop réfléchir ; votre instinct est souvent juste.</li>
          <li className="pl-2">Répondez en pensant à vous, pas à ce qu'on attend de vous.</li>
        </ol>
      </div>

      <div className="bg-white/5 p-4 rounded-lg mb-8">
        <p className="text-white/90 italic">"La connaissance de soi est le début de toute sagesse."</p>
        <p className="text-white/70 text-sm mt-2">- Aristote</p>
      </div>

      <Button
        onClick={onStart}
        className="bg-chrysalead-gold hover:bg-chrysalead-gold-dark text-chrysalead-blue font-bold text-lg py-6 px-8 rounded-xl transition-all transform hover:scale-105"
      >
        Commencer le test
      </Button>
    </Card>
  )
}
