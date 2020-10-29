import MaintenanceContainer from '../layouts_old/maintenanceContainer'
import React from 'react'
import styles from './maintenance.module.scss'
import commonStyles from '../styles_old/common.scss'
import { cx } from '../lib/cssTools'

export default function Maintenance (_props) {
  return (
    <MaintenanceContainer>
      <h1 className={ styles.mainTitle }>You are on Peter Horvath&apos;s page.</h1>
      <div style={{ height: '1em' }}></div>
      <div className={ cx(commonStyles.containerCentered, styles.maintenanceContent) }>
        <p>
          The website is under maintenance. Please check back later.
        </p>
      </div>
    </MaintenanceContainer>
  )
}
