import React, { FC } from 'react'
import { fireEvent, render, within } from '@testing-library/react'
import '@testing-library/jest-dom'

import Calculator from '@components/calculator/function/Calculator'
import { StyledComponentsThemeMock, ReduxStoreProviderMock, mockScrollIntoView } from '../shared'

const Component: FC = () => (
  <ReduxStoreProviderMock>
    <StyledComponentsThemeMock>
      <Calculator />
    </StyledComponentsThemeMock>
  </ReduxStoreProviderMock>
)

beforeAll(() => {
  mockScrollIntoView()
})

it('solves basic expressions', () => {
  const { getByText, getByTestId } = render(<Component />)

  const clicks = ['2', '+', '2', '=']
  clicks.forEach((button) => fireEvent.click(getByText(button)))

  expect(getByTestId('display').textContent).toBe('4')
})

it('saves to history', () => {
  const { getByText, getByTestId } = render(<Component />)

  const clicks = ['2', '+', '2', '=']
  clicks.forEach((button) => fireEvent.click(getByText(button)))

  const { queryByText } = within(getByTestId('history'))
  expect(queryByText('2 + 2 = 4')).toBeInTheDocument()
})

it('clear all & clear entry', () => {
  const { getByText, getByTestId } = render(<Component />)

  const clicks = ['2', '+', '2', '1', 'CE', '=']
  clicks.forEach((button) => fireEvent.click(getByText(button)))
  expect(getByTestId('display').textContent).toBe('4')

  fireEvent.click(getByText('C'))
  expect(getByTestId('display').textContent).toBe('0')
})

it('negative numbers', () => {
  const { getByText, getByTestId } = render(<Component />)

  const clicks = ['2', '+', '5', '+/-', '=']
  clicks.forEach((button) => fireEvent.click(getByText(button)))

  expect(getByTestId('display').textContent).toBe('-3')
})
