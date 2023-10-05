import { useState, useRef } from 'react'
import { HiOutlinePhone } from 'react-icons/hi'
import { MdOutlineEmail } from 'react-icons/md'
import { RiSendPlaneFill } from 'react-icons/ri'
import { ToastContainer, toast } from 'react-toastify'
import emailjs from 'emailjs-com'
import Heading from '../common/Heading'
import Loader from '../common/Loader'
import 'react-toastify/dist/ReactToastify.css'
import './Contact.css'

const Contact = () => {
  const [loadingState, setLoadingState] = useState(false)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setLoadingState(true)

    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAIL_USER_ID
    )
      .then(() => {
        toast.info('Thanks for reaching out 😃.', { icon: false })
        setLoadingState(false)
        e.target.reset()
      }, () => {
        toast.error('Something Went Wrong!!!.')
        setLoadingState(false)
      });
  }

  return (
    <section id='contact'>
      <Heading intro='Get In Touch' main='Contact Me' />

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='.contact__option-icon' />
            <h4>Email</h4>
            <h5>sc09626@gmail.com.com</h5>
            <a href='mailto:sc09626@gmail.com'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <HiOutlinePhone className='.contact__option-icon' />
            <h4>Phone</h4>
            <h5>+91-9977184307</h5>
            <a href='tel:+91-9977184307'>Contact Me</a>
          </article>
        </div>

        <form ref={ form } onSubmit={ sendEmail }>
          <input type='text' name='name' placeholder='Your Full Name' disabled={ loadingState } required />
          <input type='email' name='email' placeholder='Your Email' disabled={ loadingState } required />
          <textarea name='message' rows='7' placeholder='Your Message' disabled={ loadingState } required></textarea>
          <button type='submit' className={ loadingState ? 'btn btn-primary' : 'btn btn-primary'} disabled={ loadingState }>
            Send Message
            { loadingState ? <Loader className='contact__option-send-icon' /> : <RiSendPlaneFill className='contact__option-send-icon' /> }
          </button>
        </form>
      </div>

      <ToastContainer
        position='top-right'
        hideProgressBar
        newestOnTop
        pauseOnFocusLoss
        theme='colored'
      />
    </section>
  )
}

export default Contact
