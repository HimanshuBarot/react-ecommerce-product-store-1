import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import "./ProductDetailStyle.css";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';


  


const ProductDetail = () => {
  const [num,setnum] = useState(1);
  const [data, setData] = useState(null);
    const { id } = useParams();

    const alertPlaceholder = useRef(null);

    const appendAlert = (message, type) => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('alert', `alert-${type}`, 'alert-dismissible', 'fade', 'show');
      wrapper.innerHTML = `
        <div>${message}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
      alertPlaceholder.current.append(wrapper);
  
      // Auto-dismiss after 5 seconds
      setTimeout(() => {
        const alertElement = wrapper.querySelector('.alert');
        if (alertElement) {
          alertElement.classList.remove('show');
          alertElement.classList.add('fade');
          alertElement.addEventListener('transitionend', () => {
            alertElement.remove();
          });
        }
      }, 5000); // 5 seconds
    };
    

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error('Error fetching data:', error));
    }, [id]);

  
  
  return (
    <div>
      <Layout>
        <div>
          <div className='container-fluid product-detail-container'>
          <div className='added-to-cart' id="liveAlertPlaceholder"></div>

          {data ? (
            <div className='row p-5'>
              <div className='product-detail-img col-6 '>
              <img className='img-fluid' src={data.images[0]} alt={data.title}/>
              </div>
              <div className='col-6 product-details'>
                <h1>{data.title}</h1>
                <p className='ratings'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i> - {data.rating} reviews</p>
                <h2>${data.price}</h2>
                <p className='description'>{data.description}</p>
                <p className='wishlist'><i class="bi bi-heart-fill"></i> ADD TO WISHLIST</p>

                <div className='cart-counter row'>
                  <p style={{ textAlign: 'center' }} className='col-6 d-flex align-items-center justify-content-center'>{num}</p>
                  <div className='col-6'>
                    <button className='btn-incr' onClick={()=>setnum(num+1)}><i class="bi bi-caret-up-fill"></i></button>
                    <button className='btn-decr'  onClick={()=>num>1 && setnum(num-1)}><i class="bi bi-caret-down-fill"></i></button>
                  </div>
                </div>
                <button className='btn-add-to-cart' onClick={() => appendAlert('Product added to cart successfully!', 'success')} id="liveAlertBtn">ADD TO CART</button>
              </div>
            </div>
            ) : (
              <p>Loading...</p>
          )}
          </div>
          <h2 className='text-center description-title'>Description</h2>
          <div class="text-success d-flex justify-content-center">
            <hr className="w-75" />
          </div>
          <div className='container product-description'>
          <h2>Products Infomation</h2>
          <p>A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad.
            As is the case with any new technology product, the cost of a Pocket PC was substantial during it’s early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased.</p>
          <h2>Material used</h2>
          <p>
          Polyester is deemed lower quality due to its none natural quality’s. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. Polyester suits tend to have a shine to them compared to wool and cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and breathable. Velvet is a great choice for dinner party jacket and can be worn all year round.</p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ProductDetail
