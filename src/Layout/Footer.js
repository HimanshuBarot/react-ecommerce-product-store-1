import React from 'react'
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div>
      <hr className='footer-hr'/>
        <div className='row pt-5 footer'>
          <div className='col-3'>
            <ul>
              <li className='list-heading'>Ultras</li>
              <li>About us</li>
              <li>Condtions</li>
              <li>Our Journals</li>
              <li>Careers</li>
              <li>Affiliate Programmes</li>
              <li>Ultras Press</li>
            </ul>
          </div>
          <div className='col-3'>
            <ul>
              <li className='list-heading'>Customer Service</li>
              <li>FAQ</li>
              <li>COntact</li>
              <li>Privacy Policy</li>
              <li>Returns & Refunds</li>
              <li>Cookie Guidelines</li>
              <li>Delivery Information</li>
            </ul>
          </div>
          <div className='col-3'>
            <ul>
              <li className='list-heading'>Contact Us</li>
              <li>Do you have any questions or suggestions?</li>
              <li>ourservices@ultras.com</li>
              <li>Do you need assistance? Give us a call.</li>
              <li style={{fontWeight:'bolder'}}>+57 444 11 00 35</li>
            </ul>
          </div>
          <div className='col-3'>
            <ul>
              <li className='list-heading'>Forever 2018</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Nulla placerat maximus neque suscipit dignissim. Morbi id rutrum ligula. Fusce consequat.</li>
              <li><i class="bi bi-facebook"></i><i class="bi bi-twitter-x"></i><i class="bi bi-instagram"></i><i class="bi bi-youtube"></i></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer
