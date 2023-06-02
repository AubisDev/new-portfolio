import { motion } from 'framer-motion'

export const Picture = (): React.JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`picture relative p-10  max-w-[500px] max-h-[500px] z-50`}
    >
      <motion.img
        initial={{ opacity: 0, backdropFilter: 'blur(16px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(0)' }}
        transition={{ duration: 3 }}
        src='https://i.ibb.co/kcMD6hC/photo-2022-07-21-19-04-40.jpg'
        alt=''
        className='object-cover w-[700px] h[500px] rounded-full aspect-square'
      />
    </motion.div>
  )
}
