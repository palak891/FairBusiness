import React from "react";
import imageInsp1 from "./image-inspiration1.jpeg";
import CCCImage from "./CCCimage.jpeg"
import "./InspirationComponentHandler.css";

// Define a functional component named Price
function InspirationComponentHandler() {
    return (
        <div className="Inspiration-Container">
            <div className="horizontal-image-container-inspiration">

                <img src={imageInsp1} alt="Horizontal Image" />
                <div className="text-overlay-container-inspiration">
                    <h1>BLOG</h1>
                    <h2>
                        Thoughts and ideas from <br></br>Fair Business Growth
                    </h2>
                </div>
            </div>
            <div className="ConsciousConsumerContainer">
                <img src={CCCImage} alt="ConsciousConsumer"></img>
                <div className="CCCtextContainer">
                    <h3>The Conscious Consumer: How Sustainability is <br></br>Shaping Modern Business Practices</h3>
                    <p>August 14, 2023<br></br><br></br>
                        In today's interconnected world, businesses are no longer judged solely by<br></br> the quality of their products or the efficiency of their services. The modern<br></br> consumer, more informed and discerning than ever before, seeks brands <br></br>that uphold values alig</p>
                </div>
            </div>
        </div>

    );
}

export default InspirationComponentHandler;
