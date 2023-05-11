import { motion } from 'framer-motion'
import wire from '@/assets/wire.svg'

const Circuit = (): React.JSX.Element => {
  return (
    <motion.img
      initial={{ opacity: 0, y: 500 }}
      animate={{
        opacity: [0.1, 0.2, 0.3, 0.1, 0.2, 0.3, 0.4, 0.5],
        y: 0
      }}
      transition={{ duration: 2 }}
      src={wire}
      alt='wired background'
      className='w-full absolute bottom-0  '
    />
  )
}
export default Circuit
