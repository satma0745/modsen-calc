import { useCallback } from 'react'

import useDisplay from './useDisplay'
import useHistory from './useHistory'

interface ReturnType {
  display: string
  history: string[]
  onKeyPressed: (key: string) => void
}

const useCalculator = (): ReturnType => {
  const display = useDisplay()
  const history = useHistory()

  const onKeyPressed = useCallback(
    (key: string) => {
      if (key === 'C' || key === 'CE') {
        display.clear()
      } else if (key === '=') {
        const result = display.value
          .split('')
          .filter((s) => s >= '0' && s <= '9')
          .join('')

        history.push(`${display.value} = ${result}`)

        display.clear()
        display.push(result)
      } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        display.push(` ${key} `)
      } else if (key === '(') {
        display.push(` ${key}`)
      } else if (key === ')') {
        display.push(`${key}) `)
      } else {
        display.push(key)
      }
    },
    [display.value, display.clear, display.push],
  )

  return { display: display.value, history: history.value, onKeyPressed }
}

export default useCalculator
