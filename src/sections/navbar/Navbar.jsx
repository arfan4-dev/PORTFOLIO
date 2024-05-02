/* eslint-disable jsx-a11y/anchor-is-valid */
import './navbar.css'
import Logo from '../../assets/White logo - no background.png'
import { IoIosColorPalette } from 'react-icons/io'
import data from './data'
import { useModalContext } from '../../context/modal-context'
import { SlList } from "react-icons/sl";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useState } from 'react'
const Navbar = () => {
  const { showModalHandler } = useModalContext();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div>
      <nav>
        <div className='container nav__container'>
          <a href="#" className='hidden lg:block lg:w-10 lg:h-10 overflow-hidden rounded-full'>
            <img src={Logo} alt="" className='' />
          </a>
          <p className='block lg:hidden lg:w-10 lg:h-10 overflow-hidden rounded-full'>
            <SlList className='text-[#fff]' onClick={toggleDrawer} />
          </p>
          <ul className='text-[10px] lg:text-[14px] hidden lg:flex gap-[1.5rem] lg:gap-[3.5rem] '>
            {
              data.map((item, index) => {
                return (
                  <li key={item.id}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                )
              })
            }
          </ul>

          <button id='theme__icon' onClick={showModalHandler}><IoIosColorPalette className='text-[1.5rem] lg:text-[2rem]' /></button>
        </div>


      </nav>
      <div className=''>
        {isOpen && <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='left'
          className='block pl-2 pt-3'
          enableOverlay={true}
          lockBackgroundScroll={true}

        >
          <a href="#" className=' flex justify-between items-center text-[#000] gap-x-2 overflow-hidden rounded-full'>
            <p className='text-[14px] font-semibold'>PERSONAL</p>
            <img src={Logo} alt="" className='w-[20%] ' />
          </a>
          <ul className=' text-[10px] ml-[5px] flex flex-col gap-[1.5rem] '>
            {
              data.map((item, index) => {
                return (
                  <li className='text-black' key={item.id}>
                    <p href={item.link}>{item.title}</p>
                  </li>
                )
              })
            }
          </ul>
        </Drawer>}
      </div>

    </div>

  )
}

export default Navbar

