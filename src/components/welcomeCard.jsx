import CardContainer from './cardContainer'
import React from 'react'
import styles from './welcomeCard.module.scss'
import SocialLinks from './socialLinks'
import { cx } from '../lib/cssTools'

export default function WelcomeCard () {
  return (
    <>
      <CardContainer className={ styles.welcomeCard } preHeaderContent={'WELCOME'}>
        <div className={ styles.wrapper }>
          <div className={ cx(styles.texts) }>
            <div className={ styles.spacer }></div>
            <h1>PETER HORVATH</h1>
            <h1>SOFTWARE ENGINEER</h1>
            <SocialLinks className={ styles.socialLinks }/>
          </div>
          <div className={ cx(styles.profileImage) }></div>
        </div>
      </CardContainer>
    </>
  )
}
