import CardContainer from './cardContainer'
import React from 'react'
import styles from './topSkillsCard.module.scss'
import { cx } from '../lib/cssTools'
import commonStyles from '../commonStyles/tools.scss'

export default function TopSkillsCard (props) {
  return (
    <>
      <CardContainer className={ styles.topSkillsCard } preHeaderContent={'TOP SKILLS'}>
        <div className={ cx(commonStyles.left, styles.topSkillsText)}>
          { props.texts.topSkills.left.map((skill, index) => {
            return (
              <p key={ index }>{skill}</p>
            )
          })}
        </div>
        <div className={ cx(commonStyles.right, styles.topSkillsText) }>
          { props.texts.topSkills.right.map((skill, index) => {
            return (
              <p key={ index }>{skill}</p>
            )
          })}
        </div>
        <div className={ commonStyles.clear }>
        </div>
      </CardContainer>
    </>
  )
}
