import CardContainer from './cardContainer'
import React from 'react'
import styles from './topSkillsCard.module.scss'
import { cx } from '../lib/cssTools'
import commonStyles from '../commonStyles/tools.scss'
import Link from 'next/link'

function TopSkillsCardPostElement () {
  return (
    <>
      <div className={ styles.imageCopyright }>Image by Jakub Dziubak (Unsplash)</div>
      <div className={ cx(commonStyles.right, styles.postHeaderContent) } >
        <Link href="/#skills" >
          <a>SEE ALL SKILLS &gt;&gt;</a>
        </Link>
      </div>
      <div className={ commonStyles.clear }></div>
    </>
  )
}

export default function TopSkillsCard (props) {
  return (
    <>
      <CardContainer className={ styles.topSkillsCard } preHeaderContent={ 'TOP SKILLS' } postHeaderContent={ TopSkillsCardPostElement() }>
        <div className={ cx(commonStyles.left, styles.topSkillsText)}>
          { props.texts.topSkills.left.map((skill, index) => {
            return (
              <div key={ index }>{skill}</div>
            )
          })}
        </div>
        <div className={ cx(commonStyles.right, styles.topSkillsText) }>
          { props.texts.topSkills.right.map((skill, index) => {
            return (
              <div key={ index }>{skill}</div>
            )
          })}
        </div>
        <div className={ commonStyles.clear }>
        </div>
      </CardContainer>
    </>
  )
}
