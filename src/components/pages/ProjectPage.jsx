import React from 'react'
import ProjectCard from '../ProjectCard'
import learnHub from '../../assets/learnhub-img.jpg'
import cresponent from '../../assets/cresponent.png'
import Bookmark from '../../assets/bookmark.png'
import youtube from '../../assets/youtube.png'
import worldmap from '../../assets/worldmap.png'
import noteapp from '../../assets/noteapp.png'
import gymapp from '../../assets/gymapp.png'
import Star from '../../assets/star-2.png'


const Projects = [
    {
        image: cresponent,
        text1: 'CRESPONET TECHNOLOGY',
        text2: 'hi',
        live: 'https://cresponet-technolgy-64735.netlify.app/',
        github: 'https://github.com/nwachukwuchukwuka/IT-company-project'
    },
    {
        image: learnHub,
        text1: 'LEARHUB',
        live: 'https://learn-hub-fa026b.netlify.app/',
        github: 'https://github.com/nwachukwuchukwuka/Learnhub'
    },
    {
        image: gymapp,
        text1: 'FITNESS CLUB',
        text2: 'hi',
        live: 'https://chuks-gym.netlify.app/',
        github: ''
    },
    {
        image: Bookmark,
        text1: 'BOOKMARK SITE',
        text2: 'hi',
        live: 'https://bookmark-app-abecvc.netlify.app/',
        github: 'https://github.com/nwachukwuchukwuka/bookmark-app'
    },
    {
        image: youtube,
        text1: 'MY YOUTUBE',
        text2: 'hi',
        live: 'https://chuks-youtube-9a48a8.netlify.app/',
        github: ''
    },
    {
        image: worldmap,
        text1: 'WORLD INFOGRAPHIC MAP',
        text2: 'hi',
        live: 'https://world-infographic-map.netlify.app/',
        github: 'https://github.com/nwachukwuchukwuka/world-infographic-map'
    },
    {
        image: noteapp,
        text1: 'NOTE APP',
        text2: 'hi',
        live: 'https://note-app-947adecc.netlify.app/',
        github: 'https://github.com/nwachukwuchukwuka/note-app'
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
            <div className='flex justify-center mb-[70px] flex-wrap'>

                {Projects.map((project) => (
                    <ProjectCard project={project} />
                ))}

            </div>
        </div>

    )
}

export default ProjectPage
