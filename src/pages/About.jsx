import Button from '../components/Button'
import Header from '../components/Header'
import Title from '../components/Title'

const About = () => {
  return (
    <section className='bg-black pb-10 text-secondary'>
      <Header />
      <div className='container mx-auto'>
        <div className=''>
          <div className='mt-11'>
            <Title title={'about'} />
          </div>
          <p className='mt-5 md:w-6/12 text-center mx-auto text-lg'>
            I am a results-oriented Fullstack Developer with 1 years of
            expertise developing reliable websites. Possessing a solid
            background in front-end and back-end programming, I thrive at
            utilizing a broad range of abilities to produce scalable and
            responsive solutions. My enthusiasm for clear code and
            problem-solving motivates me to constantly investigate new
            frameworks and technologies in order to improve user experience and
            project efficiency.
          </p>
          <div className='text-center mt-7'>
            <Button name={'AVAILABLE FOR HIRE'} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
