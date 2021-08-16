import styled from 'styled-components'

const Button = styled.button`
  width: 2.5em;
  height: 2.5em;

  font-size: 1em;
  line-height: 1.2em;
  color: #000;

  background-color: #f2f2f2;
  border: 1px solid #707070;
  border-radius: 0.5em;
`

const Grid = styled.div`
  padding: 0 2em;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(5, 1fr);
`

export { Button, Grid }
