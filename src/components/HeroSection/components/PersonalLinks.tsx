import { DownloadIcon, GithubIcon, LinkedinIcon } from '@/components/svgs'
import { Toaster, toast } from 'sonner'

const GITHUB_LINK = 'https://github.com/AubisDev'
const LINKEDIN_LINK = 'https://www.linkedin.com/in/aubis-sanchez-torres/'

const Personalanks = () => {
  const linkStyle =
    'flex items-center text-gray-700 dark:text-white logo-wrapper dark:hover:bg-white/10 hover:bg-black/5 hover:text-secondary text-gray-700 dark:text-white p-2 rounded-lg '
  return (
    <footer className='pt-12 mb-12 md:mb-0 lg:pt-4'>
      <ul className='flex flex-row justify-center lg:justify-normal [&>*]:flex [&>*]:text-sm [&>button]:text-base font-semibold '>
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
