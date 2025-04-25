import React from 'react'
import Layout from '../Layout/Layout';
import './BlogStyle.css';
import post1 from "../../src/Blog/post-img1.jpg"
import post2 from "../../src/Blog/post-img2.jpg"
import post3 from "../../src/Blog/post-img3.jpg"
import insta1 from "../../src/Blog/insta-image1.jpg"
import insta2 from "../../src/Blog/insta-image2.jpg"
import insta3 from "../../src/Blog/insta-image3.jpg"
import insta4 from "../../src/Blog/insta-image4.jpg"
import insta5 from "../../src/Blog/insta-image5.jpg"
import insta6 from "../../src/Blog/insta-image6.jpg"






const Blog = () => {
  return (
    <div>
      <Layout>
        <div className='blog'>
          <div className='blog-img'>
            <div class="position-absolute top-50 start-50 translate-middle">
              <h1 className='blog-heading'>Our Blog</h1>
            </div>
          </div>
          <div className='container-fluid row post'>
            <div className='col-4'>
              <div className='hover-zoom'>
                <img src={post1} alt='Post' className='img-fluid' />
              </div>
              <div className='row'>
                <div className='col-2'>
                  <p><span className='date'>22</span></p>
                  <p className='post-month'>Aug-2024</p>
                </div>
                <div className='col-10'>
                  <p className='post-description'>Top 10 casual look ideas to dress up your kids</p>
                  <span className='post-type'>FASHION</span>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='hover-zoom hover-zoom--basic'>
                <img src={post2} alt='Post' className='img-fluid' />
              </div>                  <div className='row'>
                <div className='col-2'>
                  <p><span className='date'>25</span></p>
                  <p className='post-month'>Sep-2024</p>
                </div>
                <div className='col-10'>
                  <p className='post-description'>Latest trends of wearing street wears supremely</p>
                  <span className='post-type'>Trending</span>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='hover-zoom hover-zoom--basic'>
                <img src={post3} alt='Post' className='img-fluid' />
              </div>
              <div className='row'>
                <div className='col-2'>
                  <p><span className='date'>10</span></p>
                  <p className='post-month'>Dec-2024</p>
                </div>
                <div className='col-10'>
                  <p className='post-description'>types of comfortable clothes ideas for women</p>
                  <span className='post-type'>Inspiration</span>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='hover-zoom hover-zoom--basic'>
                <img src={post2} alt='Post' className='img-fluid' />
              </div>                  <div className='row'>
                <div className='col-2'>
                  <p><span className='date'>25</span></p>
                  <p className='post-month'>Sep-2024</p>
                </div>
                <div className='col-10'>
                  <p className='post-description'>Latest trends of wearing street wears supremely</p>
                  <span className='post-type'>Trending</span>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='hover-zoom hover-zoom--basic'>
                <img src={post3} alt='Post' className='img-fluid' />
              </div>
              <div className='row'>
                <div className='col-2'>
                  <p><span className='date'>10</span></p>
                  <p className='post-month'>Dec-2024</p>
                </div>
                <div className='col-10'>
                  <p className='post-description'>types of comfortable clothes ideas for women</p>
                  <span className='post-type'>Inspiration</span>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='hover-zoom hover-zoom--basic'>
                <img src={post2} alt='Post' className='img-fluid' />
              </div>                  <div className='row'>
                <div className='col-2'>
                  <p><span className='date'>25</span></p>
                  <p className='post-month'>Sep-2024</p>
                </div>
                <div className='col-10'>
                  <p className='post-description'>Latest trends of wearing street wears supremely</p>
                  <span className='post-type'>Trending</span>
                </div>
              </div>
            </div>
          </div>
          <div className='insta container-fluid'>
            <h2 className='follow-insta'>
              Follow our instagram
            </h2>
            <p>Our official Instagram account <span>@ultras</span>or <span>#ultras_clothing</span></p>
            <div className='row'>
              <div className='col-2 position-relative text-center insta-post-main-container'>
                <div className='insta-post-container '>
                  <img src={insta1} alt='' className='img-fluid' />
                </div>
                <div class="position-absolute top-50 start-50 translate-middle text-white insta-logo">
                  <h1><i class="bi bi-instagram"></i></h1>
                </div>
              </div>
              <div className='col-2 position-relative text-center insta-post-main-container'>
                <div className='insta-post-container '>
                  <img src={insta2} alt='' className='img-fluid' />
                </div>                
                <div class="position-absolute top-50 start-50 translate-middle text-white insta-logo">
                  <h1><i class="bi bi-instagram"></i></h1>
                </div>
              </div>
              <div className='col-2 position-relative text-center insta-post-main-container'>
                <div className='insta-post-container '>
                  <img src={insta3} alt='' className='img-fluid' />

                </div>                
                <div class="position-absolute top-50 start-50 translate-middle text-white insta-logo">
                  <h1><i class="bi bi-instagram"></i></h1>
                </div>
              </div>
              <div className='col-2 position-relative text-center insta-post-main-container'>
                <div className='insta-post-container '>
                  <img src={insta4} alt='' className='img-fluid' />

                </div>                
                <div class="position-absolute top-50 start-50 translate-middle text-white insta-logo ">
                  <h1><i class="bi bi-instagram"></i></h1>
                </div>
              </div>
              <div className='col-2 position-relative text-center insta-post-main-container'>
                <div className='insta-post-container '>
                  <img src={insta5} alt='' className='img-fluid' />

                </div>                
                <div class="position-absolute top-50 start-50 translate-middle text-white insta-logo ">
                  <h1><i class="bi bi-instagram"></i></h1>
                </div>
              </div>
              <div className='col-2 position-relative text-center insta-post-main-container'>
                <div className='insta-post-container '>
                  <img src={insta6} alt='' className='img-fluid' />

                </div>                
                <div class="position-absolute top-50 start-50 translate-middle text-white insta-logo">
                  <h1><i class="bi bi-instagram"></i></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Blog
