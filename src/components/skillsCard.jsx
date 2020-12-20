import CardContainer from './cardContainer'
import React from 'react'
import styles from './skillsCard.module.scss'
import commonStyles from '../commonStyles/tools.scss'
import { cx } from '../lib/cssTools'

function SkillBar (props) {
  const { className, fullness } = props

  const width = `${fullness * 100}%`
  const width2 = `${(1 - fullness) * 100}%`

  return (
    <div className={ cx(className) } style={{ position: 'relative' }}>
      <div style={{ width: width }} className={ styles.skillBarLeft }></div>
      <div style={{ width: width2 }} className={ styles.skillBarRight }></div>
    </div>
  )
}

export default function SkillsCard (props) {
  return (
    <>
      <CardContainer className={ styles.skillsCard } preHeaderContent={'SKILLS'} cardId={'skills'}>
        <div className={ styles.skillsHeader }>
          <div className={ styles.titlePlaceHolder }></div>
          <div className={ styles.levelDescriptions }>
            <div className={ cx(styles.start, commonStyles.left) }>BEGINNER</div>
            <div className={ cx(styles.end, commonStyles.right) }>EXPERT</div>
          </div>
        </div>
        { props.skills.map((skill, index) => {
          return (
            <div key={ index } className={ styles.skill }>
              <div className={ styles.skillTitle }>{ skill.title }</div>
              <SkillBar className={ styles.skillBar } fullness={ skill.value }/>
              { skill.members && (
                <div className={ styles.skillMembers }>&mdash; { skill.members.join(', ')}</div>
              )}
            </div>
          )
        })
        }
      </CardContainer>
    </>
  )
}
