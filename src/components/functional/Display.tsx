import React, { FC, memo, useMemo } from 'react'
import styled from 'styled-components'
import { __, match } from 'ts-pattern'

import { useInputsSelector } from '@redux/hooks'
import prettifyExpression from '@core/prettifyExpression'

const Container = styled.div`
  text-align: right;
  font-size: 1em;
  padding: 0 2em;
`

interface Props {
  answer: string | undefined
}

const Display: FC<Props> = ({ answer }) => {
  const inputs = useInputsSelector()

  const display = useMemo(() => {
    return match<[number, string | undefined]>([inputs.length, answer])
      .with([0, undefined], () => '0')
      .with([0, __.string], ([_, answer]) => answer)
      .otherwise(() => prettifyExpression(inputs))
  }, [inputs, answer])

  return <Container>{display}</Container>
}

export default memo(Display)
