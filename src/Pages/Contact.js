import React from 'react'
import Layout from '../Layout/Layout'
import "./ContactStyle.css";

const Contact = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5427501173112!2d72.54009267509234!3d23.040555279161175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ead1103329%3A0x1a907f7fee8b2b7f!2sGujarat%20University!5e0!3m2!1sen!2sin!4v1742707326711!5m2!1sen!2sin" width={"100%"} height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='container'>
            <div className='row contact'>
              <div className='col-6 desc'>
                <p className='information'>INFORMATION</p>
                <h1>Contact us</h1>
                <p>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
                <h3>America</h3>
                <p>195 E Parker Square Dr, Parker, CO 801+43 982-314-0958</p>
                <h3>France</h3>
                <p>109 Avenue Léon, 63 Clermont-Ferrand +12 345-423-9893</p>
              </div>
              <div className='col-6'>
                <input className='input' type='text' placeholder='Name' />
                <input className='input' type='text' placeholder='Email' />
                <textarea className='input-address' type='text-area' placeholder='Message' />
                <button type="button" class="btn-send-message px-5">SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
