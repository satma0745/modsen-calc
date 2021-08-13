import { useCallback, useState } from 'react'
import prettify from './prettify'

interface ReturnType {
  value: string[]
  push: (expression: string[], result: string) => void
}

const useHistory = (): ReturnType => {
  const [history, setHistory] = useState<string[]>([])

  const push = useCallback(
    (expression: string[], result: string) => {
      const record = `${prettify(expression)} = ${result}`
      setHistory((oldHistory) => [...oldHistory, record])
    },
    [setHistory],
  )

  return { value: history, push }
}

export default useHistory
