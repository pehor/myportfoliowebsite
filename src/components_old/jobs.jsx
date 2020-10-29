import styles from './jobs.module.scss'
import jobs from '../../content/jobs'

export default function Jobs () {
  return (
    <div>
      <h1>EMPLOYMENT</h1>
      <ul className={ styles.jobs }>
        { jobs.map((job, index) => {
          return (
            <li className={ styles.job } key={ index }>
              <div className={ styles.logo }>
                <img src={job.logo}/>
              </div>
              <div className={ styles.jobTexts }>
                <div className={ styles.header }>
                  <h1 className={ styles.jobTitle }>{ job.title }</h1>
                  <h2 className={ styles.dates }>{ job.dates }</h2>
                </div>
                <p>{ job.description }</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
