import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.spacing[2]};
  grid-template-columns: repeat(5, 1fr);
`

export default Grid
