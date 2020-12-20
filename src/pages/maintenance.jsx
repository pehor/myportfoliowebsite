import React from 'react'
import Head from 'next/head'
import styles from './maintenance.module.scss'
import commonStyles from '../commonStyles/common.scss'

export default function Maintenance () {
  return (
    <>
      <Head>
        <title>Peter Horvath&apos;s page</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      </Head>
      <div className={ styles.maintenancePage }>
        <div style={{ height: '1em' }}></div>
        <h1>
          You are on Peter Horvath&apos;s page.
        </h1>
        <div style={{ height: '1em' }}></div>
        <div className={ commonStyles.containerCentered }>
          The website is under maintenance. Please check back later.
        </div>
      </div>
    </>
  )
}
