import './about.css' 
import AboutImg from '../../assets/logo2.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import Card from '../../sections/about/Cards'
import data from './data'
const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImg} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
    {
      data.map((item,index)=>{
        return (
          <Card key={item.id} className='about__card'>
            <span className='about__card-icon'>{item.icon}</span>
           <h5>{item.title}</h5>
          <small>{item.desc}</small>
          </Card> 
        )
      })
    }

          </div>
          <p>Building projects to my clients love have always been my passion.
            Being in the web development industry for over 2 years and serving more than 70 happy clients worldwide, I'm always motivated do more!
          </p>

          <p>
            Hi, my name is Muhammad Arfan from Lahore, Pakistan. I am a full-stack web developer with Bachelors degree in Computer science. My top 
            priority is to get your business online on right way, giving you industrial-standard and all functionality you need to operate smoothly.
          </p>
          <a href={CV} download className='btn primary'>Download CV 
          <HiDownload/>
          </a>
        </div>
      </div>
    </section> 

  )
}

export default About 