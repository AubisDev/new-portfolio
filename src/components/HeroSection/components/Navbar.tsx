const Navbar = (): React.JSX.Element => {
  return (
    <nav className='container absolute top-0 w-full px-16 overflow-hidden'>
      <div className='w-4/5 h-[10vh] flex flex-row items-center m-auto [&>*]:px-6 [&>*]:py-3    text-yellow '>
        <h4 className='flex-1 '>Logo</h4>
        <button className='flex items-center text-gray-300 hover:bg-yellow'>
          Project
        </button>
        <button className='flex items-center text-gray-300 hover:bg-yellow'>
          About
        </button>
        <button className='flex items-center text-gray-300 hover:bg-yellow'>
          Contact
        </button>
      </div>
    </nav>
  )
}
export default Navbar
