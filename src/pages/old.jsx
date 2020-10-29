import Link from 'next/link'
import MainContainer from '../layouts_old/mainContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import styles from './old.module.scss'
import texts from '../../content/texts'
import Jobs from '../components_old/jobs'
import Summary from '../components_old/summary'
import SideTallBar from '../components_old/sideTallBar'

export default function Old (props) {
  return (
    <MainContainer>
      <div className={ styles.sideBySideContainer}>
        <SideTallBar/>
        <div className={ styles.details }>
          <Summary { ...props }/>
          <Jobs/>
        </div>
      </div>

      <div style={{ marginTop: '1em' }}>
        <Link href="/about">
          <a>About Page <FontAwesomeIcon icon={ faAngleDoubleRight }/></a>
        </Link>
      </div>
    </MainContainer>
  )
}

export async function getStaticProps () {
  return {
    props: {
      texts
    }
  }
}
