import React from 'react'
import '../styles/footer.css';

const quickLinks01=[
    {
        path: '#',
        display: 'Contact Us'
    },
    {
        path:'#about',
        display: 'About Us'
    },
    {
        path:'#',
        display: 'Privacy Policy'
    },
    {
        path:'#',
        display: 'Copyright Information'
    },
  

];

const quickLinks02=[
    {
        path: '#',
        display: 'Social Media Links'
    },
    {
        path:'#',
        display: 'Feedback'
    },
    {
        path:'#',
        display: 'Report Issues'
    },

];

const quickLinks03=[
    {
        path: '#',
        display: 'FAQs'
    },
    {
        path:'#',
        display: 'Careers'
    },

];

const Footer = () => {

    const year=new Date().getFullYear();
  return <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <div className="footer__logo">
                <h2>Ace Learntech</h2>
                <p className="description">Grow with us</p>
         <p className="small__text description"> Our mission is to empower individuals to learn and grow by offering a diverse range of high-quality educational content.</p>

            </div>
            <div className="footer__quick-links">
                <h3 className="quick__links-title">
                 General Information
                </h3>
                <ul className="quick__links">
{
    quickLinks01.map((item,index)=>(
        <li className="quick__link-item" key={index}>
            <a href={item.path}>{item.display}</a>

        </li>
    ))
}
                </ul>
            </div>

            <div className="footer__quick-links">
                <h3 className="quick__links-title">
                 Interaction
                </h3>
                <ul className="quick__links">
{
    quickLinks02.map((item,index)=>(
        <li className="quick__link-item" key={index}>
            <a href={item.path}>{item.display}</a>

        </li>
    ))
}
                </ul>
            </div>
            

            <div className="footer__quick-links">
                <h3 className="quick__links-title">
                Additional
                </h3>
                <ul className="quick__links">
{
    quickLinks03.map((item,index)=>(
        <li className="quick__link-item" key={index}>
            <a href={item.path}>{item.display}</a>

        </li>
    ))
}
                </ul>
            </div>
            


        </div>
        <p className="copyright">Copyright  {year}, developed by Purnima Katiyar. All rights reserved.</p>
    </div>
  </footer>
}

export default Footer