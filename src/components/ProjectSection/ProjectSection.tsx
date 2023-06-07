import Circuit from '../Background'
import Divider from '../Divider'
import ProjectList from './components/ProjectList'

const ProjectSection = () => {
  return (
    <section
      id='projects'
      className='relative flex flex-col justify-center w-full text-gray-700 bg-white/10 dark:text-white_text z-100'
    >
      <div className='absolute object-cover w-full h-full'>
        <Circuit />
      </div>
      <div className='flex flex-row justify-between pb-4 z-100 pt-[10rem] w-4/5 m-auto px-20   '>
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
