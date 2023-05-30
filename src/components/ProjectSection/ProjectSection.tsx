import Divider from '../Divider'
import { useState } from 'react'
import { projectList } from './utils/projectData'
import { Project } from '@/types'
import MobileIcon from '../../assets/svg/mobile-icon.svg'
import DesktopIcon from '../../assets/svg/desktop-icon.svg'
import { easeIn, motion } from 'framer-motion'
import LinkOutIcon from '../../assets/svg/link-out-icon.svg'
import GithubIcon from '../../assets/svg/github-icon.svg'
import PlayIcon from '../../assets/svg/play-icon.svg'

const ProjectSection = () => {
  const [showMobileVersion, setShowMobileVersion] = useState(false)
  const toggleMobileVersion = () => setShowMobileVersion(!showMobileVersion)

  return (
    <section className='w-4/5 h-auto h-min-screen  justify-center flex flex-col pt-[20rem] text-white_text'>
      <div className='flex flex-row justify-between pb-4 mx-20 z-[1000]'>
        <h3 className='flex flex-col text-4xl font-bold '>
          Projects
          <Divider />
        </h3>
        <button onClick={toggleMobileVersion} className='cursor-pointer '>
          <img
            src={`${!showMobileVersion ? MobileIcon : DesktopIcon}`}
            className='w-12 h-12 '
            alt={`${showMobileVersion} ? 
              'Mobile Icon' : 'Desktop Icon' `}
          />
        </button>
      </div>
      <div role='list' className='flex flex-wrap w-full gap-x-10 gap-y-8 z-100'>
        {projectList.map((project: Project) => (
          <div
            key={project.title}
            className={` ${
              showMobileVersion ? 'w-[250px] h-[400px]' : 'w-[500px] h-[350px] '
            }  bg-lightgray group/item duration-300   shadow-lg rounded-lg relative `}
          >
            <img
              src={`${
                showMobileVersion ? project.mobileImg : project.desktopImg
              }`}
              className={` w-full object-cover   absolute rounded-lg z-0 ${
                showMobileVersion ? '' : 'h-full'
              }`}
              alt={project.title}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: easeIn, type: 'spring' }}
              className='invisible flex-col group-hover/item:visible group/info absolute flex items-center justify-between p-12 text-gray-900 rounded-lg bg-black bg-opacity-[85%] h-full w-full z-[200] '
            >
              <p className='text-3xl font-bold text-center capitalize text-yellow '>
                {project.title}
              </p>
              <div className='flex flex-wrap items-center justify-center w-4/5 h-auto pt-4 text-sm text-white'>
                {project.techs.map((tech) => (
                  <span className='px-2 py-1 mt-1 ml-1 border border-yellow rounded-xl bg-black/50'>
                    {tech}
                  </span>
                ))}
              </div>
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
                  <img
                    src={PlayIcon}
                    alt='new tab icon'
                    className='w-6 h-6 pl-2 mt-1'
                  />
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
