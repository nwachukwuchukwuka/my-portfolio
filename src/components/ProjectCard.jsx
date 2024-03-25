import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
    return (
        <div>
            <div className="bg-[#1f1f1f] p-4 rounded-[10px] shadow-lg  m-2">
                <img
                    src={project.image}
                    alt="project images"
                    className="rounded-[10px] w-[300px] h-[150px] mx-auto mb-4 object-contain"
                />
                <h2 className="text-xl font-bold mb-4 text-[#7A7A7A]">{project.text1}</h2>
                <div className='mb-4'>
                    <Link to={project.live}>
                        <button className="mr-[10px] border border-white text-white py-1 px-4 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-black">
                            Live
                        </button>
                    </Link>
                    <Link to={project.github}>
                        <button className="border border-white text-white py-1 px-4 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-black">
                            Github
                        </button>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default ProjectCard
