import { redirect } from './data'
// import Resume from '../../assets/resume-Akshat Arora.pdf'

const CTA = () => {
  return (
    <div className='cta'>
          {/* <a href={ Resume } download='Resume-Akshat Arora' className='btn'>Download Resume</a> */}
          <button onClick={() => redirect('contact')} className='btn btn-primary'>Let's Talk</button>
      </div>
  )
}

export default CTA
