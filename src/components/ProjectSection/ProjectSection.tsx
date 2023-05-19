import React from 'react'
import Divider from '../Divider'
import { useState } from 'react'
import { projectList } from './utils/projectData'
import { Project } from '@/types'
import MobileIcon from '../../assets/svg/mobile-icon.svg'
import DesktopIcon from '../../assets/svg/desktop-icon.svg'

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
      <div
        role='list'
        className='flex w-full flex-wrap gap-x-10 gap-y-8  z-100'
      >
        {projectList.map((project: Project) => (
          <div
            key={project.title}
            className={` ${
              showMobileVersion ? 'w-[250px] h-[400px]' : 'w-[500px] h-[350px] '
            }  bg-lightgray group/item duration-300 border-opacity-[0.05] shadow-yellow rounded-lg relative`}
          >
            <img
              src={`${
                showMobileVersion ? project.mobileImg : project.desktopImg
              }`}
              className={` w-full object-cover  absolute rounded-lg z-0 ${
                showMobileVersion ? '' : 'h-full'
              }`}
              alt={project.title}
            />
            <div className='invisible group-hover/item:visible group/info absolute bottom-0 bg-black-70 h-full w-full z-[200]'>
              <p className=' text-center font-semibold text-3xl'>
                {project.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
