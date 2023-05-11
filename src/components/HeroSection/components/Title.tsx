const Title = (): React.JSX.Element => {
  return (
    <section className='flex flex-col'>
      <h1 className='text-6xl text-title font-bold text-white_text pb-4 '>
        <span className='text-yellow'>Aubis</span> Sanchez
      </h1>
      <h3 className='text-3xl flex text-title font-bold text-white_text max-w-[300px] border-b-4 rounded-xl pb-3 border-yellow'>
        Frontend Developer
      </h3>
      <p className='w-4/5 pt-4 text-base  text-normal text-white '>
        There's nothing like threatening to go live with a bunch of Bill Murray
        pictures on a website to 'encourage' your clients to send you their
        content faster. So here's a few generators you can use on your mockups
        and websites. P.S. You'll notice the image generators allow you to embed
        a URL directly into an tag.
      </p>
    </section>
  )
}
export default Title
