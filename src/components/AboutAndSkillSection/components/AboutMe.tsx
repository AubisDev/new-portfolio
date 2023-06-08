import CoderIcon from '@/assets/svg/coder.svg'
import Divider from '@/components/Divider.js'
import { Direction } from '@/types.d'
import { fadeIn } from '@/utils/motions.js'
import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <div className='relative flex flex-col items-center justify-between w-full px-12 pb-20 m-auto sm:px-20 sm:w-4/5 lg:flex-row '>
      <motion.div
        variants={fadeIn({
          direction: Direction.right,
          type: '',
          delay: 0.5,
          duration: 1
        })}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='flex flex-col w-full mt-10'
      >
        <h3 className='w-full text-3xl font-bold text-center uppercase lg:text-left '>
          About me
        </h3>
        <Divider />
        <p className='w-full lg:w-4/5 max-w-[700px] tracking-wide lg:tracking-wide lg:mt-4 lg:text-left text-center sm:text-sm !leading-[1.75em]'>
          I am Electronic Engineering student and a motivated developer who has
          been working with JavaScript, React, TypeScript, and other frontend
          relevant technologies for about 1.5 years. I possess a strong
          understanding of web development and am committed to growth and
          continuous improvement. I learn daily to deliver higher quality work.
          I actively seek new challenges and opportunities to improve my skills
          and knowledge.
        </p>
      </motion.div>
      <motion.img
        variants={fadeIn({
          direction: Direction.left,
          type: '',
          delay: 0,
          duration: 1
        })}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        src={CoderIcon}
        alt='software developer icon '
        className='max-w-[250px] min-w-[100px] pt-12'
      />
    </div>
  )
}
export default AboutMe
