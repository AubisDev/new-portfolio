import { skillData } from '../utils/skills.utility'
import Skill from './Skill'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Autoplay } from 'swiper'

const SkillsList = () => {
  return (
    <div className='w-full h-auto'>
      <h3 className='pb-4 text-3xl font-bold text-center '>Skills</h3>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[FreeMode, Autoplay]}
        className='w-4/5 mySwiper '
      >
        {skillData.map((skill) => (
          <SwiperSlide className='px-4 bg-lightgray h-[250px] border-2 border-yellow/20 rounded-lg relative'>
            <div className='absolute top-0 bottom-0 left-0 right-0'>
              <img
                src={skill.icon}
                alt={skill.skillName}
                className='w-20 h-20 '
              />
              <p className=''>{skill.skillName}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default SkillsList
