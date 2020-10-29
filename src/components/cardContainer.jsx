import styles from './cardContainer.module.scss'
import React from 'react'

export default function CardContainer (props) {
  const { children } = props

  return (
    <div className={ styles.cardContainer }>
      { children }
    </div>
  )
}
