import MainContainer from '../components/mainContainer'
// import styles from './index.module.scss'
import texts from '../../content/texts'
import WelcomeContainer from '../components/welcomeContainer'

export default function Index (props) {
  return (
    <MainContainer>
      <WelcomeContainer/>
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
