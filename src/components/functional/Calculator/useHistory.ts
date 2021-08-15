import { useCallback, useState } from 'react'
import { prettify } from '@core/inputs'

interface ReturnType {
  value: string[]
  push: (_: string[], __: string) => void
}

const useHistory = (): ReturnType => {
  const [history, setHistory] = useState<string[]>([])

  const push = useCallback(
    (expression: string[], result: string) => {
      const pretty = prettify(expression)
      const record = `${pretty} = ${result}`

      setHistory((oldHistory) => [...oldHistory, record])
    },
    [setHistory],
  )

  return { value: history, push }
}

export default useHistory
