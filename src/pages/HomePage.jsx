import React
from 'react'
import { NavBar, Hero, Courses, Categories, Comments, Footer } from '../components'
import { coprateImage, ladySpecs } from '../assets';
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <div>
        <NavBar isLoggedIn={false} />
        <Hero />
        <Courses />
        <Categories />

        <div className='flex gap-[1.5vw]'>
          <div className='w-[40.5vw] h-[30vw] ml-[8vw] mt-[10vw] bg-opacity-20 bg-strathmore-grey pl-[5vw] pr-[3vw] pt-[4.5vw] rounded-[0.3vw] drop-shadow'>
            <p className='text-strathmore-red text-[2.3vw] mb-[2.2vw]'>
              Drive business impact <br /> Get access to courses for your business, higher education, or government team
            </p>

            {/* <div className='w-[11vw] h-[2.8vw] bg-nav-blue text-center rounded-[0.6vw] leading-[2.6vw] cursor-pointer font-semibold text-white border-[0.15vw] border-white text-[1vw] drop-shadow'>
              <p>
                Get DL for Business
              </p>
            </div> */}

            <Link to='/dl-lms/SignUpBusiness'>
              <div className='w-[11vw] h-[2.8vw] bg-nav-blue text-center rounded-[0.6vw] leading-[2.6vw] cursor-pointer font-semibold text-white border-[0.15vw] border-white text-[1vw] drop-shadow hover:scale-105 transition-transform'>
                <p>
                  Get DL for Business
                </p>
              </div>
            </Link>
          </div>

          <img src={coprateImage} className='h-[44.5vw] mt-[4vw] pb-[3vw] rounded-[50vw]' />
        </div>

        <Comments />

        <div>
          <div className='mb-[7vw] flex justify-center gap-[5vw]'>
            <div className='w-[29vw]'>
              <p className='text-strathmore-red text-[2.3vw] mb-[0.7vw] mt-[5vw] font-bold'>
                Become an instructor
              </p>

              <p className='font-semibold text-strathmore-grey text-[1.4vw] mb-[3vw]'>
                Instructors from around the world teach millions of learners on Digital Learning. We provide the tools and skills to teach what you love.
              </p>

              {/* <div className='w-[12vw] h-[2.8vw] bg-nav-blue text-center rounded-[0.6vw] leading-[2.6vw] cursor-pointer font-semibold text-white border-[0.15vw] border-white drop-shadow text-[1vw]'>
              <p>
                Start Teaching Today
              </p>
              </div> */}

              <Link to='/dl-lms/SignUpTutor'>
                <div className='w-[12vw] h-[2.8vw] bg-nav-blue text-center rounded-[0.6vw] leading-[2.6vw] cursor-pointer font-semibold text-white border-[0.15vw] border-white drop-shadow text-[1vw] hover:scale-105 transition-transform'>
                  <p>
                    Start Teaching Today
                  </p>
                </div>
              </Link>
            </div>

            <img src={ladySpecs} className='h-[28vw] rounded-[1vw]' />
          </div>
        </div>
    </div>
  )
}

export default HomePage