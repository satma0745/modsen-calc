import { useCallback, useState } from 'react'

interface ReturnType {
  value: string
  push: (s: string) => void
  clear: () => void
}

const useDisplay = (): ReturnType => {
  const [value, setValue] = useState('')

  const push = useCallback(
    (symbol: string) => {
      setValue((oldValue) => oldValue + symbol)
    },
    [setValue],
  )

  const clear = useCallback(() => {
    setValue('')
  }, [setValue])

  const displayedValue = value === '' ? '0' : value
  return { value: displayedValue, push, clear }
}

export default useDisplay
