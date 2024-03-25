import { Link } from 'react-router-dom'
import projectImg from '../../assets/portfolio-project.jpg'
import Button from '../Button'
const Projects = () => {
    return (
        <Link to='/project-page'>
            <div className="bg-[#1f1f1f] w-[350px] md:w-[270px] md:h-[230px] p-[15px] mr-0 md:mr-[20px] rounded-3xl ">
                <div>
                    <img className="rounded-2xl h-[120px] w-[100%]" src={projectImg} alt="projectImg" />
                </div>
                <div className='flex justify-between items-end pl-[10px]'>
                    <div>
                        <p className='text-[#7A7A7A] mt-[20px] text-[14px]'>SHOWCASE</p>
                        <p className='font-semibold text-[23px]'>Projects</p>
                    </div>
                    <Button />
                </div>
            </div>
        </Link>
    )
}

export default Projects
