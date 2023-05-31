import { easeIn, motion } from 'framer-motion'
import { projectList } from '../utils/projectData'
import { Project } from '@/types'
import TechList from './TechList'
import ProjectLinks from './ProjectLinks'
import { staggerContainer } from '../../../utils/motions'
import projectbg from '@/assets/svg/projectbg.svg'
const ProjectList = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='relative flex flex-wrap justify-center w-full m-auto gap-x-6 gap-y-5 '
    >
      <img
        src={projectbg}
        alt='bgpattern'
        className='absolute object-cover w-full h-full opacity-20 z-1'
      />
      {projectList.map((project: Project, i) => (
        <motion.div
          key={project.title + i}
          variants={staggerContainer()}
          className='w-[43%] h-[350px] bg-lightgray group/item duration-300  shadow-lg rounded-lg relative z-[500]'
        >
          <img
            src={project.desktopImg}
            className='absolute z-0 object-cover w-full h-full rounded-lg'
            alt={project.title}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: easeIn, type: 'spring' }}
            className='invisible flex-col group-hover/item:visible group/info absolute flex items-center justify-between p-12 text-gray-900 rounded-lg bg-black bg-opacity-[85%] h-full w-full z-[200]'
          >
            <ProjectTitle title={project.title} />
            <TechList techs={project.techs} />
            <ProjectLinks />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}
export default ProjectList

const ProjectTitle = ({ title }: { title: string }) => {
  return (
    <p className='text-3xl font-bold text-center capitalize text-yellow '>
      {title}
    </p>
  )
}
