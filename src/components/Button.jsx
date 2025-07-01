import GlareHover from './glareHover/GlareHover'

const Button = ({ name }) => {
  return (
    <button className='w-[240px] h-[50px]'>
      <GlareHover
        glareColor='#ffffff'
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={1000}
        playOnce={false}
      >
        {name}
      </GlareHover>
    </button>
  )
}

export default Button
