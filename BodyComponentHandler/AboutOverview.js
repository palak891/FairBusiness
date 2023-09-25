import React from 'react';
import image3 from './image3.jpeg';
import './AboutOverview.css';

const AboutOverview = () => {
  return (
    <div className="about-overview-container">
      <div className="image">
        <img src={image3} alt="Horizontal Image" />
      </div>
      <div className="text">
        <span>Why you should work with us</span>
        <p>
          Our expertise is founded on real experience, having personally scaled startups from local beginnings to global prominence across various industries. This isn't just theory to us.
        </p>
        <ul>
          <li>We have all you need, already established a global growth platform, network, and resources ready to work and create growth for you.</li>
          <li>We are specialized and have unique expertise for startups and companies that are impact-driven, sustainable, and/or ethical - or for those who want to transition into this focus.</li>
          <li>We are Founders and Executives that have done it all several times with our own startups and companies, bringing them from small and local to big and global. We know what we are talking about and can utilize all our knowledge, network, channels, and resources for you.</li>
          <li>We are highly skilled and experienced teams only focused on creating success and real growth for you.</li>
          <li>We can offer you all services as a package covering all parts of your business or those you choose, which let you do exactly what you are best at - we take care of the rest and grow your business to success.</li>
          <li>We can do all this at prices that no one else can offer you and which will cut your operational cost from day 1.</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutOverview;
