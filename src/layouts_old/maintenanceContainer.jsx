import styles from './mainContainer.module.scss'
import commonStyles from '../styles_old/common.scss'
import Head from 'next/head'
import React from 'react'

export default function MaintenanceContainer (props) {
  const { children } = props

  return (
    <>
      <Head>
        <title>Peter Horvath</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      </Head>
      <div className="page">
        <div className={ styles.pageHeader }>
          <div className={ styles.pageHeaderLeft }>
          </div>
          <div className={ styles.pageHeaderRight }>
          </div>
        </div>
        <div className={ styles.container }>
          <div className={ commonStyles.containerCentered }>
            { children }
          </div>
        </div>
        <div className={ styles.pageFooter }>
        </div>
      </div>
    </>
  )
}
