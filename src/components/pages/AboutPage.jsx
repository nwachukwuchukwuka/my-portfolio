import React from 'react'
import myPics from "../../assets/chukwuka.jpg"
import Html from '../../assets/html.png'
import Css from '../../assets/css.png'
import Javascript from '../../assets/javascript.png'
import ReactImg from '../../assets/react.png'
import TypeScript from '../../assets/typescript.png'
import Redux from '../../assets/redux.png'
import Git from '../../assets/git.png'
import Node from '../../assets/node.png'
import Mu5 from '../../assets/mu5.png'
import figma from '../../assets/figma.png'
import python from '../../assets/python.png'


import Star from '../../assets/star-2.png'
import Contact from '../ui-cards/Contact'
import Profiles from '../ui-cards/Profiles'
import SkillCard from '../SkillCard'
import Projects from '../ui-cards/Projects'


const AboutPage = () => {

  const Skils = [
    {
      image: Html,
      text: 'HTML'
    },
    {
      image: Css,
      text: 'CSS'
    },
    {
      image: Javascript,
      text: 'JAVASCRIPT'
    },
    {
      image: ReactImg,
      text: 'REACT'
    },
    {
      image: Redux,
      text: 'REDUX'
    },
    {
      image: Git,
      text: 'GIT'
    },
    {
      image: Node,
      text: 'NODE JS'
    },
    {
      image: Mu5,
      text: 'MU5'
    },
    {
      image: TypeScript,
      text: 'TYPESCRIPT'
    },
    {
      image: Mu5,
      text: 'MU5'
    },
    {
      image: figma,
      text: 'FIGMA'
    },
    {
      image: python,
      text: 'PYTHON'
    },
 


  ]

  return (
    <div>
      <div className='flex items-center flex-col md:flex-row mt-[20px] md:mt-0'>
        <div className='md:mr-[40px]'>
          <img className='w-[350px] md:w-[350px] h-[350px] md:h-[400px] pb-[0]  rounded-[50px]' src={myPics} alt="myPics" />
        </div>

        <div>
          <div className='flex  my-5 md:my-0  items-center justify-center md:justify-start md:ml-2'>
            <img src={Star} alt="star" className='w-[30px] md:w-[50px]' />
            <h1 className=' text-[25px] md:text-[79px] font-semibold px-3 md:px-3'>SELF SUMMARY</h1>
            <img src={Star} alt="star" className='w-[30px] md:w-[50px]' />
          </div>
          <div className="bg-[#1f1f1f] w-[350px] md:w-[750px] h-[400px] md:h-[270px] p-[15px] md:mr-[20px] rounded-3xl">

            <div className=' mt-[40px] md:mt-[80px] pl-[15px]'>
              <div>
                <p className='text-[35px] font-semibold'>Nwachukwu Chukwuka</p>
                <p className='text-[18px] text-gray-300'> I am a web developer who creates websites, including coding the layout,
                  features, and functionality, to ensure an optimal user experience
                  and performance. I work with various programming languages and
                  frameworks to bring a client's vision to life on
                  the web.</p>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* second section */}

      <div className='flex flex-col md:flex-row mt-[20px] md:mt-[30px] justify-between items-center'>
        <div className="bg-[#1f1f1f] w-[350px] md:w-[600px] h-[450px] md:h-[350px] p-[20px] md:mr-[20px] rounded-3xl  ">
          <h1 className='text-[27px] ml-[30px]'> Skills & Technologies</h1>

          <div className='flex flex-wrap justify-evenly md:justify-start'>
            {Skils.map((skill) => (
              <div>
                <SkillCard skill={skill} />
              </div>
            ))}

          </div>


        </div>

        <div className="bg-[#1f1f1f] w-[350px] md:w-[510px] h-[350px] p-[15px] md:mr-[20px] rounded-3xl mt-[20px] md:mt-0">
          <h1 className='text-[27px] ml-[15px]'>Experiences</h1>
        

          <div className='text-[#7A7A7A] ml-[15px] font-semibold text-[17px] mt-[40px]'>
            <h1 className=''>2021 - 2024</h1>
            <p className='text-[white] text-[20px]'>FullStack Developer</p>
            <p>Cresponet Technology Company</p>
          </div>

          <div className='text-[#7A7A7A] ml-[15px] font-semibold text-[17px] mt-[10px]'>
            <h1 className=''>2020 - 2023</h1>
            <p className='text-[white] text-[20px]'>Frontend Developer</p>
            <p>Sumysan real estate company</p>
          </div>


        </div>

      </div>

      {/* third section */}
      <div className='flex flex-col md:flex-row mt-[20px] mb-[70px] items-center md:items-start'>
        <Profiles />
        <Contact />
        <Projects />
      </div>

    </div>
  )
}

export default AboutPage
