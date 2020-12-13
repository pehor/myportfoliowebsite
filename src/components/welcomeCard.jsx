import CardContainer from './cardContainer'
import React from 'react'
import styles from './welcomeCard.module.scss'
import SocialLinks from './socialLinks'
import { cx } from '../lib/cssTools'
import commonStyles from '../commonStyles/tools.scss'

export default function WelcomeCard () {
  return (
    <>
      <CardContainer className={ styles.welcomeCard } preHeaderContent={'WELCOME'}>
        <div className={ commonStyles.left }>
          <br/>
          <h1>PETER HORVATH</h1>
          <h1>SOFTWARE ENGINEER</h1>
          <SocialLinks className={ styles.socialLinks }/>
        </div>
        <div className={ cx(commonStyles.right, styles.profileImage) }></div>
        <div className={ commonStyles.clear }></div>
      </CardContainer>
    </>
  )
}
