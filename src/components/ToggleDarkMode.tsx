import lightModeIcon from '@/assets/svg/lightmode.svg'
import darkModeIcon from '@/assets/svg/darkmode.svg'

interface DarkModeProps {
  handleClick: () => void
  mode: string
}

const ToggleDarkMode = ({ handleClick, mode }: DarkModeProps) => {
  return (
    <div className='relative flex flex-row min-w-7 min-h-7'>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          value=''
          className='sr-only peer '
          onClick={() => handleClick()}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 hidden lg:block"></div>
        <span className='text-sm font-medium text-gray-900 lg:ml-3 dark:text-gray-300'>
          {' '}
          {mode === 'light' ? (
            <img
              src={darkModeIcon}
              alt='light mode icon'
              className='w-6 min-w-6 min-h-6 -h-6'
            />
          ) : (
            <img
              src={lightModeIcon}
              alt='light mode icon'
              className='w-6 min-w-6 min-h-6 -h-6'
            />
          )}
        </span>
      </label>
    </div>
  )
}

export default ToggleDarkMode
