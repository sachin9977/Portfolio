import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import Heading from '../common/Heading'
import CTA from '../common/CTA'
import { intro, totalProjects, totalXp } from '../common/data'
import ME from '../../assets/profile 2.jpg'
import './About.css'

const About = () => {
  return (
    <section id='about'>
      <Heading intro='Get To Know' main='About Me'/>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ ME } alt='my other pic' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>{ totalXp }+ Years</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>{ totalProjects } Projects and counting...</small>
            </article>
          </div>

          <p>
            { intro }
          </p>

          <CTA />
        </div>
      </div>
    </section>
  )
}

export default About
