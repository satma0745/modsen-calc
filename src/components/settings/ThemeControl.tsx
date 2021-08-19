import React, { ChangeEvent, FC, memo, useCallback } from 'react'

import { useDispatch, useThemeSelector } from '@redux/hooks'
import { changeTheme } from '@redux/reducers/appearance'

const ThemeControl: FC = () => {
  const themeKind = useThemeSelector()
  const dispatch = useDispatch()

  const onSelect = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const selected = event.target.value
      if (selected === 'light' || selected === 'dark') {
        dispatch(changeTheme(selected))
      } else {
        throw new Error(`Unsupported theme "${selected}"`)
      }
    },
    [dispatch],
  )

  return (
    <div>
      <span>Theme: </span>
      <select value={themeKind} onChange={onSelect}>
        <option value="light">Light theme</option>
        <option value="dark">Dark theme</option>
      </select>
    </div>
  )
}

export default memo(ThemeControl)
