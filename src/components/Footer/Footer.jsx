import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>"Explore a diverse range of cuisines and dishes tailored to satisfy every craving, from comfort classics to exotic specialties."</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>01886714715</li>
                <li>furqan-c223160@gmail.com</li>
                <li>01853012223</li>
                <li>furqanuddin235@gmail.com</li>

            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © furqan.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
