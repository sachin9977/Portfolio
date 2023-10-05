import { AiOutlineArrowUp } from 'react-icons/ai'
import { redirect } from '../common/data'
import './ScrollUp.css'

const ScrollUp = () => {
  window.addEventListener('scroll', () => {
    const scrollUp = document.getElementById('scrollup')

    if (window.scrollY >= 560)
      scrollUp.classList.add('show-scroll')
    else
      scrollUp.classList.remove('show-scroll')
  })

  return (
    <button onClick={() => redirect('header')} id='scrollup'>
      <AiOutlineArrowUp className='scroll__up-icon' />
    </button>
  )
}

export default ScrollUp
