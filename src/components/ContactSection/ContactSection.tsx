import { motion } from 'framer-motion'
import Divider from '../Divider'
import ContactIlustration from '@/assets/svg/sending-emails.svg'
import { slideIn, zoomIn } from '@/utils/motions'

const ContactSection = () => {
  return (
    <section className='w-full h-screen m-auto h-min-screen bg-[#35343c] mt-20 flex items-center justify-center flex-row z-[500]'>
      <motion.div
        variants={slideIn('left', 'spring', 0.3, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='flex flex-col items-center '
      >
        <h3 className='flex flex-col text-4xl font-bold text-white text-center'>
          <span>Wanna get in touch?</span> <span>Contact me!</span>
        </h3>
        <Divider />
        <img
          src={ContactIlustration}
          alt='contact ilustration'
          className='-mt-10'
        />
      </motion.div>
      <motion.form
        variants={zoomIn(1, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='w-1/3 h-1/2 flex items-center justify-evenly  flex-col rounded- mt-5 '
      >
        <input
          type='text'
          name='contactor'
          placeholder='Remitter name'
          className='bg-transparent border-skyblue/70 border w-4/5 py-2 px-2 text-white_text rounded-md mb-4 mx-auto focus:outline-none focus:border-skyblue'
        />
        <input
          type='text'
          name='purpose'
          placeholder='Contact purpose'
          className='bg-transparent border-skyblue/70 border w-4/5 py-2 px-2 text-white_text rounded-md mb-4 mx-auto focus:outline-none focus:border-skyblue'
        />
        <textarea
          name='purpose'
          placeholder='Details of contact'
          className='bg-transparent border-skyblue/70 border w-4/5 py-2 px-2 text-white_text rounded-md mb-4 mx-auto focus:outline-none focus:border-skyblue min-h-[120px] h-[150px] max-h-[250px]'
        />
        <button type='submit' className='w-2/5 rounded-md bg-skyblue py-2'>
          Send
        </button>
      </motion.form>
    </section>
  )
}

export default ContactSection
