import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Title = ({ title }) => {
  return <h2 className='text-4xl capitalize font-bold text-center flex items-center justify-center'>
    <span className="text-[#27a776]"><IoIosArrowBack /></span>
    {title}
    <span className="flex items-center text-[#27a776]">/
      <IoIosArrowForward />
    </span>
  </h2>
}

export default Title
