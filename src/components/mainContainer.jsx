import styles from './mainContainer.module.scss'
import commonStyles from '../commonStyles/common.scss'
import Head from 'next/head'
import React from 'react'

export default function MainContainer (props) {
  const { children } = props

  return (
    <>
      <Head>
        <title>Peter Horvath&apos;s page</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet"></link>
      </Head>
      <div>
        <div className={ styles.pageHeader }>
        </div>
        <div className={ styles.container }>
          <div className={ commonStyles.containerCentered }>
            { children }
          </div>
        </div>
      </div>
    </>
  )
}
