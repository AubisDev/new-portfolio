import { SkillsList, AboutMe } from './components'

const AboutAndSkillSection = () => {
  return (
    <section
      id='about'
      className='flex flex-col w-screen min-h-screen h-auto overflow-hidden text-gray-700 bg-gray-100 dark:text-white dark:bg-lightgray z-[100]'
    >
      <AboutMe />
      <SkillsList />
    </section>
  )
}
export default AboutAndSkillSection
