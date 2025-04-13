"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TestInstructions } from "@/components/test-instructions"
import { TestQuestion } from "@/components/test-question"
import { TestResults } from "@/components/test-results"
import { questionsOriginales } from "@/data/questions"

export default function TestPage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [questions] = useState([...questionsOriginales]) // Utiliser les questions dans l'ordre original
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  })
  const [personalityType, setPersonalityType] = useState("")
  const [percentages, setPercentages] = useState({
    E: 0,
    N: 0,
    T: 0,
    J: 0,
  })

  const questionsPerPage = 10
  const numPages = Math.ceil(questions.length / questionsPerPage)

  // Suppression de l'effet qui mélangeait les questions

  const handleNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = () => {
    let scoreE = 0
    let scoreI = 0
    let scoreS = 0
    let scoreN = 0
    let scoreT = 0
    let scoreF = 0
    let scoreJ = 0
    let scoreP = 0

    questions.forEach((question, index) => {
      const answer = localStorage.getItem(`question-${index}`)
      if (answer) {
        const value = Number.parseInt(answer)
        const preference = question.preference

        let preferenceScore = 0
        let oppositeScore = 0

        switch (value) {
          case 1:
            preferenceScore = 0.0
            oppositeScore = 1.0
            break
          case 2:
            preferenceScore = 0.3
            oppositeScore = 0.7
            break
          case 3:
            preferenceScore = 0.5
            oppositeScore = 0.5
            break
          case 4:
            preferenceScore = 0.7
            oppositeScore = 0.3
            break
          case 5:
            preferenceScore = 1.0
            oppositeScore = 0.0
            break
        }

        switch (preference) {
          case "E":
            scoreE += preferenceScore
            scoreI += oppositeScore
            break
          case "I":
            scoreI += preferenceScore
            scoreE += oppositeScore
            break
          case "S":
            scoreS += preferenceScore
            scoreN += oppositeScore
            break
          case "N":
            scoreN += preferenceScore
            scoreS += oppositeScore
            break
          case "T":
            scoreT += preferenceScore
            scoreF += oppositeScore
            break
          case "F":
            scoreF += preferenceScore
            scoreT += oppositeScore
            break
          case "J":
            scoreJ += preferenceScore
            scoreP += oppositeScore
            break
          case "P":
            scoreP += preferenceScore
            scoreJ += oppositeScore
            break
        }
      }
    })

    const totalEI = scoreE + scoreI
    const totalSN = scoreS + scoreN
    const totalTF = scoreT + scoreF
    const totalJP = scoreJ + scoreP

    const pourcentageE = totalEI === 0 ? 50 : Math.round((scoreE / totalEI) * 100)
    const pourcentageN = totalSN === 0 ? 50 : Math.round((scoreN / totalSN) * 100)
    const pourcentageT = totalTF === 0 ? 50 : Math.round((scoreT / totalTF) * 100)
    const pourcentageJ = totalJP === 0 ? 50 : Math.round((scoreJ / totalJP) * 100)

    setPercentages({
      E: pourcentageE,
      N: pourcentageN,
      T: pourcentageT,
      J: pourcentageJ,
    })

    setResults({
      E: scoreE,
      I: scoreI,
      S: scoreS,
      N: scoreN,
      T: scoreT,
      F: scoreF,
      J: scoreJ,
      P: scoreP,
    })

    const seuil = 2
    const pourcentageI = 100 - pourcentageE
    const pourcentageS = 100 - pourcentageN
    const pourcentageF = 100 - pourcentageT
    const pourcentageP = 100 - pourcentageJ

    let type = ""
    type += Math.abs(pourcentageE - pourcentageI) >= seuil ? (pourcentageE > pourcentageI ? "E" : "I") : "?"
    type += Math.abs(pourcentageN - pourcentageS) >= seuil ? (pourcentageN > pourcentageS ? "N" : "S") : "?"
    type += Math.abs(pourcentageT - pourcentageF) >= seuil ? (pourcentageT > pourcentageF ? "T" : "F") : "?"
    type += Math.abs(pourcentageJ - pourcentageP) >= seuil ? (pourcentageJ > pourcentageP ? "J" : "P") : "?"

    setPersonalityType(type)
    setShowResults(true)
  }

  const resetTest = () => {
    // Clear localStorage answers
    questions.forEach((_, index) => {
      localStorage.removeItem(`question-${index}`)
    })

    setShowResults(false)
    setCurrentPage(0)
    window.scrollTo(0, 0)
  }

  const getCurrentPageQuestions = () => {
    if (currentPage === 0) return []

    const start = (currentPage - 1) * questionsPerPage
    const end = Math.min(start + questionsPerPage, questions.length)
    return questions.slice(start, end)
  }

  const isFirstPage = currentPage === 0
  const isLastPage = currentPage === numPages
  const progress = (currentPage / numPages) * 100

  if (showResults) {
    return <TestResults percentages={percentages} personalityType={personalityType} resetTest={resetTest} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-chrysalead-blue to-chrysalead-blue-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-4xl">
            {isFirstPage ? (
              <TestInstructions onStart={() => setCurrentPage(1)} />
            ) : (
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 rounded-xl shadow-xl">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold font-montserrat text-chrysalead-gold">
                      Test de personnalité MBTI
                    </h2>
                    <span className="text-white/80">
                      Page {currentPage} sur {numPages}
                    </span>
                  </div>
                  <Progress
                    value={progress}
                    className="h-2 bg-white/20"
                    indicatorClassName="bg-gradient-to-r from-chrysalead-gold-light to-chrysalead-gold"
                  />
                </div>

                <div className="space-y-8">
                  {getCurrentPageQuestions().map((question, index) => {
                    const questionIndex = (currentPage - 1) * questionsPerPage + index
                    const displayNumber = questionIndex + 1
                    return (
                      <TestQuestion
                        key={questionIndex}
                        question={question}
                        index={questionIndex}
                        displayNumber={displayNumber}
                      />
                    )
                  })}
                </div>

                <div className="flex justify-between mt-8">
                  <Button onClick={handlePrevPage} className="bg-white/20 hover:bg-white/30 text-white">
                    Précédent
                  </Button>

                  {isLastPage ? (
                    <Button
                      onClick={handleSubmit}
                      className="bg-chrysalead-gold hover:bg-chrysalead-gold-dark text-chrysalead-blue font-bold"
                    >
                      Voir les résultats
                    </Button>
                  ) : (
                    <Button
                      onClick={handleNextPage}
                      className="bg-chrysalead-gold hover:bg-chrysalead-gold-dark text-chrysalead-blue font-bold"
                    >
                      Suivant
                    </Button>
                  )}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
