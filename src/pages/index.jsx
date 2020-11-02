import MainContainer from '../components/mainContainer'
// import styles from './index.module.scss'
import texts from '../../content/texts'
import WelcomeCard from '../components/welcomeCard'
import AboutCard from '../components/aboutCard'
import Spacer from '../components/spacer'

export default function Index (props) {
  return (
    <MainContainer>
      <WelcomeCard/>
      <Spacer/>
      <AboutCard { ...props }/>
      <Spacer/>
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
