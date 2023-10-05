import { navData, footerSocials, redirect, GitHubSocial } from '../common/data'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <button onClick={() => redirect('header')} className='footer__logo'>Sachin Choudhary</button>

      <ul className='permalinks'>
        {
          navData.map(({ section, title }, id) => (
            <li key={ id }><button onClick={() => redirect(section)}>{ title }</button></li>
          ))
        }
      </ul>

      <div className='footer__socials'>
        {
          footerSocials.map(({ link, icon }, id) => (
            <a key={ id } href={ link } target='_blank' rel='noreferrer'>{ icon }</a>
          ))
        }
      </div>

      <div className='footer__copyright'>
        <small>
          &copy; { new Date().getFullYear() } Made with ❤️ by <a href={ GitHubSocial } target='_blank' rel='noreferrer'>Sachin Choudhary</a>
        </small>
      </div>
    </footer>
  )
}

export default Footer
