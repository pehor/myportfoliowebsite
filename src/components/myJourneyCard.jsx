import CardContainer from './cardContainer'
import React from 'react'
import styles from './myJourneyCard.module.scss'
import { cx } from '../lib/cssTools'
import commonStyles from '../commonStyles/tools.scss'

export default function MyJourneyCard (props) {
  return (
    <>
      <CardContainer className={ styles.myJourneyCard } preHeaderContent={ 'MY JOURNEY' }>
        <div>
          { props.jobs.map((job, index) => {
            return (
              <div key={ index } className={ styles.job }>
                <div className={ styles.verticalCentered }>
                  <div className={ styles.logo }>
                    <img src={ job.logo }/>
                  </div>
                  <div className={ cx(styles.verticalBar, index === 0 ? styles.first : '') }>
                    <div className={ styles.dot }></div>
                  </div>
                  <div className={ styles.yearAndDetails }>
                    <div className={ commonStyles.left }>
                      { job.year }
                    </div>
                    <div className={ cx(commonStyles.right, styles.details) }>
                      <p>{ job.title.toUpperCase() }</p>
                        @ { job.company.toUpperCase() }
                      <p className={ styles.description }>
                        { job.description }
                      </p>
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
