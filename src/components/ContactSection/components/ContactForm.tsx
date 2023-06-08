import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { zoomIn } from '@/utils/motions.js'
import { Toaster, toast } from 'sonner'
import { IFormInput } from '@/types.js'

const ContactForm = () => {
  const form = useRef<any>()
  /* Using the `useForm` hook from the `react-hook-form` library to register form inputs, handle form
  submission, reset the form, and manage form state including any validation errors. It is also
  specifying the type of form input data expected (`IFormInput`). The destructuring syntax is used
  to extract these functions and properties from the returned object. */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IFormInput>()

  /**
   * This function sends an email using emailjs and displays a success or error message using toast.
   */
  const sendEmail = () => {
    emailjs
      .sendForm(
        // @ts-ignore
        import.meta.env.VITE_EMAILJS_SERVICE,
        // @ts-ignore
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        // @ts-ignore
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success(
            'Email have been send. I Will reply as soon as possible'
          )
        },
        (error) => {
          toast.error('There have been an error: ' + error.text)
        }
      )
    reset()
  }

  return (
    <motion.form
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
      variants={zoomIn({ delay: 0.5, duration: 1 })}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='flex flex-col items-center w-4/5 mt-5 sm:w-1/2 lg:w-1/3 h-1/2 justify-evenly mb-[32rem] sm:mb-[10rem] lg:mb-0 pt-[1rem]'
    >
      <input
        {...register('remitter', {
          required: true,
          maxLength: 20,
          minLength: 4
        })}
        aria-invalid={errors.remitter ? 'true' : 'false'}
        placeholder='Remitter name'
        className='w-full px-2 py-2 mx-auto mb-4 text-gray-700 placeholder-gray-600 bg-transparent border-2 rounded-md lg:w-4/5 dark:placeholder-gray-300 border-secondary dark:border-skyblue/70 dark:text-white_text focus:outline-none focus:border-secondary dark:focus:border-skyblue'
      />
      {errors.remitter?.type === 'required' && (
        <p role='alert'>Remitter name is required</p>
      )}
      {errors.remitter?.type === 'maxLength' ||
        (errors.remitter?.type === 'minLength' && (
          <p role='alert'>Field must be 4-20 characters long</p>
        ))}

      <input
        {...register('contactPurpose', {
          required: true,
          maxLength: 20,
          minLength: 4
        })}
        aria-invalid={errors.contactPurpose ? 'true' : 'false'}
        placeholder='Contact purpose'
        className='w-full px-2 py-2 mx-auto mb-4 text-gray-700 placeholder-gray-600 bg-transparent border-2 rounded-md lg:w-4/5 dark:placeholder-gray-300 border-secondary dark:border-skyblue/70 dark:text-white_text focus:outline-none focus:border-secondary dark:focus:border-skyblue'
      />
      {errors.contactPurpose?.type === 'required' && (
        <p role='alert'>Remitter name is required</p>
      )}
      {errors.contactPurpose?.type === 'maxLength' ||
        (errors.remitter?.type === 'minLength' && (
          <p role='alert'>Field must be 4-20 characters long</p>
        ))}

      <textarea
        {...register('contactDetails', {
          required: true,
          maxLength: 300,
          minLength: 10
        })}
        placeholder='Contact Details'
        aria-invalid={errors.contactDetails ? 'true' : 'false'}
        className='bg-transparent border-secondary dark:border-skyblue/70 placeholder-gray-600 dark:placeholder-gray-300 border-2 w-full lg:w-4/5 py-2 px-2 text-gray-700 dark:text-white_text rounded-md mb-4 mx-auto focus:outline-none focus:border-secondary dark:focus:border-skyblue min-h-[120px] h-[150px] max-h-[250px]'
      />
      {errors.contactDetails?.type === 'required' && (
        <p role='alert'>Remitter name is required</p>
      )}
      {errors.contactDetails?.type === 'maxLength' ||
        (errors.remitter?.type === 'minLength' && (
          <p role='alert'>Field must be 4-20 characters long</p>
        ))}
      <button
        type='submit'
        className='flex flex-row items-center justify-center w-2/5 py-2 m-auto rounded-md bg-light_secondary dark:bg-skyblue'
      >
        Send
      </button>
      <Toaster richColors />
    </motion.form>
  )
}
export default ContactForm
