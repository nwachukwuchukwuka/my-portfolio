import { Link } from 'react-router-dom'
import Sign from '../../assets/Sign.png'
import Button from '../Button'
const AboutCard = () => {
    return (
        <Link to='/about'>
            <div className="bg-[#1f1f1f] w-[350px] md:w-[270px] h-[230px] p-[15px] mr-0 md:mr-[20px] rounded-3xl mb-[15px] md:mb-0">
                <div>
                    <img src={Sign} alt="sign" />
                </div>
                <div className='flex justify-between items-end pl-[10px]'>
                    <div>
                        <p className='text-[#7A7A7A] mt-[10px] text-[14px]'>EXPERIENCE & SKILLS</p>
                        <p className='font-semibold text-[23px]'>About Me</p>
                    </div>
                    <Button />
                </div>
            </div>
        </Link>
    )
}

export default AboutCard
