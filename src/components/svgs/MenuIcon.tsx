interface MenuIconProps {
  toogleMenu: () => void
}

const MenuIcon = ({ toogleMenu }: MenuIconProps) => {
  return (
    <div
      onClick={() => toogleMenu()}
      className='flex justify-end w-1/2 ml-4 text-gray-700 dark:text-white'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='28'
        height='28'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='ai ai-ThreeLineHorizontal'
      >
        <path d='M5 6h14M5 12h14M5 18h14' />
      </svg>
    </div>
  )
}
export default MenuIcon
