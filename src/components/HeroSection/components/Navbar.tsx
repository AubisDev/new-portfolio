import myLogo from '@/assets/images/personal-logo.png'
import { onClickToSection } from '@/utils/common'

const Navbar = (): React.JSX.Element => {
  return (
    <nav className='container w-4/5 absolute top-0 overflow-hidden z-[500] '>
      <div className=' h-[10vh] flex flex-row items-center m-auto [&>*]:px-8 [&>*]:py-3 justify-between   text-skyblue '>
        <div>
          <img src={myLogo} alt='AubisLogo' className='h-40 w-52' />
        </div>
        <ul className='flex [&>*]:px-8 [&>*]:py-3 mr-6 text-base '>
          <li
            onClick={() => onClickToSection('about')}
            className='flex items-center text-white duration-300 rounded-lg cursor-pointer hover:bg-skyblue hover:text-appbg'
          >
            About
          </li>
          <li
            onClick={() => onClickToSection('projects')}
            className='flex items-center text-white duration-300 rounded-lg cursor-pointer hover:bg-skyblue hover:text-appbg'
          >
            Projects
          </li>
          <li
            onClick={() => onClickToSection('contact')}
            className='flex items-center text-white duration-300 rounded-lg cursor-pointer hover:bg-skyblue hover:text-appbg'
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
