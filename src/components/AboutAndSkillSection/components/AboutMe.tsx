import softwareDeveloperIcon from '@/assets/images/software-dev.png'
import Divider from '@/components/Divider'
import { fadeIn } from '@/utils/motions'
import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <div className='relative flex flex-row items-center justify-between w-full px-20 pb-20'>
      <motion.div
        variants={fadeIn('right', '', 0, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='flex flex-col mt-10'
      >
        <h3 className='pb-2 text-4xl font-bold '>Sobre mi</h3>
        <Divider/>
        <p className='w-4/5 max-w-[700px] leading-7 break-'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
          ipsum eleifend pulvinar mollis. Pellentesque vel aliquet nulla. Ut sed
          nunc tempus, commodo velit volutpat, dapibus dolor. Fusce id sapien
          eget magna ullamcorper faucibus dictum eget odio. Proin dapibus ex id
          massa vehicula, nec euismod magna consectetur. Sed ultricies varius
          venenatis. Nulla sapien orci, faucibus ac varius a, mattis ut ante.
        </p>
      </motion.div>
      <motion.img
        variants={fadeIn('left', '', 0, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        src={softwareDeveloperIcon}
        alt='software developer icon '
        className='max-w-[400px] '
      />
    </div>
  )
}
export default AboutMe