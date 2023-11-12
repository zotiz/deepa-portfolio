import React from 'react';
import LineGradient from './LineGradient';
import { motion } from 'framer-motion';
import skillImg from '../assets/skill.png';
import skillBG from '../assets/skillBG.png';
import aimage from '../assets/exp.png'
import bimage from '../assets/innov.png'
import cimage from '../assets/imagenative.png'
import Offimage from '../assets/off.png'
const MySkills = () => {
  return (
    <div id="skills" className="">
      <div className="">
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
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-fuchsia-500">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col py-8 md:flex-row gap-12"
        >
          <div className=' flex-1'>
          <p className="">
            {/* Content */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus necessitatibus repudiandae exercitationem, maiores voluptate nisi voluptatum voluptas. Laboriosam eligendi expedita porro molestias nulla minima ipsum iusto. Facere ab saepe nemo.
          </p>
          </div>
          
          <div className="w-full flex-1 relative py-4">
           <div className="relative max-w-[400px] grid grid-cols-1 m-auto">
              <img
                className="w-full left-3 top-3 sm:left-6 sm:top-6 hover:filter hover:saturate-100 absolute transition duration-500"
                src={Offimage}
                alt=""
              />
              <img
                className="w-full hover:filter hover:saturate-100 transition duration-500"
                src={skillBG}
                alt=""
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
        {/* Your skill items */}
        <motion.div
           initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:0.5}} variants={{
            hidden:{opacity:0, y:50},
            visible:{opacity: 1, y: 0},
            }} className='md:1/3 mt-10'>
             <div className='relative'>
                 <div className='z-10 h-30'>
                  <p className='font-playfair font-semibold text-5xl'>01</p>
                  <p className='font-playfair font-semibold text-3xl mt-3'>Experience</p>
                 </div>
                 <div className=' h-32  absolute right-0 top-0 z-[-1]'>
                 <img src={aimage} alt="" className='w-full h-full' />
                 
                 </div>
                 
                <p className='mt-5 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab assumenda fuga unde, sequi suscipit. Laudantium ipsum recusandae rem omnis dolor et. Magnam voluptatem iste accusantium obcaecati deleniti adipisci deserunt?</p>
             </div>
           </motion.div>
           {/* INNOVATIVE */}
           <motion.div
           initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{
            hidden:{opacity:0, y:50},
            visible:{opacity: 1, y: 0},
            }} className='md:1/3 mt-10'>
             <div className='relative '>
                 <div className='z-10 h-30'>
                  <p className='font-playfair font-semibold text-5xl'>02</p>
                  <p className='font-playfair font-semibold text-3xl mt-3'>Innovative</p>
                 </div>
                 <div className=' h-32  absolute right-0 top-0 z-[-1]'>
                  <img src={bimage} alt="" className='w-full h-full object-fill'/>
                 </div>
                 
                <p className='mt-5 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab assumenda fuga unde, sequi suscipit. Laudantium ipsum recusandae rem omnis dolor et. Magnam voluptatem iste accusantium obcaecati deleniti adipisci deserunt?</p>
             </div>
           </motion.div>
           {/* IMAGINATIVE */}
           <motion.div
           initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.4,duration:0.5}} variants={{
            hidden:{opacity:0, y:50},
            visible:{opacity: 1, y: 0},
            }} className='md:1/3 mt-10'>
             <div className='relative '>
                 <div className='z-10 h-30'>
                  <p className='font-playfair font-semibold text-5xl'>03</p>
                  <p className='font-playfair font-semibold text-3xl mt-3'>Imaginative</p>
                 </div>
                 <div className=' h-32 absolute right-0 top-0 z-[-1]'>
                  <img src={cimage} alt="" className='w-full h-full' />
                 </div>
                 
                <p className='mt-5 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab assumenda fuga unde, sequi suscipit. Laudantium ipsum recusandae rem omnis dolor et. Magnam voluptatem iste accusantium obcaecati deleniti adipisci deserunt?</p>
             </div>
           </motion.div>
      </div>
    </div>
  );
};

export default MySkills;
