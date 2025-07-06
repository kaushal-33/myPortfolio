import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Button from '../components/Button'
import Header from '../components/Header'
import RotatingText from '../components/rotatingText/RotatingText'
import Title from '../components/Title'
import { IoIosArrowForward } from "react-icons/io";
import 'swiper/css';
import { LiaStarSolid } from 'react-icons/lia';
import 'swiper/css/pagination';
import Footer from '../components/Footer';


const About = () => {

  const skillsLogo = [
    { logo: "/technologiesLogos/html.png", size: 50 },
    { logo: "/technologiesLogos/css.png", size: 70 },
    { logo: "/technologiesLogos/jQuery.png", size: 70 },
    { logo: "/technologiesLogos/bootsrap.png", size: 60 },
    { logo: "/technologiesLogos/cpp.png", size: 60 },
    { logo: "/technologiesLogos/javascript.png", size: 60 },
    { logo: "/technologiesLogos/react.png", size: 60 },
    { logo: "/technologiesLogos/vite.png", size: 60 },
    { logo: "/technologiesLogos/redux.png", size: 60 },
  ]

  const testimonials = [
    {
      review: "Shows a high level of skill in front-end and back-end web development.They possess extensive knowledge in HTML, CSS, JavaScript, and multiple frameworks.such as React.js, Angular, and Vue.js. Their comprehension of adaptable designThe principles they follow guarantee that the websites they create are easy to use on all devices.",
      profileImg: "/testimonials/sir.jpeg",
      name: "anant shah",
      designation: "Freelancer"
    },
    {
      review: "Consistently tackles challenges with a problem-solving attitude. They possess showed inventiveness and originality in creating strategies that enhance user experience Gain expertise and optimize procedures. Their skill in troubleshooting and fixing errors.Troubleshooting guarantees that there is little to no disruption in operations and problems are resolved quickly and effectively.",
      profileImg: "/testimonials/suraj.jpeg",
      name: "suraj yadav",
      designation: "web designer"
    },
    {
      review: "In team settings, Kaushal is an effective communicator and collaborator. They actively contribute ideas, provide constructive feedback, and work well with cross-functional teams to achieve project goals. Their clear communication style facilitates understanding and alignment among team members, fostering a productive work environment.",
      profileImg: "/testimonials/dev.jpeg",
      name: "Divyadarshan Das",
      designation: "dev-Ops"
    },
    {
      review: "Kaushal is skilled in server-side languages such as Node.js and Python on the backend. (Django, Flask), as well as Java. RESTful APIs have been effectively incorporated by them linked with various databases such as MySQL, MongoDB, and PostgreSQL. Their capacity to enhancing database performance and efficaciously handling information leads to significant improvementsthe functioning of online applications.",
      profileImg: "/testimonials/aryan.jpeg",
      name: "Aryan Patel",
      designation: "fullstack developer"
    },
  ]

  return (
    <>
      <Header />
      <section className='bg-black text-secondary py-16'>
        <div className='container mx-auto'>
          <div className='px-4'>
            <div>
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
            {/* skills */}
            <h3 className='mt-12 font-hero text-2xl capitalize text-center'>my skills</h3>
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
                {skillsLogo.map((obj, idx) => <SwiperSlide key={idx}>
                  <div className='flex justify-center'>
                    <div className='w-[100px] h-[100px] tech-logo bg-[#27a776] rounded-full flex justify-center items-center grayscale cursor-pointer transition-all hover:grayscale-0'>
                      <img src={obj.logo} alt="HTML Logo" width={obj.size} />
                    </div>
                  </div>
                </SwiperSlide>)}
              </Swiper>
            </div>

            <h6 className='font-hero uppercase mt-16 text-center'>testimonials</h6>
            <h3 className='text-4xl mb-14 text-center'>What they are saying</h3>
            {/* testimonials */}
            <div className='flex justify-center'>
              <Swiper
                slidesPerView={1}
                spaceBetween={40}
                pagination={{ el: '.custom-pagination', clickable: true }}
                loop={true}
                freeMode={true}
                effect="coverflow"
                speed={1000}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  992: {
                    slidesPerView: 2
                  },
                  1024: {
                    slidesPerView: 3
                  },
                }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                {testimonials.map((client, idx) => <SwiperSlide key={idx}>
                  <div className='h-full'>
                    <div className='mx-1 border border-[#27a776] rounded-lg p-8 h-full'>
                      <div className='flex justify-center text-yellow-400 text-xl mb-5'>
                        <LiaStarSolid />
                        <LiaStarSolid />
                        <LiaStarSolid />
                        <LiaStarSolid />
                        <LiaStarSolid />
                      </div>
                      <p className='text-center'>
                        {client.review}
                      </p>
                      <div className='flex justify-center mt-8'>
                        <div className='w-[80px] h-[80px] overflow-hidden rounded-full border-2 border-[#27a776]'>
                          <img src={client.profileImg} alt={client.name} width="100%" className='h-full' />
                        </div>
                      </div>
                      <h5 className='text-center text-white capitalize text-xl mt-3'>{client.name}</h5>
                      <p className='capitalize text-center'>{client.designation}</p>
                    </div>
                  </div>
                </SwiperSlide>)}
              </Swiper>
            </div>
            <div className="custom-pagination text-center mt-6"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
