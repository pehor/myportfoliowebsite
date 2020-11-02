import CardContainer from './cardContainer'
import React from 'react'

export default function AboutCard (props) {
  return (
    <>
      <CardContainer preHeaderContent={'ABOUT ME'}>
        { props.texts.summary }
      </CardContainer>
    </>
  )
}
