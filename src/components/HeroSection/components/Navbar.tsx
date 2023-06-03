import DarkLogo from '@/assets/images/personal-logo.png'
import LightLogo from '@/assets/images/light-logo.png'
import { onClickToSection } from '@/utils/common'
import ToggleDarkMode from '../../ToggleDarkMode'

const Navbar = (): React.JSX.Element => {
  return (
    <nav className='container w-full absolute top-0 overflow-hidden z-[500] bg-white/90 border-b-2 border-lightgray/10 dark:bg-appbg/90 dark:border-white/10'>
      <div className='w-4/5  h-[10vh] flex flex-row items-center m-auto [&>*]:px-8 [&>*]:py-3 justify-between   text-skyblue '>
        <div>
          <img src={LightLogo} alt='AubisLogo' className='h-40 w-52' />
        </div>
        <ul className='flex [&>*]:px-8 [&>*]:py-3 mr-6 text-base '>
          <ToggleDarkMode />
          <li
            onClick={() => onClickToSection('about')}
            className='flex items-center duration-300 rounded-lg cursor-pointer text-secondary dark:text-white hover:text-light_secondary dark:hover:text-light_secondary'
          >
            About
          </li>
          <li
            onClick={() => onClickToSection('projects')}
            className='flex items-center duration-300 rounded-lg cursor-pointer text-secondary dark:text-white hover:text-light_secondary dark:hover:text-light_secondary'
          >
            Projects
          </li>
          <li
            onClick={() => onClickToSection('contact')}
            className='flex items-center duration-300 rounded-lg cursor-pointer text-secondary dark:text-white hover:text-light_secondary dark:hover:text-light_secondary'
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
