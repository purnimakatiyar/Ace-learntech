import React from 'react';
import '../styles/about.css';
import aboutimg from "../../pic.png"

const chooseData=[
    {
        icon:  'ri-macbook-line',
        title: 'Comprehensive Content',
        desc: 'Our website hosts an extensive collection of articles, tutorials, videos, and interactive resources across a wide array of technical topics which helps students a lot.'
    },
    {
        icon:  'ri-file-copy-2-line',
        title: 'Interactive Learning',
        desc: "We believe that active learning leads to better retention. We incorporate quizzes, exercises, and interactive elements to keep learners engaged and involved."
    },
    {
        icon:  'ri-community-line',
        title: 'Community Engagement',
        desc: "Having connections with others who share similar interests enhance interaction in learning. We encourage users to participate in discussions, ask questions etc."
    },
    {
        icon:  'ri-user-3-line',
        title: 'User-Focused Experience',
        desc: 'Our platform is designed with a user-friendly interface, allowing learners to navigate seamlessly and find the content they need effortlessly whenver they need.'
    },
    {
        icon:  'ri-indent-increase',
        title: 'Constant Growth',
        desc: 'We are committed to keeping our content up-to-date and relevant, ensuring that learners stay informed about the latest advancements in their chosen fields.'
    },
]

const About = () => {
  return <section id="about">
  <div className="container__head"> <h6 className="subtitle_an">What Sets Us Apart!</h6>
            <h3 className="subcontent">Passionate about making education accessible, engaging, and effective <h3 className="innercontent">through technology</h3></h3>
                <p className="about__content-desc">
                <br></br>
                We believe that education is the cornerstone of progress and innovation. Our mission is to empower individuals to learn and grow by offering a diverse range of high-quality educational content. We strive to foster a supportive online community where learners can connect, collaborate, and share knowledge with like-minded individuals.
                </p></div>
    <div className="container">
        <div className="about__wrapper">
            <div className="about__content">
           
              <div className='choose__item-wrapper'>
                {
                   chooseData.map((item,index)=>(
                    <div className="choose__us-item" key={index}>
                    <span className="choose__us-icon">
                    < i class={item.icon}></i>
                    </span>
                    <div><h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p></div>
                 
                </div>
          
                   )) 
                }
              </div>
              </div>
            <div className="about__img">
                <img src={aboutimg} height="200%" width="100%" alt=""/>
            </div>
        </div>
    </div>
  </section>
}

export default About