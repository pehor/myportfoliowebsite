import styles from './cardContainer.module.scss'
import React from 'react'
import { cx } from '../lib/cssTools'

export default function CardContainer (props) {
  const { children, className, preHeaderContent, postHeaderContent } = props

  return (
    <div className={ cx(styles.cardContainer, className) }>
      <div className={ styles.preHeaderStyles }> { preHeaderContent || '' }</div>
      { children }
      <div className={ styles.postHeaderStyles }> { postHeaderContent || '' }</div>
    </div>
  )
}
