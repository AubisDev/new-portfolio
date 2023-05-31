import LinkOutIcon from '@/assets/svg/link-out-icon.svg'
import GithubIcon from '@/assets/svg/github-icon.svg'
import PlayIcon from '@/assets/svg/play-icon.svg'

const ProjectLinks = () => {
  return (
    <div className='flex flex-row items-center w-full text-sm justify-evenly'>
      <button className='flex flex-row items-center px-3 py-1 mt-1 font-semibold duration-300 ease-in bg-blue-400 border-white rounded-md hover:bg-blue-500 '>
        Live demo
        <img
          src={LinkOutIcon}
          alt='new tab icon'
          className='w-6 h-6 pl-2 mt-1'
        />
      </button>
      <a
        className='flex flex-row items-center px-3 py-1 mt-1 font-semibold duration-300 bg-green-400 border-white rounded-md hover:bg-green-500'
        target='_blank'
        href=''
      >
        Repository
        <img
          src={GithubIcon}
          alt='new tab icon'
          className='w-6 h-6 pl-2 mt-1'
        />
      </a>
      <button className='flex flex-row items-center px-3 py-1 mt-1 font-semibold duration-300 border-white rounded-md bg-yellow hover:bg-strong_yellow'>
        Watch preview
        <img src={PlayIcon} alt='new tab icon' className='w-6 h-6 pl-2 mt-1' />
      </button>
    </div>
  )
}
export default ProjectLinks