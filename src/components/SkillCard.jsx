
const SkillCard = ({skill}) => {
  return (
    <div>
      <div className=' w-[80px] h-[70px] md:w-[90px] md:h-[90px] rounded-[15px] text-center md:mr-4 mb-[20px] md:mb-0'>
            <div className='flex justify-center pt-[15px]'>
              <img className='w-[50px]' src={skill.image} alt="skills" />
            </div>
            <p className="text-[15px]">{skill.text}</p>
          </div>
    </div>
  )
}

export default SkillCard
