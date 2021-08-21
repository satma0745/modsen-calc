import React, { FC } from 'react'

interface Props {
  title: string
}

const Section: FC<Props> = ({ title, children }) => (
  <section>
    <h3>{title}</h3>
    {children}
  </section>
)

export default Section
