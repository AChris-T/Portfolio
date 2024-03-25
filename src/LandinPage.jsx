import React from 'react'
import { SiSaltproject } from "react-icons/si";
import project from "./assets/project1.png"
import project1 from "./assets/project.png"
import project2 from "./assets/projec2.png"
import project3 from "./assets/project3.png"
import project4 from "./assets/project4.png"
import project5 from "./assets/project 5.png"
import project6 from "./assets/project7.png"

const LandinPage = () => {
  return (
    <div className=' flex justify-center  flex-col text-center text-[#fff] pb-10'>
    <div className='mt-36'>
      <div className='flex items-center justify-center gap-2 md:gap-4 mb-2'> 
        <SiSaltproject
        style={{
        color: '#ffffff',
        fontSize:"30px",
         }}
      />
        <h3 className='md:text-[35px] text-[30px]'>Portfolio Category</h3>
      </div>
      <div>
        <h2 className='md:px-[350px] px-5 mb-8 mt-4 flex items-center justify-center text-[#ffffffbe] '>Explore the gallery to see how I've tackled complex challenges, implemented innovative solutions, and contributed to meaningful outcomes.</h2>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-6'>
        <div className='w-[300px] flex flex-col justify-start items-start pb-4  rounded-md bg-white border border-sky-950 text-[black]'>
          <img src={project} alt='project' className=' object-contain rounded-md '/>
          <a href='https://metagreeninnovations.com/ ' target='_blank' className='px-4 mt-4 font-semibold'> Metagreen Innvotations </a>
          <a href='https://metagreeninnovations.com/ ' target='_blank' className='px-4 mt-5 text-sm text-[#13bbff]'>https://metagreeninnovations.com/  </a>
        </div>
        <div className='w-[300px] flex flex-col justify-start items-start pb-4  rounded-md bg-white border border-sky-950 text-[black]'>
          <img src={project1} alt='project' className=' object-contain  rounded-md '/>
          <a href='https://superoagrobase.com/' target='_blank' className='px-4 mt-4 font-semibold'> Supero Incorporation Limited </a>
          <a href='https://superoagrobase.com/' target='_blank' className='px-4 mt-5 text-sm text-[#13bbff]'>https://superoagrobase.com/ </a>
        </div>
        <div className='w-[300px] flex flex-col justify-start items-start pb-4  rounded-md bg-white border border-sky-950 text-[black]'>
          <img src={project2} alt='project' className=' object-contain rounded-md '/>
          <a href='https://www.ayodejianifowose.com/' target='_blank' className='px-4 mt-4 font-semibold'>Pastor Ayodeji Anifowose</a>
          <a href='https://www.ayodejianifowose.com/' target='_blank' className='px-4 mt-5 text-sm text-[#13bbff]'>https://www.ayodejianifowose.com/   </a>
        </div>
        <div className='w-[300px] flex flex-col justify-start items-start pb-4  rounded-md bg-white border border-sky-950 text-[black]'>
          <img src={project3} alt='project' className=' object-contain rounded-md '/>
          <a href='https://samuelayinde.com/' target='_blank' className='px-4 mt-4 font-semibold'>Pastor Samuel Ayinde </a>
          <a href='https://samuelayinde.com/' target='_blank' className='px-4 mt-5 text-sm text-[#13bbff]'>https://samuelayinde.com/ </a>
        </div>
        <div className='w-[300px] flex flex-col justify-start items-start pb-4  rounded-md bg-white border border-sky-950 text-[black]'>
          <img src={project4} alt='project' className=' object-contain rounded-md '/>
          <a href='https://www.omojolagbegeriaticcare.org/' target='_blank' className='px-4 mt-4 font-bold text-[14px] '> Omojolagbe Geriatric Care Foundation </a>
          <a href='https://www.omojolagbegeriaticcare.org/' target='_blank' className='px-4 mt-5 text-sm text-[#13bbff]'>https://www.omojolagbegeriaticcare.org/  </a>
        </div>
        <div className='w-[300px] flex flex-col justify-start items-start pb-4  rounded-md bg-white border border-sky-950 text-[black]'>
          <img src={project5} alt='project' className=' object-contain rounded-md '/>
          <a href='https://petigrity.com/' target='_blank' className='px-4 mt-4 font-semibold'>Petigrity Konsult </a>
          <a href='https://petigrity.com/' target='_blank' className='px-4 mt-5 text-sm text-[#13bbff]'>https://petigrity.com/ </a>
        </div>       
        <div className='w-[300px] flex flex-col justify-start items-start pb-4  rounded-md bg-white border border-sky-950 text-[black]'>
          <img src={project6} alt='project' className=' object-contain rounded-md '/>
          <a href='https://shopoakstore.com/ ' target='_blank' className='px-4 mt-4 font-semibold'> The Shop Oak Store   </a>
          <a href='https://shopoakstore.com/ ' target='_blank' className='px-4 mt-5 text-sm text-[#13bbff]'>https://shopoakstore.com/   </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LandinPage
