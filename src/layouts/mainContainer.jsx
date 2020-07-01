import Logo from '../components/logo'
import styles from './mainContainer.module.scss'
import commonStyles from '../styles/common.scss'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function MainContainer (props) {
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
            <Link href="/">
              <a>
                <div className={ styles.logoImage }>
                  <Logo/>
                </div>
              </a>
            </Link>
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
