import { useCallback, useEffect, useState } from 'react'
import { subscribe, handler } from '@core/inputs'

interface ReturnType {
  (_: string): void
}

interface Calculate {
  (_: string[]): number | false
}

const useKeypad = (calculate: Calculate): ReturnType => {
  const [inputs, setInputs] = useState<string[]>([])
  useEffect(() => subscribe(setInputs), [setInputs])

  const onEquals = useCallback(() => {
    return calculate([...inputs])
  }, [inputs])

  const handleInput = useCallback(handler(onEquals), [onEquals])
  return handleInput
}

export default useKeypad
