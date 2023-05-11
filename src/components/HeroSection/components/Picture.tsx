export const Picture = (): React.JSX.Element => {
  return (
    <div className='picture relative p-10'>
      <img
        src='https://picsum.photos/id/823/720'
        width='600'
        height='600'
        alt=''
        className='rounded-full'
      />
    </div>
  )
}
