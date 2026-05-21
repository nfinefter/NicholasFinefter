import { useState } from 'react'
import { Check, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const QUESTIONS = [
  {
    q: 'What does QA stand for?',
    answers: ['Quick Answer', 'Quality Assurance', 'Question Array'],
    correct: 1,
    explanation:
      'Quality Assurance is the practice of preventing defects and ensuring software meets requirements before release.',
  },
  {
    q: 'Which HTTP method is typically idempotent for updates?',
    answers: ['POST', 'PUT', 'CONNECT'],
    correct: 1,
    explanation:
      'PUT is idempotent — repeating the same request should leave the resource in the same state.',
  },
  {
    q: 'In React, where should side effects like fetching data run?',
    answers: ['render()', 'useEffect', 'useState initializer'],
    correct: 1,
    explanation:
      'useEffect runs after render and is the right place for subscriptions, timers, and API calls.',
  },
] as const

export function QuizBuddyDemo() {
  const [step, setStep] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)

  const question = QUESTIONS[step]!
  const isLast = step === QUESTIONS.length - 1

  const handleNext = () => {
    if (step < QUESTIONS.length - 1) {
      setStep((s) => s + 1)
      setPicked(null)
    }
  }

  return (
    <div className="mt-8 max-w-lg">
      <p className="mb-2 text-xs text-neutral-500">
        Question {step + 1} of {QUESTIONS.length}
      </p>
      <div className="rounded-xl bg-[#282828] p-6">
        <p className="mb-4 font-semibold text-white">{question.q}</p>
        <div className="space-y-2">
          {question.answers.map((a, i) => (
            <button
              key={a}
              type="button"
              disabled={picked !== null}
              onClick={() => setPicked(i)}
              className={cn(
                'flex w-full items-center justify-between rounded-lg border px-4 py-2.5 text-left text-sm transition-colors',
                picked === i && i === question.correct && 'border-[#1db954] bg-[#1db954]/10',
                picked === i && i !== question.correct && 'border-red-500/50 bg-red-500/10',
                picked === null && 'border-white/10 hover:bg-[#3e3e3e]',
              )}
            >
              {a}
              {picked === i && i === question.correct && (
                <Check className="h-4 w-4 text-[#1db954]" />
              )}
            </button>
          ))}
        </div>

        {picked !== null && (
          <p
            className={cn(
              'mt-4 text-sm',
              picked === question.correct ? 'text-[#1db954]' : 'text-neutral-300',
            )}
          >
            {question.explanation}
          </p>
        )}

        {picked !== null && !isLast && (
          <button
            type="button"
            onClick={handleNext}
            className="mt-4 flex items-center gap-1 text-sm font-medium text-[#1db954] hover:underline"
          >
            Next question
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>

      <p className="mt-4 text-xs text-neutral-500">
        Full app: upload a PDF or study guide → OpenAI generates MCQs with instant feedback.
      </p>
    </div>
  )
}
