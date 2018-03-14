import { h } from 'preact'
import { connect } from 'unistore/preact'

import { actions } from 'store'

import style from './styles.scss'

export default connect('activeSection', actions)(
  ({ title, sectionName, activeSection, switchCurrentSection }) => {
    return (
      <div
        class={`${style.buttonWrapper} ${activeSection === sectionName ? style.active : ''}`}
        onClick={switchCurrentSection}
        data-sectiontrigger={sectionName}>
        <button class={style.button}>{title}</button>
      </div>
    )
  })
