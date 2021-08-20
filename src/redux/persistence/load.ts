import { AppearanceState, hydrate } from '@redux/reducers/appearance'
import { Dispatch } from '@redux/store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isValidPreferences = (candidate: any) => {
  if (typeof candidate !== 'object' || candidate === null) {
    return false
  }

  if (candidate.theme !== 'light' && candidate.theme !== 'dark') {
    return false
  }

  if (typeof candidate.showHistory !== 'boolean') {
    return false
  }

  return true
}

const loadAppearance = (): AppearanceState | null => {
  const json = localStorage.getItem('appearance')
  if (!json) {
    return null
  }

  try {
    const appearance = JSON.parse(json)
    if (isValidPreferences(appearance)) {
      return appearance as AppearanceState
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

const loadState = (dispatch: Dispatch): void => {
  const appearance = loadAppearance()
  if (appearance !== null) {
    dispatch(hydrate(appearance))
  }
}

export { loadState }
