import React from "react";
import "./OurServices.css";
import image4 from "./image4.jpeg";
import image5 from "./image5.png";
import image6 from "./image6.jpeg";
import image7 from "./image7.jpeg";
import image8 from "./image8.jpeg";
import image9 from "./image9.jpeg";
import image10 from "./image10.jpeg";
import image11 from "./image11.jpeg";
import image12 from "./image12.jpeg";
import image13 from "./image13.jpeg";
import image14 from "./image14.jpeg";
import image15 from "./image15.jpeg";

const OurServices = () => {
  const myInlineStyle = {
    color: "#424B5F",
    fontSize: "20px",
    fontFamily: "Rufina",
  };

  return (
    <div className="service-component">
      <div className="service-content" style={{ textAlign: "left" }}>
        <h2>Our Services</h2>
        <p>Learn about the services we offer</p>
        <p style={myInlineStyle}>
          We provide specialized business services tailored for startups and
          emerging companies.<br></br> Our expertise is especially beneficial
          for enterprises with lean teams or those venturing <br></br>into the
          business realm for the first time.
        </p>
      </div>
      <div className="image-grid">
        <div className="image-row">
          <div className="image-item">
            <img src={image4} alt="Service 1" />
            <strong>
              Tech Services <i class="arrow right_arr"></i>
            </strong>

            <p>
              Experience unparalleled digital prowess with our team of experts
              dedicated to your brand's success. Not only will we enhance your
              online visibility, but we also promise unwavering technical
              assistance. Ensure your digital infrastructure operates with the
              seamless efficiency it deserves. With us, expertise meets
              excellence.
            </p>
          </div>
          <div className="image-item">
            <img src={image5} alt="Service 2" />
            <strong>
              Digital Marketing Services <i class="arrow right_arr"></i>
            </strong>

            <p>
              Boost your brand's digital visibility with our tailored marketing
              strategies. From enhancing your online presence to engaging the
              ideal audience, our solutions encompass the power of
              newsletter/email marketing and the precision of AdWords &amp;
              display campaigns. Dive into a digital experience that turns
              visitors into loyal patrons.
            </p>

          </div>
          <div className="image-item">
            <img src={image6} alt="Service 3" />
            <strong>
              Business and Strategy Development <i class="arrow right_arr"></i>
            </strong>

            <p>
              Partner with seasoned professionals committed to your vision. Our
              experts collaborate intimately with you, crafting strategic
              blueprints that pinpoint opportunities and overcome challenges.
              Embark on a journey towards enduring success, where every move is
              meticulously planned and executed.
            </p>

          </div>
        </div>
        <div className="image-row">
          <div className="image-item">
            <img src={image7} alt="Service 4" />
            <strong>
              Sales Services <i class="arrow right_arr"></i>
            </strong>

            <p>
              Amplify your sales trajectory with our unparalleled sales
              services. Think of us as an extension of your team—an additional
              sales arm that doesn't adhere to conventional pricing. From
              driving revenue growth and scouting fresh leads to nurturing
              client relationships and sealing pivotal deals, our sales experts
              are your ace in the pocket for unprecedented business growth.
            </p>

          </div>
          <div className="image-item">
            <img src={image8} alt="Service 5" />
            <strong>
              Creative Services <i class="arrow right_arr"></i>
            </strong>

            <p>
              Unlock the essence of your brand with our creative maestros.
              Offering more than just design, we deliver innovation that spans
              branding, graphic artistry, and compelling content creation. With
              our touch, your brand identity and marketing materials don't just
              stand out—they resonate and captivate.
            </p>

          </div>
          <div className="image-item">
            <img src={image9} alt="Service 6" />

            <strong>
              Manufacturer Services <i class="arrow right_arr"></i>
            </strong>
            <p>
              Elevate your fashion &amp; jewellery venture with us as your
              strategic extension. Our specialized team doesn't just offer
              support; we provide mastery in manufacturer sourcing, streamlined
              supply chain management, and meticulous quality control. Your
              production process will not only be enhanced—it'll be transformed.
            </p>

          </div>
        </div>
        <div className="image-row">
          <div className="image-item">
            <img src={image10} alt="Service 4" />

            <strong>
              Logistics Services <i class="arrow right_arr"></i>
            </strong>
            <p>
              Embrace the future of hassle-free logistics with our unparalleled
              solutions. Our commitment goes beyond transparency — with a
              steadfast promise of no hidden fees and no seasonal pricing hikes.
              Benefit from our meticulous supply chain management, impeccable
              inventory oversight, and swift order fulfillment, shipping, and
              tracking. We prioritize your timely deliveries and ultimate
              customer satisfaction, ensuring a consistent experience. With us,
              clarity and excellence are guaranteed; what you see is indeed what
              you get
            </p>

          </div>
          <div className="image-item">
            <img src={image11} alt="Service 5" />
            <strong>
              Customer Services <i class="arrow right_arr"></i>
            </strong>

            <p>
              Trust in our commitment to exceptional customer service. We don't
              just manage inquiries and complaints; we transform them into
              opportunities for enhanced satisfaction. With our proactive
              support team at the helm, every interaction is a promise of
              excellence, ensuring that your customers always leave with a
              smile.
            </p>

          </div>
          <div className="image-item">
            <img src={image12} alt="Service 6" />
            <strong>
              PR Services <i class="arrow right_arr"></i>
            </strong>

            <p>
              Entrust your brand's voice to experts who amplify and refine it.
              With our adept public relations management, not only do we sculpt
              a sterling brand image, but we also navigate the media landscape,
              ensuring your reputation shines bright. Engage with stakeholders
              and media with renewed confidence and effectiveness, all under our
              dedicated wing
            </p>

          </div>
        </div>
        <div className="image-row">
          <div className="image-item">
            <img src={image13} alt="Service 4" />
            <strong>
              Accounting and Bookkeeping Services<i class="arrow right_arr"></i>
            </strong>

            <p>
              Navigate the complexities of global finance with confidence,
              backed by our accounting maestros. Beyond mere number-crunching,
              we promise precision in bookkeeping, unwavering accuracy in
              financial records, and meticulous compliance with international
              regulations. With us at your side, your finances aren't just
              managed—they're mastered
            </p>

          </div>
          <div className="image-item">
            <img src={image14} alt="Service 5" />
            <strong>
              Funding Services <i class="arrow right_arr"></i>
            </strong>
            <p>
              Empower your entrepreneurial ambitions with the ideal financial
              catalyst. Our Funding Services go beyond mere connections — we
              sculpt the pathway linking your vision with committed investors.
              We have a global investor network from Business Angels to VCs and
              Family Offices spanning the USA, Europe, the Middle East and Asia.
              With us, funding isn't just a transaction; it's the initiation of
              a collaborative growth journey. Partner with us and watch your
              aspirations metamorphose into well-funded realities
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
