import { skillData } from '../utils'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay, Navigation } from 'swiper'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motions'
import { useMediaQuery } from 'react-responsive'
import { Divider } from '@/components'
import { Direction } from '@/types.d'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

const SkillsList = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
  return (
    <motion.div
      variants={fadeIn({
        direction: Direction.up,
        type: '',
        delay: 0,
        duration: 1
      })}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='w-4/5 h-auto m-auto mb-32'
    >
      <h3 className='flex flex-col pb-4 mx-20 text-3xl font-bold text-center uppercase lg:text-left '>
        Skills
        <Divider />
      </h3>
      <Swiper
        slidesPerView={isMobile ? 3 : isTablet ? 4 : 6}
        spaceBetween={10}
        freeMode={true}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode, Autoplay, Navigation]}
        className='w-full lg:w-[87%] mySwiper relative max-w-[1000px] '
      >
        {skillData.map((skill) => (
          <SwiperSlide
            key={skill.skillName}
            className='px-4 bg-gradient-to-r min-w-[150px] max-w-[160px] from-gray-700/30 to-black/30 hover:from-sky-400/20 hover:to-blue-500/40 dark:from-sky-400/10 dark:to-blue-500/10 dark:hover:from-sky-400/30 dark:hover:to-blue-500/30 duration-300 h-[150px] sm:h-[200px] border-opacity-[0.05] shadow-yellow rounded-lg relative'
          >
            <div className='flex flex-col items-center justify-center h-full z-[100]'>
              <img
                src={skill.icon}
                alt={skill.skillName}
                className={`${
                  skill.skillName === 'Zustand' ? 'w-32' : 'w-12 sm:w-20'
                } h-12 sm:h-20 `}
              />
              <p className='pt-2 font-bold text-gray-800 dark:text-gray-200 '>
                {skill.skillName}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}
export default SkillsList
