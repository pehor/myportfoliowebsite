import MainContainer from '../components/mainContainer'
import texts from '../../content/texts'
import jobs from '../../content/jobs'
import skills from '../../content/skills'
import WelcomeCard from '../components/welcomeCard'
import AboutCard from '../components/aboutCard'
import Spacer from '../components/spacer'
import TopSkillsCard from '../components/topSkillsCard'
import MyJourneyCard from '../components/myJourneyCard'
import SkillsCard from '../components/skillsCard'

export default function Index (props) {
  return (
    <MainContainer>
      <WelcomeCard/>
      <Spacer/>
      <AboutCard { ...props }/>
      <Spacer/>
      <TopSkillsCard { ...props }/>
      <Spacer/>
      <MyJourneyCard { ...props }/>
      <Spacer/>
      <SkillsCard { ...props }/>
    </MainContainer>
  )
}

export async function getStaticProps () {
  return {
    props: {
      texts,
      jobs,
      skills
    }
  }
}
