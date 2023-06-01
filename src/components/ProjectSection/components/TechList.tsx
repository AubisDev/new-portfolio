const TechList = ({ techs }: { techs: string[] }) => {
  return (
    <div className='flex flex-wrap items-center justify-center w-4/5 h-auto text-sm text-white x'>
      {techs.map((tech) => (
        <span className='px-2 py-1 mt-1 ml-1 border border-skyblue rounded-xl bg-black/50'>
          {tech}
        </span>
      ))}
    </div>
  )
}
export default TechList
