import React from 'react'
import Layout from '../Layout/Layout'
import { Carousel, Button} from 'react-bootstrap'
import "./HomeStyle.css";

const Home = () => {
    return (
        <div>
            <Layout>
                <div>
                    <Carousel slide={false}>
                        <Carousel.Item>
                            <img src={"./Carousel/hero-image1.jpg"} text="First slide"  className='img-fluid'/>
                            <Carousel.Caption>
                                <h3>Casual Collection</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <Button className='carousel-btn-addtocart'>
                                    SHOP NOW <i class="bi bi-arrow-right"></i>
                                </Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src={"./Carousel/hero-image.jpg"} text="First slide"  className='img-fluid'/>
                        <Carousel.Caption>
                                <h3>Summer Collection</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <Button className='carousel-btn-addtocart'>
                                    SHOP NOW <i class="bi bi-arrow-right"></i>
                                </Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>



                {/*Starting Products Cards  */}

                    <div className='card-container'>
                        <h1>Feautered Products</h1>
                        <div className='row mt-5'>
                            <div className='col-3'>
                                <div className='product-img'>
                                    <img src="./Products/product-item1.jpg" className="card-img-top" alt="..."/>
                                </div>
                                <div className="card-body">
                                <p className="product-p">Full Sleeve Cover Shirt</p>
                                <p className='product-price'>$40.00</p>
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className='product-img'>
                                    <img src="./Products/product-item2.jpg" className="card-img-top" alt="..."/>
                                </div>
                                <div className="card-body">
                                        <p className="product-p">Volunteer Half Blue</p>
                                        <p className='product-price'>$38.00</p>

                                    </div>
                            </div>
                            <div className='col-3'>
                                <div className='product-img'>
                                    <img src="./Products/product-item3.jpg" className="card-img-top" alt="..."/>
                                </div>
                                <div className="card-body">
                                        <p className="product-p">Double Yellow Shirt</p>
                                        <p className='product-price'>$44.00</p>

                                    </div>
                            </div>
                            <div className='col-3'>
                                <div className='product-img'>
                                    <img src="./Products/product-item4.jpg" className="card-img-top" alt="..."/>
                                </div>
                                <div className="card-body">
                                        <p className="product-p">Long Belly Grey Pant</p>
                                        <p className='product-price'>$35.00</p>

                                    </div>
                            </div>
                        </div>
                    </div>
                {/*Ending Products Cards  */}



                <div className='collection row'>
                        <div className='col-7'>
                            <div className='collection1'>
                                <div className='bg-image d-flex'>
                                    <img className='img-fluid collectionimg1 ' src={"./Collection/collection-item1.jpg"}/>
                                </div>
                            </div>
                        </div>
                        <div className='col-5 column'>
                            <div className='collection2'>
                                <img className='img-fluid' src={"./Collection/collection-item2.jpg"}/>
                            </div>
                            <div className='collection3'>
                                <img className='img-fluid' src={"./Collection/collection-item3.jpg"}/>
                            </div>
                        </div>
                </div>

                </div>
            </Layout>
        </div>
    )
}

export default Home
