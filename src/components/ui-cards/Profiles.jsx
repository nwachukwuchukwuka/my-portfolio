

import { Link } from 'react-router-dom'
import twitter from '../../assets/twitter.png'
import Button from '../Button'
const Profiles = () => {
  return (

    <div className="bg-[#1f1f1f] w-[350px] md:w-[270px] h-[230px] p-[15px] md:mr-[20px] rounded-3xl mb-[20px] md:mb-0">
      <div className="flex bg-[#1f1f1f] h-[120px] justify-center items-center rounded-3xl border border-1 border-[#2e2e2e]">

        <Link to='https://twitter.com/Adino1Nwachukwu'>

          <div className='p-[20px] bg-[#212221] rounded-[100%]  border border-1 border-[#2e2e2e] mr-[15px] opacity-80 hover:opacity-40  transition-all duration-300 cursor-pointer'>
            <i class="fa-brands fa-x-twitter fa-2x"></i>

          </div>
        </Link>

        <Link to='https://www.linkedin.com/in/chukwuka-nwachukwu-156a65239/'>

          <div className='p-[20px] bg-[#212221] rounded-[100%]  border border-1 border-[#2e2e2e] opacity-80 hover:opacity-40 transition-all duration-300 cursor-pointer'>
          <i class="fa-brands fa-linkedin-in fa-2x"></i>
          </div>
        </Link>

      </div>
      <div className='flex justify-between items-end pl-[10px]'>
        <div>
          <p className='text-[#7A7A7A] mt-[10px] text-[14px]'>Check my profiles</p>
          <p className='font-semibold text-[23px]'> Profiles</p>
        </div>
        <Button />
      </div>
    </div>

  )
}

export default Profiles
