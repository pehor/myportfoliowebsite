import Link from 'next/link'
import MainContainer from '../layouts/mainContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.scss'
import texts from '../../content/texts'
import Jobs from '../components/jobs'

export default function Index (props) {
  return (
    <MainContainer>
      <div className={ styles.sideBySideContainer}>
        <div className={ styles.leftBar }>
          <div className={ styles.profileImage }></div>
          <div className={ styles.primary }>
            <div className={ styles.name }>Peter Horvath</div>
            <div className={ styles.title }>Software Engineer</div>
          </div>
        </div>
        <div className={ styles.details }>
          <div className={ styles.summary }>
            <h1>About me</h1>
            <p>
              { props.texts.summary }
            </p>
          </div>
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
