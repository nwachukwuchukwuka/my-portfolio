import Blog from '../../assets/blog.png'
import Button from '../Button'
const Blogs = () => {
    return (

        <div className="bg-[#1f1f1f] w-[350px] md:w-[270px] h-[230px] p-[15px] md:mr-[20px] rounded-3xl  mb-[15px] md:mb-0">
            <div className='flex  justify-center'>
                <img src={Blog} alt="Blog" />
            </div>
            <div className='flex justify-between items-end pl-[10px]'>
                <div>
                    <p className='text-[#7A7A7A] mt-[10px] text-[14px]'>BLOG</p>
                    <p className='font-semibold text-[23px]'>Coming soon</p>
                </div>
               <Button />
            </div>
        </div>

    )
}

export default Blogs
