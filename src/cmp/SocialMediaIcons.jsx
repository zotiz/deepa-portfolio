import React from 'react'
import { FaFacebookSquare, FaLinkedin,FaTwitterSquare,FaInstagramSquare, FaTiktok} from "react-icons/fa";
const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center my-4 gap-6'>
       <a href="#" className='hover:bg-red hover:rounded-sm  transition duration-400' alt='facebook-link'>
         <FaFacebookSquare size={24}/>
       </a>
       <a href="#" className='hover:bg-red hover:rounded-sm transition duration-400 ' alt="linkedin-link">
         <FaLinkedin size={24}/>
       </a>
       <a href="#" className='hover:bg-red hover:rounded-sm  transition duration-400' alt='twitter-link'>
         <FaTwitterSquare size={24}/>
       </a>
       <a href="#" className='hover:bg-red hover:rounded-sm  transition duration-400' alt='instagram-link'>
         <FaInstagramSquare size={24}/>
       </a>
       
      
    </div>
  )
}

export default SocialMediaIcons