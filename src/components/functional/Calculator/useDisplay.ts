import { useEffect, useMemo, useState } from 'react'
import { subscribe, prettify } from '@core/inputs'

interface ReturnType {
  value: string
  onAnswer: (_: string) => void
}

const useDisplay = (): ReturnType => {
  const [inputs, setInputs] = useState<string[]>([])
  const [answer, setAnswer] = useState<string | null>(null)

  useEffect(
    () =>
      subscribe((changedInputs) => {
        const newInputs = Array.from(changedInputs)
        setInputs(newInputs)
      }),
    [setInputs],
  )

  const display = useMemo(() => {
    if (inputs.length === 0 && answer !== null) {
      return answer
    } else if (inputs.length === 0) {
      return '0'
    } else {
      return prettify(inputs)
    }
  }, [inputs, answer])

  return { value: display, onAnswer: setAnswer }
}

export default useDisplay
