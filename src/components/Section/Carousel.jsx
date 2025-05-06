import Slider from 'react-slick'
import propTypes from 'prop-types'
import './styles/slick.css';
import './styles/slick-theme.css';
import { useState } from 'react';

export const Carousel = ({ items }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div className='custom-carousel-container'>
            {imgLoaded &&
                <div className='title-container'>
                    <div>
                        <h1>Consultorios Médicos David</h1>
                        <h2>Ética profesional al servicio de tu salud</h2>
                    </div>
                </div>
            }
            <Slider {...settings}>
                {
                    items.map((item, index) => (
                        <div key={index} className='img-container'>
                            <img src={item} className='d-block w-100' onLoad={() => setImgLoaded(true)} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

Carousel.propTypes = {
    items: propTypes.array.isRequired
}