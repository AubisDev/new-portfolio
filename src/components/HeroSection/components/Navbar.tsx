const Navbar = (): React.JSX.Element => {
  return (
    <nav className='container absolute w-full top-0 px-20'>
      <div className='w-4/5 h-[10vh] flex flex-row items-center m-auto [&>*]:px-6 [&>*]:py-3 [&>*]:rounded-full   text-yellow '>
        <h4 className='flex-1 '>Logo</h4>
        <button className='hover:bg-yellow text-gray-300 flex  items-center'>
          Project
        </button>
        <button className='hover:bg-yellow text-gray-300 flex items-center'>
          About
        </button>
        <button className='hover:bg-yellow text-gray-300 flex items-center'>
          Contact
        </button>
      </div>
    </nav>
  )
}
export default Navbar
