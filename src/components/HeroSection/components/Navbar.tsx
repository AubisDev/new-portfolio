import myLogo from '@/assets/images/personal-logo.png'

const Navbar = (): React.JSX.Element => {
  const onClickToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav className='container w-4/5 absolute top-0 overflow-hidden z-[500]'>
      <div className=' h-[10vh] flex flex-row items-center m-auto [&>*]:px-6 [&>*]:py-3 justify-between   text-yellow '>
        <div>
          <img src={myLogo} alt='AubisLogo' className=' w-52 h-40' />
        </div>
        <div className='flex [&>*]:px-10 [&>*]:py-3 mr-6 text-lg'>
          <button
            onClick={() => onClickToSection('about')}
            className='flex items-center text-gray-300 hover:bg-yellow cursor-pointer'
          >
            About
          </button>
          <button
            onClick={() => onClickToSection('projects')}
            className='flex items-center text-gray-300 hover:bg-yellow cursor-pointer'
          >
            Projects
          </button>
          <button
            onClick={() => onClickToSection('contact')}
            className='flex items-center text-gray-300 hover:bg-yellow cursor-pointer'
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
