import DownloadIcon from '@/components/svgs/DownloadIcon'
import GithubIcon from '@/components/svgs/GithubIcon'
import LinkedinIcon from '@/components/svgs/LinkedinIcon'

const GITHUB_LINK = 'https://github.com/AubisDev'
const LINKEDIN_LINK = 'https://www.linkedin.com/in/aubis-sanchez-torres/'

const Personalanks = () => {
  const linkStyle =
    'flex items-center text-gray-700 dark:text-white logo-wrapper '
  return (
    <footer className='pt-4'>
      <ul className='flex flex-row justify-center lg:justify-normal py-2 [&>*]:flex [&>*]:text-sm [&>button]:text-base font-semibold '>
        <a href='' className={linkStyle}>
          <DownloadIcon />
        </a>
        <a href={LINKEDIN_LINK} target='_blank' className={`${linkStyle} mx-2`}>
          <LinkedinIcon />
        </a>
        <a href={GITHUB_LINK} target='_blank' className={linkStyle}>
          <GithubIcon />
        </a>
      </ul>
    </footer>
  )
}
export default Personalanks
