import React from 'react'

const ProjectCard = ({ project }) => {
    return (
        <div>
            <div className="bg-[#1f1f1f] p-4 rounded-[40px] shadow-lg  m-2">
                <img
                    src={project.image}
                    alt="project images"
                    className="rounded-[40px] w-[300px] h-[300px] mx-auto mb-4 object-cover"
                />
                <h2 className="text-xl font-bold text-center mb-2 text-[#7A7A7A]">Title</h2>
                <p className="text-center text-gray-700">Some description here...</p>
            </div>
        </div>
    )
}

export default ProjectCard
