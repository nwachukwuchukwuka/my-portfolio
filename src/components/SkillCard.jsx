
const SkillCard = ({skill}) => {
  return (
    <div>
      <div className=' w-[90px] h-[90px] rounded-[15px] text-center mr-4'>
            <div className='flex justify-center pt-[15px]'>
              <img className='w-[50px]' src={skill.image} alt="skills" />
            </div>
            <p className="text-[15px]">{skill.text}</p>
          </div>
    </div>
  )
}

export default SkillCard
