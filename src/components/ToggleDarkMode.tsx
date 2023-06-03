import { useState, useEffect } from 'react'
import lightModeIcon from '@/assets/svg/lightmode.svg'
import darkModeIcon from '@/assets/svg/darkmode.svg'

const ToggleDarkMode = () => {
  const [mode, setMode] = useState('light')

  useEffect(() => {
    document.body.classList.add(mode)
    localStorage.setItem('theme', mode)
  }, [mode])

  useEffect(() => {
    localStorage.setItem('theme', 'light')
  }, [])

  const handleClick = () => {
    document.body.classList.remove(mode)
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='relative flex flex-row'>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          value=''
          className='sr-only peer'
          onClick={() => handleClick()}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
          {' '}
          {mode === 'light' ? (
            <img src={darkModeIcon} alt='light mode icon' />
          ) : (
            <img src={lightModeIcon} alt='light mode icon' />
          )}
        </span>
      </label>
    </div>
  )
}

export default ToggleDarkMode
