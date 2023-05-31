import Divider from '../Divider'
import ProjectList from './components/ProjectList'

const ProjectSection = () => {
  return (
    <section className='w-4/5 h-auto h-min-screen justify-center flex flex-col pt-[20rem] text-white_text'>
      <div className='flex flex-row justify-between pb-4 mx-20 z-[1000]'>
        <h3 className='flex flex-col text-4xl font-bold '>
          Projects
          <Divider />
        </h3>
      </div>
      <ProjectList />
    </section>
  )
}

export default ProjectSection