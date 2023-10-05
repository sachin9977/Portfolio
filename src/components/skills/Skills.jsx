import { BsPatchCheckFill } from 'react-icons/bs'
import { skillsData } from '../common/data'
import Heading from '../common/Heading'
import SwiperSlider from '../common/SwiperSlider'
import './Skills.css'

const Skills = () => {
  let skillItems = skillsData.map(({ domain, skills }) => (
    <div>
      <h3>{ domain }</h3>
      <div className='skills__content'>
        {
          skills.map(({ name, lvl }, id) => (
            <article key={ id } className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>{ name }</h4>
                <small className='text-light'>{ lvl }</small>
              </div>
            </article>
          ))
        }
      </div>
    </div>
  ))

  return (
    <section id='skills'>
      <Heading intro='What Skills I Have' main='Skills'/>

      <SwiperSlider
        swiperClass='skills__container'
        itemClass='skills__item'
        minWidth={ 850 }
        content={ skillItems }
      />
    </section>
  )
}

export default Skills
