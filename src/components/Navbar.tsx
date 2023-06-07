import DarkLogo from '@/assets/images/personal-logo.png'
import LightLogo from '@/assets/images/light-logo.png'
import { useState, useEffect } from 'react'
import ToggleDarkMode from '@/components/ToggleDarkMode.js'
import { onClickToSection } from '@/utils/common.js'

const Navbar = (): React.JSX.Element => {
  const [mode, setMode] = useState('light')

  useEffect(() => {
    document.body.classList.add(mode)
    localStorage.setItem('theme', mode)
  }, [mode])

  useEffect(() => {
    localStorage.setItem('theme', 'light')
  }, [])

  /**
   * The handleClick function toggles between light and dark mode by removing the current mode class from
   * the body and setting the mode state to the opposite value.
   */
  const handleClick = () => {
    document.body.classList.remove(mode)
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <nav className='w-full fixed top-0 overflow-hidden z-[500] bg-white/90 border-b-2 border-lightgray/10 dark:bg-appbg/90 dark:border-white/10'>
      <div className='w-4/5  h-[10vh] flex flex-row items-center m-auto  [&>*]:px-6 [&>*]:py-3 justify-between   text-skyblue '>
        <div>
          <img
            src={mode === 'light' ? LightLogo : DarkLogo}
            alt='AubisLogo'
            className='h-40 mt-2 w-52'
          />
        </div>
        <ul className='flex [&>*]:px-7 [&>*]:py-3 text-base mr-14'>
          <ToggleDarkMode mode={mode} handleClick={handleClick} />
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
      </div>
    </nav>
  )
}
export default Navbar
