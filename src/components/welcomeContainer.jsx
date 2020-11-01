import CardContainer from './cardContainer'
import React from 'react'
import styles from './welcomeContainer.module.scss'
import LinkedLogo from './linkedLogo'
import { cx } from '../lib/cssTools'
import commonStyles from '../commonStyles/tools.scss'

export default function WelcomeContainer () {
  return (
    <>
      <CardContainer className={ styles.welcomeContainer } preHeaderContent={'WELCOME'}>
        <div className={ commonStyles.left }>
          <br/>
          PETER HORVATH
          <br/>
          SOFTWARE ENGINEER
          <br/>
          <div className={ styles.socialLinks }>
            <LinkedLogo src='/linkedin.svg' alt='LinkedIn' target='https://www.linkedin.com/in/peter-horvath'/>
            <LinkedLogo src='/github.svg' alt='GitHub' target='https://github.com/pehor'/>
            <LinkedLogo src='/medium.svg' alt='Medium' target='https://medium.com/@horvath.peter.hp'/>
          </div>
        </div>
        <div className={ cx(commonStyles.right, styles.profileImage) }></div>
        <div className={ commonStyles.clear }></div>
      </CardContainer>
    </>
  )
}
