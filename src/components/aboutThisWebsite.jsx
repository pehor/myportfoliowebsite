import CardContainer from './cardContainer'
import React from 'react'
import styles from './aboutThisWebsite.module.scss'

export default function AboutThisWebsiteCard () {
  return (
    <>
      <CardContainer className={ styles.aboutThisWebsiteCard } preHeaderContent={'ABOUT THIS WEBSITE'}>
        <p>
          This website was built with two purposes in mind: to serve as a personal website and as a developer&apos;s
          portfolio item.
        </p>
        <p>
          The goal of the project was to create an easy to build and cheap to maintain site whilst being able to
          demonstrate website building capabilities. (I.e. I wanted to avoid using WordPress and the like.)
          The site is built with React.js, and is statically rendered by Next.js. Styling is done with CSS modules using
          SCSS and designed in a basic responsive way. The results are served from S3 through CloudFront.
        </p>
        <p>
          You can find the source code on <a href="https://github.com/pehor/myportfoliowebsite" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </CardContainer>
    </>
  )
}
