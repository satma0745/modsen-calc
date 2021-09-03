import 'styled-components'
import { Theme } from '@core/theming'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
