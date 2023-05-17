import downloadIcon from '@/assets/download-icon.svg'
import githubIcon from '@/assets/github-icon.svg'
import linkedinIcon from '@/assets/linkedin-icon.svg'

const Personalanks = () => {
  const linkStyle =
    'flex items-center p-2 text-white duration-300 rounded-lg  hover:bg-yellow cursor-pointer'
  return (
    <footer className='pt-4'>
      <ul className='flex flex-row py-2 [&>*]:flex [&>*]:text-sm [&>button]:text-base font-semibold'>
        <button className={linkStyle}>
          <img
            src={downloadIcon}
            alt='CV'
            className='w-[1.45rem] h-[1.45rem] pr-1 text-white '
          />
          Resume
        </button>
        <button className={`${linkStyle} mx-2`}>
          <img
            src={linkedinIcon}
            alt='linkedin'
            className='w-[1.45rem] h-[1.45rem] '
          />
        </button>
        <button className={linkStyle}>
          <img
            src={githubIcon}
            alt='github'
            className='w-[1.45rem] h-[1.45rem]  text-white'
          />
        </button>
      </ul>
    </footer>
  )
}
export default Personalanks
