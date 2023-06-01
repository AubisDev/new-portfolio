import DownloadIcon from '@/components/svgs/DownloadIcon'
import GithubIcon from '@/components/svgs/GithubIcon'
import LinkedinIcon from '@/components/svgs/LinkedinIcon'

const Personalanks = () => {
  const linkStyle = 'flex items-center text-white logo-wrapper'
  return (
    <footer className='pt-4'>
      <ul className='flex flex-row py-2 [&>*]:flex [&>*]:text-sm [&>button]:text-base font-semibold '>
        <button className={linkStyle}>
          <DownloadIcon />
        </button>
        <button className={`${linkStyle} mx-2`}>
          <LinkedinIcon />
        </button>
        <button className={linkStyle}>
          <GithubIcon />
        </button>
      </ul>
    </footer>
  )
}
export default Personalanks
