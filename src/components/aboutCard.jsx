import CardContainer from './cardContainer'
import React from 'react'
import styles from './aboutCard.module.scss'

export default function AboutCard (props) {
  return (
    <>
      <CardContainer className={ styles.aboutCard } preHeaderContent={'ABOUT ME'}>
        { props.texts.summary.map((line, index) => {
          return (
            <p key={ index }>{ line }</p>
          )
        })
        }
      </CardContainer>
    </>
  )
}
