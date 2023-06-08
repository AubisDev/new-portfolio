import { Project } from '@/types.js'
import { staggerContainer } from '@/utils'
import { motion } from 'framer-motion'
import { projectList } from '../utils'
import ProjectLinks from './ProjectLinks'

const ProjectList = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='relative flex flex-wrap justify-center w-full lg:w-4/5 m-auto gap-x-6 gap-y-5 pb-[10rem] rounded-lg '
    >
      {projectList.map((project: Project, i) => (
        <motion.div
          key={project.title + i}
          variants={staggerContainer()}
          className='w-4/5 sm:w-[40%] h-[200px] sm:h-[150px] lg:h-[275px] bg-gray-200 dark:bg-lightgray group/item duration-300 shadow-lg relative z-[100] '
        >
          {project.liveDemoLink ? (
            <>
              <div className='h-[85%] w-full'>
                <img
                  src={project.desktopImg}
                  className='w-full h-full rounded-t-lg'
                  alt={project.title}
                />
              </div>
              <div className='w-full flex items-center flex-row h-[15%] border-b border-l border-r border-gray-300  bg-gray-300 dark:border-white/10 dark:bg-gray-700  px-4'>
                <p className='w-3/5 text-xs font-bold text-gray-800 capitalize dark:text-white lg:text-base '>
                  {project.title}
                </p>
                <ProjectLinks
                  repositoryLink={project.repositoryLink}
                  liveDemoLink={project.liveDemoLink}
                />
              </div>
            </>
          ) : (
            <div className='flex items-center justify-center w-full h-full'>
              <p className='text-3xl'>COMING SOON</p>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
export default ProjectList
