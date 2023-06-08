import { GithubIcon, LinkOutIcon, PlayIcon } from '@/components/svgs'

interface ProjectLinksProps {
  liveDemoLink: string
  repositoryLink: string
}

const ProjectLinks = ({ liveDemoLink, repositoryLink }: ProjectLinksProps) => {
  return (
    <div className='flex flex-row items-center justify-center w-2/5 text-xs lg:text-sm '>
      <a
        href={liveDemoLink}
        target='_blank'
        className='flex flex-row items-center px-2 font-semibold text-gray-700 duration-300 ease-in border-white rounded-md stroke-white lg:py-1 hover:bg-gray-400 fill-white dark:text-white'
      >
        <LinkOutIcon />
      </a>
      <a
        className='flex flex-row items-center p-2 font-semibold text-gray-700 duration-300 border-white rounded-md stroke-white lg:mx-2 lg:py-1 hover:bg-gray-400 fill-white dark:text-white'
        target='_blank'
        href={repositoryLink}
      >
        <GithubIcon />
      </a>
      <button className='flex flex-row items-center p-2 font-semibold text-gray-700 duration-300 border-white rounded-md stroke-white lg:py-1 hover:bg-gray-400 fill-white dark:text-white'>
        <PlayIcon />
      </button>
    </div>
  )
}
export default ProjectLinks
