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
              <p key={ index }>
                { job.title.toUpperCase() }
                <br/>
                @{ job.company.toUpperCase() }
              </p>
            )
          })}
        </div>
      </CardContainer>
    </>
  )
}
