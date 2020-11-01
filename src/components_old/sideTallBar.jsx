import styles from './sideTallBar.module.scss'
import LinkedLogo from './linkedLogo'

export default function SideTallBar (props) {
  return (
    <div className={ styles.leftBar }>
      <div className={ styles.profileImage }></div>
      <div className={ styles.primary }>
        <div className={ styles.name }>PETER HORVATH</div>
        <div className={ styles.title }>Software Engineer</div>
        <div className={ styles.links }>
          <LinkedLogo src='/linkedin.svg' alt='LinkedIn' target='https://www.linkedin.com/in/peter-horvath'/>
          <LinkedLogo src='/github.svg' alt='GitHub' target='https://github.com/pehor'/>
          <LinkedLogo src='/medium.svg' alt='Medium' target='https://medium.com/@horvath.peter.hp'/>
        </div>
      </div>
    </div>
  )
}
