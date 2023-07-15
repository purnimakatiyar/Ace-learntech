import React from 'react'
// import logo from '../assets/logo.png';
import "./header.css";


const nav__links=[
    {
        path:'#home',
        display:'Home'
    },
    {
        path:'#about',
        display: 'About'
    },
    {
        path: '#services',
        display:'Services'
    },
    {
        path: '#other',
        display: 'Other'
    },
    {
        path: '#updates',
        display: 'Updates'
    },
    {   path: '#faqs',
        display: 'FAQs'
    },
    {   path: '#contact',
        display: 'Contact'
    }



]



const Header = () => {
  return (
   <header className="header">
    <div className="container">
        <div className="nav__wrapper">
            <div className="logo">
            {/* <img src="./logo.png" width={150} height={50} alt="no-img" /> */}
            <img src="./logonew.png" width={150} height={50} alt="no-img" />
              
</div>

                {/* navigation=================== */}
<div className="navigation">
    <ul className="menu">
{nav__links.map((item,index)=>(
    <li className="menu-item"><a href={item.path} className="menu__link">{item.display}</a></li>
))}
    </ul>
</div>

{/* light-mode================== */}
<div className="light__mode">
    <span><i class="ri-sun-line"></i>Light Mode</span>
</div>
            </div>
        </div>
  
   </header>   
  )
}

export default Header