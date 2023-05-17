import { ISkill } from '@/types'

interface Props {
  skill: ISkill
}

const Skill = ({ skill }: Props) => {
  return (
    <div className='swiper-slide'>Slide 1</div>
    // <div className=' carousel-item'>
    //   <img src={skill.icon} alt={skill.skillName} className='h' />
    //   {/* <p className=''>{skill.skillName}</p> */}
    // </div>
  )
}
export default Skill
