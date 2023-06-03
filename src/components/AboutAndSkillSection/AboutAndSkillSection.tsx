import AboutMe from './components/AboutMe'
import SkillsList from './components/SkillsList'

const AboutAndSkillSection = () => {
  return (
    <section
      id='about'
      className='flex flex-col w-screen h-screen overflow-hidden text-gray-700 bg-gray-100 dark:text-white dark:bg-lightgray z-[100]'
    >
      <AboutMe />
      <SkillsList />
    </section>
  )
}
export default AboutAndSkillSection
