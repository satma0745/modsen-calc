import React, { FC, memo } from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  border: 0.1em solid ${({ theme }) => theme.page.color};
  border-radius: 0.3em;
  margin: 0.3em;
  padding: 0.2em;
  font-size: 1em;
`

interface Option {
  title: string
  value: string
}

interface Props {
  value: string
  options: Option[]
  onSelect: (_: string) => void
}

const Select: FC<Props> = ({ value, options, onSelect, ...props }) => (
  <StyledSelect value={value} onChange={(event) => onSelect(event.target.value)} {...props}>
    {options.map(({ title, value }) => (
      <option key={value} value={value}>
        {title}
      </option>
    ))}
  </StyledSelect>
)

export default memo(Select)
