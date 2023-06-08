import { EffectOptions, Direction } from '@/types'

export const textVariant = (
  options: Omit<EffectOptions, 'direction' | 'type' | 'duration'>
) => {
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
        delay: options.delay
      }
    }
  }
}

export const fadeIn = (options: EffectOptions) => {
  return {
    hidden: {
      x:
        options.direction === Direction.left
          ? 100
          : options.direction === Direction.right
          ? -100
          : 0,
      y:
        options.direction === Direction.up
          ? 100
          : options.direction === Direction.down
          ? -100
          : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: options.type,
        delay: options.delay,
        duration: options.duration,
        ease: 'easeOut'
      }
    }
  }
}

export const zoomIn = (options: Omit<EffectOptions, 'direction' | 'type'>) => {
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
        delay: options.delay,
        duration: options.duration,
        ease: 'easeOut'
      }
    }
  }
}

export const slideIn = (options: EffectOptions) => {
  return {
    hidden: {
      x:
        options.direction === Direction.left
          ? 100
          : options.direction === Direction.right
          ? -100
          : 0,
      y:
        options.direction === Direction.up
          ? 100
          : options.direction === Direction.down
          ? -100
          : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: options.type,
        delay: options.delay,
        duration: options.duration,
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
