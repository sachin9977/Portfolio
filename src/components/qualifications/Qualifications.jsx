import { useState } from 'react'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import { BsCalendar3 } from 'react-icons/bs'
import { educationData, xpData } from '../common/data'
import Heading from '../common/Heading'
import './Qualifications.css'

const Qualifications = () => {
  const [toggleState, updateToggleState] = useState(1)

  const toggleTab = (idx) => updateToggleState(idx)

  return (
    <section id='qualifications'>
      <Heading intro='My Personal Journey' main='Qualifications'/>

      <div className='container qualifications__container'>
        <div className='qualifications__tabs'>
          <div
            className={
              toggleState === 1
              ? 'qualifications__btn btn btn-primary qualifications__active btn-flex'
              : 'qualifications__btn btn btn-flex'
            }
            onClick={() => toggleTab(1)}
          >
            <FaGraduationCap className='qualifications__icon'/> Education
          </div>

          <div
            className={
              toggleState === 2
              ? 'qualifications__btn btn btn-primary qualifications__active btn-flex'
              : 'qualifications__btn btn btn-flex'
            }
            onClick={() => toggleTab(2)}
          >
            <FaBriefcase className='qualifications__icon'/> Experience
          </div>
        </div>

        <div className='qualifications__sections'>
          <div className={
            toggleState === 1
            ? 'qualifications__content qualifications__content-active'
            : 'qualifications__content'
          }>
            {
              educationData.map(({ major, school, date }, id) => {
                let content =
                  <>
                    <h3 className='qualifications__title'>{ major }</h3>
                    <span className='qualifications__subtitle'>{ school }</span>
                    <div className='qualifications__calendar'>
                      <BsCalendar3 /> { date }
                    </div>
                  </>

                return (
                  <div key={ id } className='qualifications__data'>
                    <div>
                      { id % 2 === 0 && content }
                    </div>

                    <div>
                      <span className='qualifications__rounder'></span>
                      <span className='qualifications__line'></span>
                    </div>

                    <div>
                      { id % 2 !== 0 && content }
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className={
            toggleState === 2
            ? 'qualifications__content qualifications__content-active'
            : 'qualifications__content'
          }>
            {
              xpData.map(({ role, company, location, date }, id) => {
                let content =
                  <>
                    <h3 className='qualifications__title'>{ role }</h3>
                    <span className='qualifications__subtitle'>{ company } - { location }</span>
                    <div className='qualifications__calendar'>
                      <BsCalendar3 /> { date }
                    </div>
                  </>

                return (
                  <div key={ id } className='qualifications__data'>
                    <div>
                      { id % 2 === 0 && content }
                    </div>

                    <div>
                      <span className='qualifications__rounder'></span>
                      <span className='qualifications__line'></span>
                    </div>

                    <div>
                      { id % 2 !== 0 && content }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualifications
