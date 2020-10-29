import styles from './linkedLogo.module.scss'

function LinkedLogo (props) {
  return (
    <a className={ styles.logoImage } href={ props.target } target="_blank" rel="noopener noreferrer">
      <img src={ props.src } alt={ props.alt || ''} />
    </a>
  )
}

export default LinkedLogo
