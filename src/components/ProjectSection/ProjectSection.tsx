import Divider from '../Divider'
import { ProjectList } from './components'

const ProjectSection = () => {
  return (
    <section
      id='projects'
      className='relative flex flex-col justify-center w-full text-gray-700 bg-white/10 dark:text-white_text z-100 pt-[10rem]'
    >
      <div className='absolute w-full h-full min-h-full sm:h-auto z-[1] bg-projectbg bg-cover bg-repeat top-0  ' />
      <div className='flex flex-row justify-between w-4/5 px-20 pb-4 m-auto z-[100] '>
        <h3 className='flex flex-col w-full text-3xl font-bold text-center uppercase lg:text-left'>
          Projects
          <Divider />
        </h3>
      </div>
      <ProjectList />
    </section>
  )
}

export default ProjectSection
