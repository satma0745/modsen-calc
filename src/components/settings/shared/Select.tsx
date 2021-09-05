import React, { FC, memo } from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.color[0]};
  border-radius: ${({ theme }) => theme.spacing[0]};
  margin: 0 ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[0]};
  font-size: ${({ theme }) => theme.fontSize[0]};
`
const StyledOption = styled.option`
  font-size: ${({ theme }) => theme.fontSize[0]};
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
      <StyledOption key={value} value={value}>
        {title}
      </StyledOption>
    ))}
  </StyledSelect>
)

export default memo(Select)
