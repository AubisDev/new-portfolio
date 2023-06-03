import CoderIcon from '@/assets/svg/coder.svg'
import Divider from '@/components/Divider.js'
import { fadeIn } from '@/utils/motions.js'

import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <div className='relative flex flex-row items-center justify-between w-4/5 px-20 pb-20 m-auto '>
      <motion.div
        variants={fadeIn('right', '', 0.5, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='flex flex-col mt-10'
      >
        <h3 className='text-3xl font-bold uppercase'>About me</h3>
        <Divider />
        <p className='w-4/5 max-w-[700px] leading-7 break-'>
          I am a highly motivated developer who has been working with
          JavaScript, React, TypeScript, and other relevant technologies for
          about 1.5 years. I possess a strong understanding of web development
          and am committed to growth and continuous improvement. I learn daily
          to deliver higher quality work. I actively seek new challenges and
          opportunities to expand my skills and knowledge. I am a team player
          with communication and collaboration skills.
        </p>
      </motion.div>
      <motion.img
        variants={fadeIn('left', '', 0, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        src={CoderIcon}
        alt='software developer icon '
        className='max-w-[250px] pt-12'
      />
    </div>
  )
}
export default AboutMe
