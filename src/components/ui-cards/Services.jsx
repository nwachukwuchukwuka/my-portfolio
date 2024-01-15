
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import git from '../../assets/git.png'
import Button from '../Button'
const Services = () => {
    return (

        <div className="bg-[#1f1f1f] w-[350px]  md:w-[550px] h-[190px] md:h-[230px] p-[15px] md:mr-[20px] rounded-3xl mb-[15px] md:mb-0">
            <div className='flex justify-between mt-[50px]'>
                <img className="w-[40px] md:w-[70px]" src={html} alt="html" />
                <img className="w-[40px] md:w-[70px]" src={react} alt="react" />
                <img className="w-[40px] md:w-[70px]" src={node} alt="node" />
                <img className="w-[40px] md:w-[70px]" src={css} alt="css" />
                <img className="w-[40px] md:w-[70px]" src={git} alt="git" />
            </div>
            <div className='flex justify-between items-end pl-[10px]'>
                <div>
                    <p className='text-[#7A7A7A] mt-[20px] text-[14px]'>SPECIALIZATION</p>
                    <p className='font-semibold text-[23px]'>Services</p>
                </div>
                <Button />
            </div>
        </div>

    )
}

export default Services
