import React from 'react';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import heroImg from '../assets/deep11.png';
import deepaBG from '../assets/deepaBG.png';
import heroNm from '../assets/namebg1.png';
import SocialMediaIcons from '../cmp/SocialMediaIcons';

const Landing = ({ setSelectedPage }) => {
  return (
    <section id="home" className="flex items-center justify-center">
      <div className="md:flex  md:justify-between md:gap-16">
        <div className="flex-1 order mb-8 sm:mb-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <div className="font-playfair flex gap-4 justify-center md:justify-start relative">
              <p className="text-4xl md:text-6xl font-playfair text-center font-semibold md:font-normal md:text-start">
                Deepa
              </p>{" "}
              <div className="">
                <h1 className="absolute font-playfair font-semibold md:font-normal z-30 text-4xl md:text-6xl text-center md:text-start">
                  Baral
                </h1>
                <div className=' w-24 md:w-40'>
                <img
                  src={heroNm}
                  alt=""
                  className=""
                />
                </div>
                
              </div>
            </div>
            <p className="mt-2 text-base text-center sm:text-xl md:text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              officiis nihil adipisci veritatis voluptates sit non, ipsum
              doloribus omnis debitis at nulla molestiae explicabo vitae. Optio
              libero cum aspernatur autem?
            </p>
          </motion.div>
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <AnchorLink
              className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-4 xs:px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Contact Me
            </AnchorLink>
            <AnchorLink
              className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-4 xs:px-10">
                Let's talk
              </div>
            </AnchorLink>
          </motion.div>
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      
        <div className="w-11/12 m-auto flex-1 flex justify-center items-center py-8">
           <div className="relative left-4 md:left-0 max-w-[400px] grid grid-cols-1 justify-items-center items-center">
              <img
                className="absolute"
                src={heroImg}
                alt=""
              />
              <img
                className=""
                src={deepaBG}
                alt=""
              />
  </div>
</div>



      </div>
    </section>
  );
};

export default Landing;
