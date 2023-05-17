import AboutMe from './components/AboutMe'
import SkillsList from './components/SkillsList'

const AboutAndSkillSection = () => {
  return (
    <section className='flex flex-col w-4/5 h-screen text-white'>
      <AboutMe />
      <SkillsList />
    </section>
  )
}
export default AboutAndSkillSection
