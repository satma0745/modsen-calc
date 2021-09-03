import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Keypad from '@components/calculator/function/Keypad'
import { generateKeypadPropMocks, StyledComponentsThemeMock } from '@tests/shared'

let mocks = generateKeypadPropMocks()
beforeEach(() => {
  mocks = generateKeypadPropMocks()
})

it('reset error (on each key press)', () => {
  const { getByText } = render(
    <StyledComponentsThemeMock>
      <Keypad {...mocks} />
    </StyledComponentsThemeMock>,
  )
  fireEvent.click(getByText(/^C$/i))
  expect(mocks.resetError.mock.calls.length).toBe(1)
})

it('C and CE', () => {
  const { getByText } = render(
    <StyledComponentsThemeMock>
      <Keypad {...mocks} />
    </StyledComponentsThemeMock>,
  )

  fireEvent.click(getByText(/^C$/i))
  fireEvent.click(getByText('CE'))

  const clearCalls = mocks.clear.mock.calls.flat()
  expect(clearCalls).toEqual(['all', 'entry'])
})

it('equals', () => {
  const { getByText } = render(
    <StyledComponentsThemeMock>
      <Keypad {...mocks} />
    </StyledComponentsThemeMock>,
  )
  fireEvent.click(getByText(/^=$/i))
  expect(mocks.onEquals.mock.calls.length).toBe(1)
})

it('change sign', () => {
  const { getByText } = render(
    <StyledComponentsThemeMock>
      <Keypad {...mocks} />
    </StyledComponentsThemeMock>,
  )
  fireEvent.click(getByText('+/-'))
  expect(mocks.changeSign.mock.calls.length).toBe(1)
})

it('non numeric', () => {
  const { getByText } = render(
    <StyledComponentsThemeMock>
      <Keypad {...mocks} />
    </StyledComponentsThemeMock>,
  )

  const keys = '+ - * / ( )'.split(' ')
  keys.forEach((key) => fireEvent.click(getByText(key)))

  let calls: any[] = []
  Object.values(mocks).forEach((mockFunction) => {
    const mockCalls: any[] = mockFunction.mock.calls.flat()
    calls = calls.concat(mockCalls)
  })
  expect(calls).toEqual(keys)
})

it('numeric', () => {
  const { getByText } = render(
    <StyledComponentsThemeMock>
      <Keypad {...mocks} />
    </StyledComponentsThemeMock>,
  )

  const keys = '0 1 2 3 4 5 6 7 8 9 .'.split(' ')
  keys.forEach((key) => fireEvent.click(getByText(key)))

  let calls: any[] = []
  Object.values(mocks).forEach((mockFunction) => {
    const mockCalls: any[] = mockFunction.mock.calls.flat()
    calls = calls.concat(mockCalls)
  })
  expect(calls).toEqual(keys)
})
