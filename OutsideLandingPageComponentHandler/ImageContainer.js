import React from "react";
import "./ImageContainer.css";
import image17 from "./image17.jpeg";
import image18 from "./image18.jpeg";
import image19 from "./image19.jpeg";
import image20 from "./image20.jpeg";
import image21 from "./image21.jpeg";
import image22 from "./image22.jpeg";
import image23 from "./image23.jpeg";
import image24 from "./image24.jpeg";
import image25 from "./image25.jpeg";
import image26 from "./image26.jpeg";
import image27 from "./image27.jpeg";
import image28 from "./image28.jpeg";
import image29 from "./image29.jpeg";

function ImageContainer() {

  return (
    <div classname="Image-container-outside-LandingPage">
      <div className="text-container-outside-LandingPage">
        <h1
          style={{ color: "#7A5604", fontSize: "20px", fontFamily: "Rufina" }}
        >
          {" "}
          SIMPLE, STRAIGHTFORWARD PRICING
        </h1>
        <span
          style={{ color: "#041D52", fontSize: "36px", fontFamily: "Rufina" }}
        >
          Learn more about our packages and plans<br></br>
        </span>
        <span
          style={{ color: "#424B5F", fontSize: "20px", fontFamily: "Rufina" }}
        >
          We offer affordable solutions, tailored to meet your needs.
        </span>
      </div>
      <div className="image-grid-style-outside">
        {/* <div className="overlay-outside-landingPage"> */}
        <div className="image-row-style">
          <div className="image-item-style">
            <img src={image17} alt="Service 1" />
            <strong>
              <br></br> Tech Services
            </strong>
            {/* <p><i class="arrow right_arr"></i></p> */}
            <p>
              Quotation Based Services<br></br><br></br>$30/Hour
            </p>
          </div>
          <div className="image-item-style" >
            <img src={image18} alt="Service 2" />
            <strong><br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Accounting & &nbsp;&nbsp;&nbsp;Bookkeeping Services
            </strong>
            {/* <h1>Digital Marketing Services</h1> */}
            <p>
              Quotation Based Services<br></br><br></br>

              $18/per hour
            </p>
            {/* <div className="arrow"></div>
          </div> */}
          </div>
          <div className="image-item-style">
            <img src={image19} alt="Service 3" />
            <strong><br></br>
              Digital Marketing
            </strong>
            {/* <h1>Business and Strategy Development</h1> */}
            <p>
              <br></br>Organic Content Management<br></br><br></br>

              $500/Monthly per channel
            </p>
            {/* <div className="arrow"></div> */}
          </div>
        </div>
        <div className="image-row-style">
          <div className="image-item-style">
            <img src={image20} alt="Service 4" />
            <strong><br></br>
              Creative Services
            </strong>
            {/* <h1>Sales Services</h1> */}
            <p><br></br>
              Quotation Based Services<br></br><br></br>

              $23/hour
            </p>
            {/* <div className="arrow"></div>
          </div> */}
          </div>
          <div className="image-item-style">
            <img src={image21} alt="Service 5" />
            <strong>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Business & &nbsp;&nbsp;&nbsp;Strategy Development
            </strong>
            {/* <h1>Creative Services</h1> */}
            <p><br></br>
              Report Based<br></br><br></br>

              $5000
            </p>
            {/* ></div><div className="arrow"></div> */}
          </div>
          <div className="image-item-style">
            <img src={image22} alt="Service 6" />
            {/* <h1>Manufacturer Services</h1> */}
            <strong>
              Manufacturer Services
            </strong>
            <p>
              <br></br>Quotation Based Services<br></br><br></br>

              $25/per hour
            </p>
            {/* <div className="arrow"></div>
          </div> */}
          </div>
        </div>
        <div className="image-row-style">
          <div className="image-item-style">
            <img src={image23} alt="Service 4" />
            {/* <h1>Logistics Services</h1> */}
            <strong>
              PR Services
            </strong>
            <p><br></br>
              Based on Media Category Level<br></br><br></br>

              $1000 to $5000
            </p>
            {/* {/* <div className="arrow"></div> */}
          </div>
          <div className="image-item-style">
            <img src={image24} alt="Service 5" />
            <strong>
              Customer Services
            </strong>
            {/* <h1>Customer Services</h1> */}
            <p>
              &nbsp;   &nbsp;   &nbsp;  Email/Phone Based - $4/per Ticket

              Chat Based- $2/per Ticket<br></br>

              10% commission on successful sales via customer support
            </p>
            {/* {/* <div className="arrow"></div> */}
          </div>
          <div className="image-item-style">
            <img src={image25} alt="Service 6" />
            <strong>
              Sales Services
            </strong>
            {/* <h1>PR Services</h1> */}
            <p><br></br>
              Sales per onboarding in New Marketplace or Store.<br></br><br></br>

              $250 to $10000
            </p>
            {/* {/* <div className="arrow"></div> */}
          </div>
        </div>
        <div className="image-row-style">
          <div className="image-item-style">
            <img src={image26} alt="Service 4" />
            <strong>
              Logistics Services
            </strong>
            {/* <h1>Accounting and Bookkeeping Services</h1> */}
            <p>
              &nbsp;   &nbsp;   &nbsp;   &nbsp;Monthly Warehouse & Handling Fees:

              1,500 units: $350 to 20k units: $5,000
            </p>
            {/* {/* <div className="arrow"></div> */}
          </div>
          <div className="image-item-style">
            <img src={image27} alt="Service 5" />
            <strong>
              Marketing/SoMe
            </strong>

            {/* <h1>Funding Services</h1> */}
            <p>
              &nbsp;   &nbsp;   &nbsp;Revenue-Based Pricing Tiers for Companies:

              $500 + 12% ad revenue commission/month

              to

              $5,000/month
            </p>
          </div>
          <div className="image-item-style">
            <img src={image28} alt="Service 5" />
            <strong>
              Full Services
            </strong>

            {/* <h1>Funding Services</h1> */}
            <p>
              &nbsp;   &nbsp;   &nbsp; Revenue-Based Pricing Tiers for Companies:

              $6,000 + 5% commission on revenue/month

              to

              $8,000 + 5% commission on revenue/month
            </p>
          </div>
        </div>
        <div className="image-row-style">
          <div className="image-item-style">
            <img src={image29} alt="Service 4" />
            {/* <h1>Logistics Services</h1> */}
            <strong>
              Funding Services
            </strong>
            <p>
              &nbsp;   &nbsp; $2000 Service Fee + 5% Fee on raised funds


            </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
export default ImageContainer;
