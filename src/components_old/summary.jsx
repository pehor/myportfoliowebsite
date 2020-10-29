import styles from './summary.module.scss'

export default function Summary (props) {
  return (
    <div className={ styles.summary }>
      <h1>ABOUT ME</h1>
      <p>
        { props.texts.summary }
      </p>
    </div>
  )
}
