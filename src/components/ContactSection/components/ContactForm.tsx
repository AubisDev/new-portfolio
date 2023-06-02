import { zoomIn } from '@/utils/motions'
import { motion } from 'framer-motion'

const ContactForm = () => {
  return (
    <motion.form
      variants={zoomIn(0.5, 1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='flex flex-col items-center w-1/3 mt-5 h-1/2 justify-evenly rounded- '
    >
      <input
        type='text'
        name='contactor'
        placeholder='Remitter name'
        className='w-4/5 px-2 py-2 mx-auto mb-4 text-gray-700 placeholder-gray-600 bg-transparent border-2 rounded-md dark:placeholder-gray-300 border-secondary dark:border-skyblue/70 dark:text-white_text focus:outline-none focus:border-secondary dark:focus:border-skyblue'
      />
      <input
        type='text'
        name='purpose'
        placeholder='Contact purpose'
        className='w-4/5 px-2 py-2 mx-auto mb-4 text-gray-700 placeholder-gray-600 bg-transparent border-2 rounded-md dark:placeholder-gray-300 border-secondary dark:border-skyblue/70 dark:text-white_text focus:outline-none focus:border-secondary dark:focus:border-skyblue'
      />
      <textarea
        name='purpose'
        placeholder='Details of contact'
        className='bg-transparent border-secondary dark:border-skyblue/70 placeholder-gray-600 dark:placeholder-gray-300 border-2 w-4/5 py-2 px-2 text-gray-700 dark:text-white_text rounded-md mb-4 mx-auto focus:outline-none focus:border-secondary dark:focus:border-skyblue min-h-[120px] h-[150px] max-h-[250px]'
      />
      <button
        type='submit'
        className='flex flex-row items-center justify-center w-2/5 py-2 m-auto rounded-md bg-light_secondary dark:bg-skyblue'
      >
        Send
      </button>
    </motion.form>
  )
}
export default ContactForm
