import MainContainer from '../components/mainContainer'
// import styles from './index.module.scss'
import texts from '../../content/texts'

export default function Index (props) {
  return (
    <MainContainer>
      hello
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
