import { useState } from 'react'
import { navData, isInViewport, redirect } from '../common/data'
import './Nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('header')

  window.addEventListener('scroll', () => {
    navData.forEach(({ section }) => {
      if (isInViewport(document.getElementById(section)))
        setActiveNav(section)
    })
  })

  return (
    <nav>
      {
        navData.map(({ section, title, icon }, id) => (
          <button key={ id } title={ title } onClick={() => redirect(section)} className={ activeNav === section ? 'active' : '' }>{ icon }</button>
        ))
      }
    </nav>
  )
}

export default Nav
