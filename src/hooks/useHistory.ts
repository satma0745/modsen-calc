import { useMemo } from 'react'

const useHistory = (): string[] => {
  return useMemo(() => {
    return [
      '9 + 9 = 18',
      '90 / 10 = 9',
      '60 * 1.5 = 90',
      '30 + 30 = 60',
      '30 / 1 = 30',
      '30 * 1 = 30',
      '150 / 50 = 3',
      '300 * 0.5 = 150',
      '900 / 3 = 300',
      '200 + 450 = 650',
      '100 * 2 = 200',
    ]
  }, [])
}

export default useHistory
