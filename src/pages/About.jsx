import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Button from '../components/Button'
import Header from '../components/Header'
import RotatingText from '../components/rotatingText/RotatingText'
import Title from '../components/Title'
import { IoIosArrowForward } from "react-icons/io";
import 'swiper/css';


const About = () => {
  return (
    <section className='bg-black text-secondary pb-10'>
      <Header />
      <div className='container mx-auto'>
        <div className='px-4'>
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
          <div className='flex flex-wrap gap-7 lg:justify-center justify-start xl:items-center mt-16'>
            <div className='md:w-4/12 lg:order-1 order-2'>
              <div className='h-full'>
                <div className='text-center overflow-hidden rounded-lg h-full'>
                  <img src="/me-2.jpg" alt="My picture" width="100%" className='object-cover h-full' />
                </div>
              </div>
            </div>
            <div className='lg:w-6/12 lg:order-2 order-1'>
              <div className=''>
                <h3 className='uppercase text-3xl font-secondary'>
                  professional <RotatingText
                    texts={['front - end', 'back - end']}
                    mainClassName="font-bold font-hero text-[#27a776]"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2500}
                  />web developer
                </h3>
                <p className='mt-4'>
                  Aside from coding, I like to contribute to open-source projects and keep up with new and developing technologies. I'm a firm believer in lifelong learning and constantly looking to broaden my skill set in order to provide innovative solutions.
                </p>
                <ul className='mt-7'>
                  <li className="flex font-semibold items-center mb-3">
                    <span className="text-[#27a776] text-2xl">
                      <IoIosArrowForward />
                    </span>
                    Birthday:
                    16 August 2000
                  </li>
                  <li className="flex font-semibold items-center mb-3">
                    <span className="text-[#27a776] text-2xl">
                      <IoIosArrowForward />
                    </span>
                    Age: 24
                  </li>
                  <li className="flex font-semibold items-center mb-3">
                    <span className="text-[#27a776] text-2xl">
                      <IoIosArrowForward />
                    </span>
                    Degree:
                    HSC/Intermediate
                  </li>
                  <li className="flex font-semibold items-center mb-3">
                    <span className="text-[#27a776] text-2xl">
                      <IoIosArrowForward />
                    </span>
                    Phone:
                    +91-8160149401
                  </li>
                  <li className="flex font-semibold items-center mb-3">
                    <span className="text-[#27a776] text-2xl">
                      <IoIosArrowForward />
                    </span>
                    Email:
                    varmakaushal33@gmail.com
                  </li>
                  <li className="flex font-semibold items-center mb-3">
                    <span className="text-[#27a776] text-2xl">
                      <IoIosArrowForward />
                    </span>
                    City:
                    Surat, Gujarat
                  </li>
                  <li className="flex font-semibold items-center">
                    <span className="text-[#27a776] text-2xl">
                      <IoIosArrowForward />
                    </span>
                    Freelance:
                    Available
                  </li>
                </ul>
                <p className='mt-7'>
                  Experienced Fullstack Developer with a keen attention to detail and 1 years of experience. Expertise in creating and executing online platforms. Skilled in front-end and adept at looking to utilize skills in a team setting for back-end development.
                </p>
              </div>
            </div>
          </div>
          <h3 className='mt-10 font-hero text-2xl capitalize text-center'>my skills</h3>
          <div className='mt-10 flex justify-center'>
            <Swiper
              slidesPerView={2}
              spaceBetween={0}
              loop={true}
              freeMode={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                992: {
                  slidesPerView: 3
                },
                1024: {
                  slidesPerView: 6
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='flex justify-center'>
                  <div className='w-[100px] h-[100px] tech-logo bg-[#27a776] rounded-full flex justify-center items-center grayscale cursor-pointer transition-all hover:grayscale-0'>
                    <img src="\technologiesLogos\html.png" alt="HTML Logo" width={50} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex justify-center'>
                  <div className='w-[100px] h-[100px] tech-logo bg-[#27a776] rounded-full flex justify-center items-center grayscale cursor-pointer transition-all hover:grayscale-0'>
                    <img src="\technologiesLogos\css.png" alt="HTML Logo" width={70} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex justify-center'>
                  <div className='w-[100px] h-[100px] tech-logo bg-[#27a776] rounded-full flex justify-center items-center grayscale cursor-pointer transition-all hover:grayscale-0'>
                    <img src="\technologiesLogos\jQuery.png" alt="HTML Logo" className='invert' width={70} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex justify-center'>
                  <div className='w-[100px] h-[100px] tech-logo bg-[#27a776] rounded-full flex justify-center items-center grayscale cursor-pointer transition-all hover:grayscale-0'>
                    <img src="\technologiesLogos\bootsrap.png" alt="HTML Logo" width={60} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex justify-center'>
                  <div className='w-[100px] h-[100px] tech-logo bg-[#27a776] rounded-full flex justify-center items-center grayscale cursor-pointer transition-all hover:grayscale-0'>
                    <img src="\technologiesLogos\javascript.png" alt="HTML Logo" width={60} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex justify-center'>
                  <div className='w-[100px] h-[100px] tech-logo bg-[#27a776] rounded-full flex justify-center items-center grayscale cursor-pointer transition-all hover:grayscale-0'>
                    <img src="\technologiesLogos\react.png" alt="HTML Logo" width={60} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex justify-center'>
                  <div className='w-[100px] h-[100px] tech-logo bg-[#27a776] rounded-full flex justify-center items-center grayscale cursor-pointer transition-all hover:grayscale-0'>
                    <img src="\technologiesLogos\vite.png" alt="HTML Logo" width={50} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex justify-center'>
                  <div className='w-[100px] h-[100px] tech-logo bg-[#27a776] rounded-full flex justify-center items-center grayscale cursor-pointer transition-all hover:grayscale-0'>
                    <img src="\technologiesLogos\redux.png" alt="HTML Logo" width={50} />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
