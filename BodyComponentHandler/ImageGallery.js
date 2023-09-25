

import React from 'react';
import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
import './ImageGallery.css';

const ImageGallery = () => {
  const style2 = {
    fontFamily: 'Rufina',
    fontSize: '20px',

  };
  const style1 = {
    fontFamily: 'Rufina',
    fontSize: '36px',

  }
  return (
    <div className="image-gallery-container">
      <div className="horizontal-image">
        <img src={image1} alt="Horizontal Image" />
        <div className="text-overlay">
          <span>Boost your Business by Bridging the Gap Between <br></br>Dreams and Reality</span>
        </div>
      </div>

      <div className="vertical-container">
        <div className="vertical-image">
          <img src={image2} alt="Vertical Image 1" />
        </div>
        <div className="vertical-text">
          <span style={style1}>About Fair Business Growth</span>
          <p style={style2}>
            Whether you are an established firm looking to scale or a fledgling startup trying to find your footing, our holistic, cost-effective services are tailored to elevate your business performance and achieve your strategic goals.<br></br><br></br>
            Our agency offers 360-degree services to propel companies towards their goals. Prioritizing cost efficiency, we provide solutions in sales, ads, content, accounting, PR, market analysis, tech, funding, and manufacturing. Our dedicated team ensures results that elevate your brand in a competitive market. Fair Business Growth stands out with its rich experience and global reach, emphasizing scalable growth within the conscious consumer segment. We prioritize high-quality, affordable services for all business sizes, empowering startups to tap into our expertise.
          </p>
          <a style={style2} href="#">More Info</a>
        </div>

      </div>
    </div>
  );
}

export default ImageGallery;

