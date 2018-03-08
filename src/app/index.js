import { h } from 'preact'

import RegionSidebar from './components/region-sidebar'
import RegionContent from './components/region-content'

// Global style and CSS custom properties
import 'reset.scss'
import 'normalize.scss'
import 'utils.scss'
import style from './styles.scss'

export default function App () {
  return (
    <div id={style.appWrapper} class='flex'>
      <RegionSidebar />
      <RegionContent />
    </div>
  )
}
