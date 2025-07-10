import GlareHover from './glareHover/GlareHover'

const Button = ({ name, onClick }) => {
  return (
    <button className='w-full h-full' onClick={onClick}>
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
