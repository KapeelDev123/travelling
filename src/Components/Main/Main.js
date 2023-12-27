import React ,{useEffect}from 'react'
import './main.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import './main.scss'
import img from '../assets/beach.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

//let me paste the array named data

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees: '$700',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activites.',
  },
  {
    id: 2,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees: '$700',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activites.',
  },
  {
    id: 3,
    imgSrc: img2,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees: '$700',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activites.',
  },
  {
    id: 4,
    imgSrc: img3,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees: '$700',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activites.',
  },
  {
    id: 5,
    imgSrc: img4,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees: '$700',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activites.',
  },
  {
    id: 6,
    imgSrc: img5,
    destTitle: 'Bora Bora',
    location: 'Italy',
    grade: 'Cultural Relax',
    fees: '$840',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activites.',
  },
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {/*so guys, here we are going to use high order array method map.
         To do that we shall use a list of object in one array. Iam going to create
         named data from that we shall .map() array to fetch each destination at once.
        I hope this will make sence to you!*/}

        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos='fade-up' className="singleDestination">
                {/*here it will return single id from the map array*/}
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            )
          },
        )}
      </div>
    </section>
  )
}

export default Main
