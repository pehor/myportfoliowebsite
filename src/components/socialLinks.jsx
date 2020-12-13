import React from 'react'
import styles from './socialLinks.module.scss'
import LinkedLogo from './linkedLogo'
import { cx } from '../lib/cssTools'

export default function SocialLinks (props) {
  return (
    <div className={ cx(styles.socialLinks, props.className) }>
      <LinkedLogo src='/linkedin.svg' alt='LinkedIn' target='https://www.linkedin.com/in/peter-horvath'/>
      <LinkedLogo src='/github.svg' alt='GitHub' target='https://github.com/pehor'/>
      <LinkedLogo src='/medium.svg' alt='Medium' target='https://medium.com/@horvath.peter.hp'/>
    </div>
  )
}
