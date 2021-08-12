import { useCallback, useState } from 'react'

interface ReturnType {
  value: string[]
  push: (expr: string) => void
}

const useHistory = (): ReturnType => {
  const [history, setHistory] = useState<string[]>([])

  const push = useCallback(
    (expression: string) => {
      setHistory((oldHistory) => [...oldHistory, expression])
    },
    [setHistory],
  )

  return { value: history, push }
}

export default useHistory
