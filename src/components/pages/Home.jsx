import Hero from '../ui-cards/Hero'
import Blogs from '../ui-cards/Blogs'
import Contact from '../ui-cards/Contact'
import Floating from '../ui-cards/Floating'

import Profiles from '../ui-cards/Profiles'
import Projects from '../ui-cards/Projects'
import Ratings from '../ui-cards/Ratings'
import Services from '../ui-cards/Services'
import AboutCard from '../ui-cards/AboutCard'


const Home = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row mb-[15px] mt-[50px] items-center md:items-start'>
                <Hero />
                <div className=' ml-0 md:ml-[20px] '>
                    <Floating />
                    <div className='flex flex-col md:flex-row items-center md:items-start'>
                        <AboutCard />
                        <Projects />
                    </div>
                </div>
            </div>
            <div className='flex mb-[15px] flex flex-col md:flex-row items-center md:items-start'>
                <Blogs />
                <Services />
                <Profiles />
            </div>
            <div className='flex mb-[70px] flex flex-col md:flex-row items-center md:items-start'>
                <Ratings />
                <Contact />
            </div>
        </>
    )
}

export default Home
