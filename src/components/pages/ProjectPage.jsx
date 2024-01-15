import React from 'react'
import ProjectCard from '../ProjectCard'
import learnHub from '../../assets/learnhub-img.jpg'
import Star from '../../assets/star-2.png'


const Projects = [
    {
        image: learnHub,
        text1: 'hi',
        text2: 'hi'
    },

    {
        image: 'hello',
        text1: 'hi',
        text2: 'hi'
    },

    {
        image: 'hello',
        text1: 'hi',
        text2: 'hi'
    },
]

const ProjectPage = () => {
    return (
        <div> 
            <div className='flex justify-center items-center mb-[15px]'>
                <img src={Star} alt="star" />
                <p className='text-[70px] font-semibold'>ALL PROJECTS</p>
                <img src={Star} alt="star" />
            </div>
            <div className='flex justify-center mb-[70px]'>

                {Projects.map((project) => (
                    <ProjectCard project={project} />
                ))}

            </div>
        </div>

    )
}

export default ProjectPage
