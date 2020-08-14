import Link from 'next/link'
import MainContainer from '../layouts/mainContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.scss'
import texts from '../../content/texts'
import Jobs from '../components/jobs'
import Summary from '../components/summary'
import SideTallBar from '../components/sideTallBar'

export default function Index (props) {
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
