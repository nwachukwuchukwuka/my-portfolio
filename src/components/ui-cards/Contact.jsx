import Icon2 from '../../assets/icon2.png'
import Button from '../Button'

const Contact = () => {
  return (
    <>
      <div className="bg-[#1f1f1f] w-[350px] md:w-[600px] h-[190px] md:h-[230px] p-[30px] pt-0 md:mr-[20px] rounded-3xl mb-[20px] md:mb-0">
        <div>
          <img src={Icon2} alt="icon" />
        </div>

        <div className='flex items-end justify-between'>
          <div className=' text-[30px] md:text-[50px] leading-tight font-semibold'>
            <p className=''>Let's</p>
            <p className='text-[#5b78f6;]'>work together.</p>
          </div>
          <Button />
        </div>

      </div>
    </>
  )
}

export default Contact