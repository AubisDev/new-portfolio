import { DownloadIcon, GithubIcon, LinkedinIcon } from '@/components/svgs'
import { Toaster, toast } from 'sonner'

const GITHUB_LINK = 'https://github.com/AubisDev'
const LINKEDIN_LINK = 'https://www.linkedin.com/in/aubis-sanchez-torres/'

const Personalanks = () => {
  const linkStyle =
    'flex items-center text-gray-700 dark:text-white logo-wrapper hover:bg-secondary hover:text-white border-secondary/60  border-2 dark:border-white/20 sborder-2  dark:hover:bg-white/10 duration-300 hover:text-secondary text-gray-700 dark:text-white p-2 rounded-lg '
  return (
    <footer className='pt-12 mb-12 md:mb-0 lg:pt-5'>
      <ul className='flex flex-row justify-center lg:justify-normal [&>*]:flex [&>*]:text-sm [&>button]:text-base font-semibold items-end gap-4'>
        <button
          className={linkStyle}
          onClick={() => toast('Working on my resume, available soon')}
        >
          <DownloadIcon />
        </button>
        <a href={LINKEDIN_LINK} target='_blank' className={`${linkStyle} mx-2`}>
          <LinkedinIcon />
        </a>
        <a href={GITHUB_LINK} target='_blank' className={linkStyle}>
          <GithubIcon />
        </a>
      </ul>
      <Toaster />
    </footer>
  )
}
export default Personalanks
