import React, {useEffect} from 'react'
import './footer.css'
import './footer.scss'
import video0 from '../assets/video(0).mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  // lets create a react hook to add a scrool animation


useEffect(()=>{
  Aos.init({duration:2000})
},[])


  return (
   <section className='footer'>
    <div className='videoDiv'>
    <video src={video0} muted autoPlay loop type="video/mp4"></video> 
  
    </div>
    <div className='secContent container'>
      <div className='contactDiv flex'>
        <div data-aos='fade-up' className='text'>
          <small>KEEP IN TOUCH</small>
          <h2>Travel with us</h2>
        </div>
        <div className='inputDiv flex'>
          <input data-aos='fade-up' type='text' placeholder='Enter Email Address'/>
          <button data-aos='fade-up' className='btn flex' type='submit' > SEND <FiSend  className='icon'/></button>
        </div>
      </div>

      <div className='footerCard flex'>
        <div className='footerIntro flex'>
          <div className='logoDiv'>
            <a href='/' className='logo flex'>Travel. <MdTravelExplore className='icon'/></a>
          </div>
          <div data-aos='fade-up' className='footerParagraph'>Topic sentences are similar to mini thesis statements. Like a thesis 
          statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay,
          the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a 
          unifying function. But a thesis statement or topic sentence alone doesn’t guarantee unity. An essay is 
          unified if all the paragraphs relate to the thesis.
          </div>
          <div data-aos='fade-up' className='footerSocials flex'>
          <AiOutlineTwitter className='icon'/> 
          <AiFillYoutube className='icon'/> 
          <AiFillInstagram className='icon' /> 
          <FaTripadvisor className='icon'/>
          </div>
        </div>
        <div className='footerLinks grid'>

  
                {/*Group one */} 

          <div data-aos='fade-up' 
          data-aos-duration='3000'
          className='linkGroup'>
            <span className='groupTitle'>
            OUR AGENCY
            </span>


            <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Services
            </li>


            <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Insurance
            </li>


            <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Agency
            </li>


            <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Tourism
            </li>


            <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Payment
            </li>


          </div>
           {/*Group two */} 

           <div data-aos='fade-up' 
           data-aos-duration='4000' 
           className='linkGroup'>
            <span className='groupTitle'>
            PARTNERS
            </span>


            <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Bookings
            </li>


            <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            RentCars
            </li>


            <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            HostelWorld
            </li>


            <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Trivago
            </li>


            <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            TripAdvisor
            </li>


          </div>
           {/*Group three */} 

           <div data-aos='fade-up' 
           data-aos-duration='5000'
           className='linkGroup'>
            <span className='groupTitle'>
            LAST MINUTE
            </span>


            <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            London
            </li>


            <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            California
            </li>


            <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Indonesia
            </li>


            <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Europe
            </li>


            <li className='footerList flex'>
            <FiChevronRight className='icon'/>
            Oceania
            </li>


          </div>
        </div>

        <div className='footerDiv flex'>
          <small>BEST TRAVEL WEBSITE THEME</small>
          <small>COPYRIGHTS RESERVED - ISRATECH 2023</small>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Footer
