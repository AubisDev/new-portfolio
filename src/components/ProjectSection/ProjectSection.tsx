import Circuit from '../Circuit'
import Divider from '../Divider'
import ProjectList from './components/ProjectList'

const ProjectSection = () => {
  return (
    <section
      id='projects'
      className='relative flex flex-col justify-center w-full text-gray-700 bg-white/10 dark:text-white_text'
    >
      <div className='absolute object-cover w-full h-full'>
        <Circuit />
      </div>
      <div className='flex flex-row justify-between pb-4 mx-20 z-[1000] pt-[10rem] '>
        <h3 className='flex flex-col text-3xl font-bold uppercase'>
          Projects
          <Divider />
        </h3>
      </div>
      <ProjectList />
    </section>
  )
}

export default ProjectSection
