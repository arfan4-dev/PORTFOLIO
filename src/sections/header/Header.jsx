/* eslint-disable jsx-a11y/anchor-is-valid */
import './header.css'
import data from './data'
import HeaderImage from '../../assets/logo1.jpg'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'


const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <header className='h-[80vh] lg:h-[100vh] lg:mt-[5rem]' id="header">
      <div className="container header__container">
        <div className="w-[15rem] h-[18rem] lg:w-[18rem] lg:h-[22rem] header__profile mb-6" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portrait" />

        </div>
        <h3 className=''>Muhammad Arfan</h3>
        <p className='lg:w-[35rem] text-[10px] lg:text-[1rem]'>
          You are a click away from building your dream website
          or web app. Send me the details of your project for a modern, mobile responsive, highly performant website today!
        </p>
        <div className="flex items-center gap-[1.2rem]" data-aos="fade-up">
          <a href="#letstalk" className='btn primary '>Let's Talk</a>
          <a href="#" className='btn light'>My work</a>
        </div>

        <div className="w-[1rem]  lg:w-[1.8rem] header__social">
          {
            data.map((item, index) => {
              return (
                <a className='mr-5' href="item.link" target='_blank' key={item.id}>{item.icon}</a>
              )
            })
          }


        </div>
      </div>

    </header>
  )
}

export default Header