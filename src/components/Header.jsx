import { Link, useLocation } from 'react-router-dom'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import MobileNavs from './MobileNavs'
import { useState } from 'react'
import { HiOutlineBarsArrowUp } from 'react-icons/hi2'

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { pathname } = useLocation();
  return (
    <header className='header relative z-50'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center pe-4'>
          <div className='logo'>
            <img src='/logoSVG.svg' alt='MY LOGO' width={100} />
          </div>
          <ul className='text-[#7a7a7a] capitalize  lg:flex hidden justify-end gap-14 font-semibold nav-link'>
            <li>
              <Link className={`${pathname == "/" && "active-nav"}`} to={'/'}>home</Link>
            </li>
            <li>
              <Link className={`${pathname == "/about" && "active-nav"}`} to={'/about'}>about</Link>
            </li>
            <li>
              <Link className={`${pathname == "/resume" && "active-nav"}`} to={'/resume'}>resume</Link>
            </li>
            <li>
              <Link className={`${pathname == "/projects" && "active-nav"}`} to={'/projects'}>projects</Link>
            </li>
            <li>
              <Link className={`${pathname == "/blogs" && "active-nav"}`} to={'/blogs'}>blogs</Link>
            </li>
            <li>
              <Link className={`${pathname == "/contact" && "active-nav"}`} to={'/contact'}>contact</Link>
            </li>
          </ul>
          <ul className='flex items-center text-[#7a7a7a] gap-3 text-2xl'>
            <li>
              <a
                href='https://github.com/kaushal-33/'
                className='fs-5 text-secondary d-inline-block hover:text-white transition-all'
                target='_blank'
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/kaushal-varma-83034b2b8'
                className='fs-4 text-secondary d-inline-block hover:text-white transition-all'
                target='_blank'
              >
                <BsLinkedin />
              </a>
            </li>
            <li className='lg:hidden'>
              <button
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className='hover:text-white transition-all'
              >
                <HiOutlineBarsArrowUp />
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* mobile navs */}
      <div className='lg:hidden relative z-20'>
        <MobileNavs isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      </div>
    </header>
  )
}

export default Header
