"use client"

import { useState, useEffect } from "react"
import type { Question } from "@/types/question"

interface TestQuestionProps {
  question: Question
  index: number
  displayNumber: number
}

export function TestQuestion({ question, index, displayNumber }: TestQuestionProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null)

  useEffect(() => {
    // Load saved answer from localStorage if exists
    const savedAnswer = localStorage.getItem(`question-${index}`)
    if (savedAnswer) {
      setSelectedValue(savedAnswer)
    }
  }, [index])

  const handleChange = (value: string) => {
    setSelectedValue(value)
    localStorage.setItem(`question-${index}`, value)
  }

  const options = [
    { value: "1", label: "Pas du tout d'accord" },
    { value: "2", label: "Pas d'accord" },
    { value: "3", label: "Neutre" },
    { value: "4", label: "D'accord" },
    { value: "5", label: "Totalement d'accord" },
  ]

  return (
    <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
      <p className="font-medium mb-4">
        <span className="text-chrysalead-gold font-bold">{displayNumber}.</span> {question.text}
      </p>
      <div className="grid grid-cols-5 gap-2 mt-4">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleChange(option.value)}
            className={`py-2 px-1 rounded-lg text-xs sm:text-sm transition-all ${
              selectedValue === option.value
                ? "bg-chrysalead-gold text-chrysalead-blue font-medium"
                : "bg-white/10 hover:bg-white/20 text-white"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
