import DarkLogo from '@/assets/images/personal-logo.png'
import LightLogo from '@/assets/images/light-logo.png'
import { useState, useEffect } from 'react'
import ToggleDarkMode from '@/components/ToggleDarkMode.js'
import { onClickToSection } from '@/utils/common.js'
import MenuIcon from './svgs/MenuIcon'

const Navbar = (): React.JSX.Element => {
  const [mode, setMode] = useState('light')
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    document.body.classList.add(mode)
    localStorage.setItem('theme', mode)
  }, [mode])

  useEffect(() => {
    localStorage.setItem('theme', 'light')
  }, [])

  const toogleMenu = () => setShowMobileMenu(!showMobileMenu)

  const handleMoveToSection = (section: string) => {
    setShowMobileMenu(false)
    onClickToSection(section)
  }

  /**
   * The handleClick function toggles between light and dark mode by removing the current mode class from
   * the body and setting the mode state to the opposite value.
   */
  const handleClick = () => {
    document.body.classList.remove(mode)
    setMode(mode === 'light' ? 'dark' : 'light')
    setShowMobileMenu(false)
  }

  return (
    <nav className='w-full fixed top-0 sm:overflow-hidden z-[500] bg-white/90 border-b-2 border-lightgray/10 dark:bg-appbg/90 dark:border-white/10'>
      <div className='w-full lg:w-4/5  h-[10vh] flex flex-row items-center m-auto  [&>*]:px-6 [&>*]:py-3   justify-center sm:justify-between   text-skyblue '>
        <div className='flex flex-1 sm:w-1/2'>
          <img
            src={mode === 'light' ? LightLogo : DarkLogo}
            alt='AubisLogo'
            className='h-32 mt-1 min-w-52'
          />
        </div>
        <ul className='[&>*]:px-7 [&>*]:py-3 text-base mr-14 w-1/2 justify-end hidden sm:flex'>
          <li>
            <ToggleDarkMode mode={mode} handleClick={handleClick} />
          </li>
          <li
            onClick={() => onClickToSection('about')}
            className='flex items-center text-gray-700 duration-300 rounded-lg cursor-pointer dark:text-white hover:text-secondary dark:hover:text-light_secondary'
          >
            About
          </li>
          <li
            onClick={() => onClickToSection('projects')}
            className='flex items-center text-gray-700 duration-300 rounded-lg cursor-pointer dark:text-white hover:text-secondary dark:hover:text-light_secondary'
          >
            Projects
          </li>
          <li
            onClick={() => onClickToSection('contact')}
            className='flex items-center text-gray-700 duration-300 rounded-lg cursor-pointer dark:text-white hover:text-secondary dark:hover:text-light_secondary'
          >
            Contact
          </li>
        </ul>
        <div className='relative flex w-1/2 sm:hidden '>
          <MenuIcon toogleMenu={toogleMenu} />
          {showMobileMenu ? (
            <ul className='absolute w-40 text-gray-700 font-bold bg-gray-300 -bottom-[250%] [&>*]:px-6 [&>*]:py-3'>
              <li
                onClick={() => handleMoveToSection('about')}
                className='cursor-pointer hover:bg-slate-400'
              >
                About
              </li>
              <li
                onClick={() => handleMoveToSection('projects')}
                className='cursor-pointer hover:bg-slate-400'
              >
                Projects
              </li>
              <li
                onClick={() => handleMoveToSection('contact')}
                className='cursor-pointer hover:bg-slate-400'
              >
                Contact
              </li>
            </ul>
          ) : null}
        </div>
      </div>
      <div className='fixed flex p-2 bg-gray-200 rounded-lg lg:hidden dark:bg-gray-300/30 dark:text-secondary right-5 bottom-5'>
        <ToggleDarkMode mode={mode} handleClick={handleClick} />
      </div>
    </nav>
  )
}
export default Navbar
