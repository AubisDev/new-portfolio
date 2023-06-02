import { useState, useEffect } from 'react'

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
    <button onClick={handleClick} className='text-dark_orange dark:text-white'>
      {mode === 'light' ? 'Toggle Dark Mode' : 'Toggle Light Mode'}
    </button>
  )
}

export default ToggleDarkMode
