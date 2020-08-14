import styles from './sideTallBar.module.scss'

export default function SideTallBar (props) {
  return (
    <div className={ styles.leftBar }>
      <div className={ styles.profileImage }></div>
      <div className={ styles.primary }>
        <div className={ styles.name }>PETER HORVATH</div>
        <div className={ styles.title }>Software Engineer</div>
      </div>
    </div>
  )
}
