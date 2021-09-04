import { match } from 'ts-pattern'

import darkTheme from './darkTheme'
import lightTheme from './lightTheme'
import { Theme, ThemeKind } from './types'

const selectTheme = (theme: ThemeKind): Theme => {
  return match(theme)
    .with('light', () => lightTheme)
    .with('dark', () => darkTheme)
    .exhaustive()
}

export default selectTheme
