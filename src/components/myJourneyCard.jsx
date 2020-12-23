import CardContainer from './cardContainer'
import React from 'react'
import styles from './myJourneyCard.module.scss'
import { cx } from '../lib/cssTools'

export default function MyJourneyCard (props) {
  const jobs = props.jobs || []
  const defaultShowProjectsState = new Array(jobs.length).fill(false)

  const [showProjects, setShowProjects] = React.useState(defaultShowProjectsState)

  const toggleHiddenProjects = (index) => {
    setShowProjects(showProjects.map((state, i) => i === index ? !state : state))
  }

  return (
    <>
      <CardContainer className={ styles.myJourneyCard } preHeaderContent={ 'MY JOURNEY' }>
        <div>
          { jobs.map((job, index) => {
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
                          <input type="submit" value={ `Projects${showProjects[index] ? '' : ' \u003E\u003E'}`}
                            onClick={ () => { toggleHiddenProjects(index) } } className={ styles.projectsHeader }/>
                          { showProjects[index] &&
                            <div>
                              {job.projects.map((project, index) => {
                                return (
                                  <div className={ styles.project } key={ index }>&mdash; { project }</div>
                                )
                              })}
                            </div>
                          }
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
