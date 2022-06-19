import CardContainer from './cardContainer'
import React from 'react'
import SocialLinks from './socialLinks'
import styles from './lastCard.module.scss'
import commonStyles from '../commonStyles/tools.scss'
import { cx } from '../lib/cssTools'
import Link from 'next/link'

export default function LastCard () {
  return (
    <>
      <CardContainer>
        <div className={ cx(commonStyles.row, styles.lastCard) }>
          <div className={ cx(commonStyles.column, commonStyles.columnLeft) }>
            <SocialLinks />
          </div>
          <div className={ cx(commonStyles.column, styles.backToTop) }>
            <Link href={ '/' }><a>BACK TO TOP</a></Link>
          </div>
          <div className={ cx(commonStyles.column, commonStyles.columnRight) }>&copy; Peter Horvath 2022</div>
        </div>
      </CardContainer>
    </>
  )
}
