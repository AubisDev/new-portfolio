import { skillData } from '../utils/skills.utility'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay } from 'swiper'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motions'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Divider from '@/components/Divider'

const SkillsList = () => {
  return (
    <motion.div
      variants={fadeIn('up', '', 0, 1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='w-full h-auto'
    >
      <h3 className='flex flex-col pb-4 mx-20 text-4xl font-bold '>
        {`Skills`}
        <Divider/>
      </h3>
      <Swiper
        slidesPerView={6}
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
        className='w-[87%] mySwiper relative '
      >
        {skillData.map((skill) => (
          <SwiperSlide
            key={skill.skillName}
            className='px-4 bg-gradient-to-r from-sky-400/10 to-blue-500/10 hover:from-sky-400/30 hover:to-blue-500/30 duration-300 h-[200px] border-opacity-[0.05] shadow-yellow rounded-lg relative'
          >
            <div className='flex flex-col items-center justify-center h-full '>
              <img
                src={skill.icon}
                alt={skill.skillName}
                className={`${
                  skill.skillName === 'Zustand' ? 'w-32' : 'w-20'
                } h-20 `}
              />
              <p className='pt-2 font-bold text-gray-200 '>{skill.skillName}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}
export default SkillsList
