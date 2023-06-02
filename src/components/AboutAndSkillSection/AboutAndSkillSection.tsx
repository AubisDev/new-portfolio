import AboutMe from './components/AboutMe'
import SkillsList from './components/SkillsList'

const AboutAndSkillSection = () => {
  return (
    <section
      id='about'
      className='flex flex-col w-screen h-screen text-gray-700 dark:text-white overflow-hidden bg-gray-100 dark:bg-lightgray z-[500]'
    >
      <AboutMe />
      <SkillsList />
    </section>
  )
}
export default AboutAndSkillSection
