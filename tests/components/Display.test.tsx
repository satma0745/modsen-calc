import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Input } from '@core/input'
import Display from '@components/calculator/function/Display'
import { parseExpression } from '../shared'

it('input is rendered correctly', () => {
  const input = parseExpression(['(', 2, '+', 2, ')', '*', 2])
  const { getByText } = render(<Display isError={false} input={input} />)

  expect(getByText('(2 + 2) * 2')).toBeInTheDocument()
})

it('zero is displayed if no input', () => {
  const input: Input = []
  const { getByText } = render(<Display isError={false} input={input} />)

  expect(getByText('0')).toBeInTheDocument()
})

it('shows error when it is needed', () => {
  const input: Input = []
  const { getByText } = render(<Display isError={true} input={input} />)

  expect(getByText('Error')).toBeInTheDocument()
})

it('doest not show error when it is not needed', () => {
  const input = parseExpression(['(', 2, '+', 2, ')', '*', 2])
  const { queryByText } = render(<Display isError={true} input={input} />)

  expect(queryByText('Error')).not.toBeInTheDocument()
})
