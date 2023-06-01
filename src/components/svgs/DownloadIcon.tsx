const DownloadIcon = () => {
  return (
    <div className='flex flex-row items-center p-2 duration-300 rounded-lg cursor-pointer logo-wrapper hover:bg-white/10 fill-white '>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='currentColor'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className='ai ai-Download'
      >
        <path d='M12 15V3m0 12l-4-4m4 4l4-4' />
        <path d='M2 17l.621 2.485A2 2 0 0 0 4.561 21H19.439a2 2 0 0 0 1.94-1.515L22 17' />
      </svg>
      <span className='pl-1'>Download</span>
    </div>
  )
}

export default DownloadIcon