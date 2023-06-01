export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay
      }
    }
  }
}

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut'
      }
    }
  }
}

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut'
      }
    }
  }
}

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? '-50%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut'
      }
    }
  }
}

export const staggerContainer = () => {
  return {
    hidden: { opacity: 0, y: 50 },
    show: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.25, duration: 0.5 }
    }
  }
}

export const staggerLetters = () => {
  return {
    normal: { filter: 'blur(0)', color: '#fff', textShadow: 'none' },
    show: {
      color: '#00c2ba',
      filter: 'blur(1px)',
      textShadow:
        '0 0 10px #00c2ba, 0 0 20px #00c2ba, 0 0 30px #00c2ba, 0 0 40px #00c2ba, 0 0 60px #00c2ba, 0 0 80px #00c2ba, 0 0 100px #00c2ba, 0 0 120px #00c2ba',
      transition: { staggerChildren: 0.25, duration: 0.5 }
    }
  }
}
