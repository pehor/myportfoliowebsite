import CardContainer from './cardContainer'
import React from 'react'
import styles from './myJourneyCard.module.scss'
import { cx } from '../lib/cssTools'

export default function MyJourneyCard (props) {
  return (
    <>
      <CardContainer className={ styles.myJourneyCard } preHeaderContent={ 'MY JOURNEY' }>
        <div>
          { props.jobs.map((job, index) => {
            return (
              <div key={ index }>
                <div className={ styles.verticalCentered }>
                  <div className={ cx(styles.logo, styles.onlyLargeScreenFlex) }>
                    <img src={ job.logo }/>
                  </div>
                  <div className={ cx(styles.verticalBar, index === 0 ? styles.first : '') }>
                    <div className={ styles.dot }></div>
                  </div>
                  <div className={ styles.jobTexts }>
                    <div className={ styles.yearAndJob }>
                      <div className={ cx(styles.year, styles.onlyLargeScreenBlock) }>
                        { job.year }
                      </div>
                      <div className={ cx(styles.logo, styles.onlySmallScreenFlex) }>
                        <img src={ job.logo }/>
                      </div>
                      <div>
                        <div>{ job.title.toUpperCase() }</div>
                        <div>@ { job.company.toUpperCase() }</div>
                        <div className={ cx(styles.year, styles.onlySmallScreenBlock) }>
                          { job.year }
                        </div>
                      </div>
                    </div>
                    <div className={ styles.details }>
                      <div className={ styles.description }>
                        { job.description }
                      </div>
                      { job.projects && (
                        <div>
                          <div className={ styles.projectsHeader }>PROJECTS</div>
                          { job.projects.map((project, index) => {
                            return (
                              <div key={ index }>&mdash; { project }</div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContainer>
    </>
  )
}
