import React from 'react';
import '../styles/services.css';

const serviceData=[
  {
    icon: 'ri-book-open-line',
    title:'Study Material',
    desc: 'Our study material provides comprehensive and precise content tailored to technical subjects, ensuring accurate information and resources for effective learning.'

  },
  {
    icon: 'ri-video-line',
    title:'Video Lectures',
    desc: 'Our platform offers a curated collection of the finest and freely accessible video lectures for students. Excel in technical subjects with our top-notch video lectures.'
  },
  {
    icon: 'ri-question-answer-line',
    title:'Quizzes/Tests',
    desc: 'Participate in interactive quizzes and tests designed to gauge your comprehension of technical subjects. It serve as valuable tools for self-evaluation.'
  },
  {
    icon: 'ri-community-line',
    title:'Forum/Community',
    desc: "Engage in discussions, seek help, and share knowledge within our collaborative learning environment, and support for everyone's academic endeavors."
  },
]



const Services = () => {
  return <section id="service">
    <div className="container">
        <div className="services__top-content">
            <h6 className="subtitle">Our Services</h6>
            <h3>Make the most of your time by utilizing <h3 className='inex'>our website</h3></h3>
        </div>

        <div className="service__item-wrapper">
          {
            serviceData.map((item,index)=>(
              <div className="services__item" key={index}>
            <span className="service__icon">
           <i class={item.icon}></i>
            </span>

            <h3 className="service__title">{item.title}</h3>
            <p className="description">{item.desc}</p>
          </div>
            ))
          }
        </div>
    </div>
  </section>
};

export default Services;
