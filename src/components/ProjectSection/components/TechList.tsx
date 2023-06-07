const TechList = ({ techs }: { techs: string[] }) => {
  return (
    <div className='flex-wrap items-center justify-center hidden w-4/5 h-auto text-sm text-white lg:flex '>
      {techs.map((tech) => (
        <span
          key={tech}
          className='px-2 py-1 mt-1 ml-1 border border-skyblue rounded-xl bg-black/50'
        >
          {tech}
        </span>
      ))}
    </div>
  )
}
export default TechList
