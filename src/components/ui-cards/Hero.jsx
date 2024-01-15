import myPics from "../../assets/chukwuka.jpg"
import iconButton from "../../assets/iconButton.svg"
import Button from "../Button"


const Hero = () => {
    return (

        <div className=' w-[350px] md:w-[550px] h-[520px] md:h-[310px] flex flex-col md:flex-row items-center text-white bg-[#1f1f1f] rounded-3xl p-[23px]' >
            <img className="w-[230px] h-[230px] rounded-tl-[40px] md:rounded-tl-3xl rounded-br-3xl mr-[20px] ml-[15px] pt-[15px] md:pt-0" src={myPics} alt="my-image" />
            <div className="ml-[10px] mt-[25px]">
                <p className="text-[14px] text-[#7A7A7A;]">A SOFTWARE ENGINEER</p>
                <p>hello</p>
                <h1 className="text-[30px] font-semibold"> Chukwuka  <br /> Nwachukwu </h1>
                <p className="text-[#7A7A7A]">I am a web developer based in san fransisco</p>
                <div className='flex justify-end mt-[10px] md:mt-o'>
                    <div className="flex items-center justify-center border text-white p-4 rounded-md cursor-pointer hover:opacity-50 transition-all duration-300">
                        Download
                        <i className="fas fa-download ml-2"></i>
                    </div>
                </div>
            </div>
        </div>





    )
}

export default Hero
