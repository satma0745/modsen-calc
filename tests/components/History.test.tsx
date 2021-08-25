import React from 'react'
import { render, within } from '@testing-library/react'
import '@testing-library/jest-dom'

import History from '@components/calculator/function/History'

beforeAll(() => {
  Element.prototype.scrollIntoView = jest.fn()
})

it('all records appear', () => {
  const history = ['record', 'record', 'record']
  const { getAllByRole } = render(<History history={history} />)

  const records = getAllByRole('listitem')
  expect(records).toHaveLength(3)
})

it('records appear in the correct order', () => {
  const history = ['record #0', 'record #1', 'record #2']
  const { getAllByRole } = render(<History history={history} />)

  const records = getAllByRole('listitem')
  records.forEach((record, index) => {
    const { getByText } = within(record)
    expect(getByText(`record #${index}`)).toBeInTheDocument()
  })
})
