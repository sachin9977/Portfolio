import Heading from '../common/Heading'
import CTA from '../common/CTA'
import { headerSocials, redirect } from '../common/data'
import ME from '../../assets/profile.jpg'
import './Header.css'

const Header = () => {
  return (
    <header id='header' className='container header__container'>
      <Heading intro='Hello, I&apos;m' main='Sachin Choudhary'/>

      <h5 className='text-light'>Full-Stack Developer and Flutter Developer</h5>

      <CTA />

      <div className='header__socials'>
        {
          headerSocials.map(({ link, icon }, id) => (
            <a key={ id } href={ link } target='_blank' rel='noreferrer'>{ icon }</a>
          ))
        }
      </div>

      <div className='me'>
        <img src={ ME } alt='my profile pic' />
      </div>

      <button onClick={() => redirect('about')} className='scroll__down'>Scroll Down</button>
    </header>
  )
}

export default Header
