import React from 'react'
import LineGradient from './LineGradient'
import {motion, stagger} from 'framer-motion'
import ProjectImg from '../assets/project-1.png'
const container = {
  hidden: {},
  visible:{
    transition:{staggerChildren: 0.2}
  }
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

const Project = ({title})=>{
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const aim = `../assets/${projectTitle}.png`
        
  return(
    <motion.div variants={projectVariant} className='relative'>
        <div className={overlayStyles}>
           <p className='text-2xl font-playfair'>{title}</p>
           <p className='mt-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, iste.</p>
        </div>
       
        <img src={aim} alt="" />
    </motion.div>
  )
}
const Projects = () => {
  return (
    <section id="projects" className="">
       <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-1/3"
        >
          <div className='w-full flex flex-col justify-center items-center pb-8'>
          <p className="font-playfair font-semibold text-4xl mb-5">
          <span className="text-fuchsia-500">PRO</span>JECTS
          </p>
          <div className='border w-full'>
          <LineGradient width="w-1/3" />
          </div>
          
          </div>
          </motion.div>
          {/* PROJECTS */}
          <div>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
          className="grid grid-col-3 "
        >
          <div className='flex justify-center text-center items-center p-10 bg-red max-w-[400px] text-2xl font-playfair font-semibold'>
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1"/>
          <Project title="Project 2"/>
          {/* ROW 2 */}
          <Project title="Project 3"/>
          <Project title="Project 4"/>
          <Project title="Project 5"/>
          {/* ROW 3 */}
          <Project title="Project 1"/>
          <Project title="Project 2"/>
         </motion.div>
          </div>
    </section>
  )
}

export default Projects