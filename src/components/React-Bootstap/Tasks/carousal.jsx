
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles

const DemoCarousel = () => {
    return (
        <Carousel autoPlay infiniteLoop>
            <div>
                <img src="https://via.placeholder.com/600x300/FF0000/FFFFFF?text=Slide+1" alt="Slide 1" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/600x300/00FF00/FFFFFF?text=Slide+2" alt="Slide 2" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/600x300/0000FF/FFFFFF?text=Slide+3" alt="Slide 3" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}

export default DemoCarousel;
