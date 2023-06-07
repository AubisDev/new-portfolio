import LinkOutIcon from '@/assets/svg/link-out-icon.svg'
import GithubIcon from '@/assets/svg/github-icon.svg'
import PlayIcon from '@/assets/svg/play-icon.svg'

interface ProjectLinksProps {
  liveDemoLink: string
  repositoryLink: string
}

const ProjectLinks = ({ liveDemoLink, repositoryLink }: ProjectLinksProps) => {
  return (
    <div className='flex flex-col items-center justify-center w-full text-xs lg:flex-row lg:text-sm lg:justify-evenly gap-x-2'>
      <a
        href={liveDemoLink}
        target='_blank'
        className='flex flex-row items-center px-3 mt-1 font-semibold duration-300 ease-in bg-blue-400 border-white rounded-md lg:py-1 hover:bg-blue-500 '
      >
        Live demo
        <img
          src={LinkOutIcon}
          alt='new tab icon'
          className='w-6 h-6 pl-2 mt-1'
        />
      </a>
      <a
        className='flex flex-row items-center px-3 mt-1 font-semibold duration-300 bg-green-400 border-white rounded-md lg:py-1 hover:bg-green-500'
        target='_blank'
        href={repositoryLink}
      >
        Repository
        <img
          src={GithubIcon}
          alt='new tab icon'
          className='w-6 h-6 pl-2 mt-1'
        />
      </a>
      <button className='flex flex-row items-center px-3 mt-1 font-semibold duration-300 bg-yellow-300 border-white rounded-md lg:py-1 hover:bg-yellow-500'>
        Preview
        <img src={PlayIcon} alt='new tab icon' className='w-6 h-6 pl-2 mt-1' />
      </button>
    </div>
  )
}
export default ProjectLinks
