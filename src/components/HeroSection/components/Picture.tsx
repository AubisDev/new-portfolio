import { motion } from 'framer-motion'

export const Picture = (): React.JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`picture relative p-10  min-w-[250px] min-h-[250px] max-w-[350px] max-h-[350px] lg:max-w-[450px] lg:max-h-[450px] z-50 lg:mb-0 mb-12`}
    >
      <motion.img
        initial={{ opacity: 0, backdropFilter: 'blur(16px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(0)' }}
        transition={{ duration: 3 }}
        src='https://i.ibb.co/kcMD6hC/photo-2022-07-21-19-04-40.jpg'
        alt=''
        className='object-cover w-[700px] h[500px] rounded-full aspect-square shadow-lg'
      />
    </motion.div>
  )
}
