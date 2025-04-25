import React from 'react'
import Layout from '../Layout/Layout'
import "./ShopStyle.css";
import { Link } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import { useState,useEffect } from 'react';

const Shop = () => {
  const [data, setData] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('mens-shirts');

    const categoryApis = {
      'mens-shirts': 'https://dummyjson.com/products/category/mens-shirts',
      'mens-shoes': 'https://dummyjson.com/products/category/mens-shoes',
      'mens-watches': 'https://dummyjson.com/products/category/mens-watches',
  };

  useEffect(() => {
    fetch(categoryApis[selectedCategory])
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error('Error fetching data:', error));
}, [selectedCategory]);

const handleCategoryClick = (category) => {
  setSelectedCategory(category);
};
  return (
    <div>
      <Layout>
        <div className='shop'>
          <div className='row'>
            <div className='col-9 categories-list'>
              <ul>
                <li onClick={() => handleCategoryClick('mens-shirts')}>Shirts</li>
                <li onClick={() => handleCategoryClick('mens-shoes')}>Shoes</li>
                <li onClick={() => handleCategoryClick('mens-watches')}>Watches</li>
              </ul>
            </div>
            <div className='col-3'>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn-search"><i class="bi bi-search"></i></button>
              </form>
            </div>
          </div>
          <div className='container shopping'>
            <div className='row'>
            {data ? data.products.map((products) => (
            <div  key={products.id} className='col-3 shop-box'>
                  <Link to={`productdetail/${products.id}`}><img src={products.images[0]} className="img-fluid" alt="..." /></Link>
                <div className="card-body">
                  <p className="product-p">{products.title}</p>
                  <p className='product-price'>${products.price}</p>
                </div>
              </div>
                        )) : <p>loading...</p>}


            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Shop
