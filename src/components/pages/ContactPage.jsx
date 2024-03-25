import React, { useState } from 'react';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <div>
            <div className="flex flex-col md:flex-row mt-[30px] items-center mb-[90px] ">
                <div className=' w-[350px] md:w-[350px] md:mr-[50px] '>
                    <h1 className='font-semibold mb-[20px]'>CONTACT INFO</h1>

                    <div className='flex mb-[70px]'>
                        <div className='p-[20px] bg-[#1f1f1f] rounded-lg mr-[20px]'>
                            <i class="fa-regular fa-envelope fa-2x"></i>
                        </div>
                        <div>
                            <h1 className='text-[#7A7A7A]'>EMAIL </h1>
                            <p className='font-semibold text-[18px] md:text-lg text-gray-300'>nwachukwuadinoyi@gmail.com</p>
                        </div>

                    </div>

                    <div className='flex mb-[70px]'>
                        <div className='p-[20px] bg-[#1f1f1f] rounded-lg mr-[20px]'>
                            <i class="fa-solid fa-phone fa-2x"></i>
                        </div>
                        <div>
                            <h1 className='text-[#7A7A7A]'>CONTACT ME </h1>
                            <p className='font-semibold text-[18px] md:text-lg text-gray-300'>08070623479</p>
                            <p className='font-semibold text-[18px] md:text-lg text-gray-300'>07038936818</p>
                        </div>

                    </div>

                    <div className='flex mb-[70px]'>
                        <div className='p-[24px] bg-[#1f1f1f] rounded-lg mr-[20px]'>
                            <i class="fa-solid fa-location-dot fa-2x"></i>
                        </div>
                        <div>
                            <h1 className='text-[#7A7A7A]'>LOCATION  </h1>
                            <p className='font-semibold text-gray-300 text-[18px] md:text-lg'>Ehime Mbano,
                                Ezeoke Nsu,
                                Imo state</p>
                        </div>

                    </div>

                    <div>
                        <h1 className='font-semibold mb-[20px] text-center md-text-start'>SOCIAL INFO</h1>
                        <div className='flex justify-center md:justify-start'>
                            <div className='p-[25px] bg-[#1f1f1f] rounded-full mr-[20px]'>
                                <i class="fa-brands fa-x-twitter fa-2x"></i>
                            </div>
                            <div className='p-[25px] bg-[#1f1f1f] rounded-full mr-[20px]'>
                                <i class="fa-brands fa-linkedin-in fa-2x"></i>
                            </div>
                        
                        </div>
                    </div>



                </div>


                <form className=" w-[350px] md:w-[730px] mt-8 bg-[#1f1f1f] px-[40px] py-[60px] rounded-[30px]" onSubmit={handleSubmit}>
                    <h1 className='pb-[20px] text-[50px] font-semibold'>Let's work <span className='text-[#5b78f6]'>together.</span></h1>
                    <div className="mb-4">

                        <input
                            className="w-full p-[15px] rounded-[15px]  bg-[#272727]"
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Name*'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                       
                        <input
                            className="w-full p-[15px] rounded-[15px]  bg-[#272727]"
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Email*'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                       
                        <input
                           className="w-full p-[15px] rounded-[15px]  bg-[#272727]"
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder='Subject*'
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                      
                        <textarea
                             className="w-full p-[15px] rounded-[15px]  bg-[#272727]"
                            id="message"
                            name="message"
                            placeholder='Message*'
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                        ></textarea>
                    </div>
                    <button
                        className="w-full bg-[#323232] text-white font-bold py-[15px] px-4 rounded-[15px] hover:bg-blue-700 transition-colors"
                        type="submit"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact

