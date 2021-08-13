import { useEffect, useState } from 'react'

import { subscribe } from '@core/inputs'
import prettify from './prettify'

const useDisplay = (): string => {
  const [value, setValue] = useState('')

  useEffect(
    () =>
      subscribe((inputs) => {
        const pretty = prettify(inputs)
        setValue(pretty)
      }),
    [setValue],
  )

  return value === '' ? '0' : value
}

export default useDisplay
