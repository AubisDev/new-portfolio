import Divider from '../Divider'
import ProjectList from './components/ProjectList'

const ProjectSection = () => {
  return (
    <section
      id='projects'
      className='w-4/5 h-auto h-min-screen justify-center relative flex flex-col pt-[10rem] text-white_text bg-projectbg mb-20'
    >
      <div className='flex flex-row justify-between pb-4 mx-20 z-[1000]'>
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
