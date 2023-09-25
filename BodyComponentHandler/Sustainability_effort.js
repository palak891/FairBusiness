import React from "react";
import "./sustainability_effort.css";
import imageUrl from "./image15.jpeg";

const Sustainability_effort = () => {
  const paragraphText1 = `What further distinguishes us is our steadfast commitment to sustainability and social responsibility. We understand that businesses today have a pivotal role in safeguarding our planet. Drawing from our rich experiences with sustainability-focused enterprises like 1 People and Impact Business Co., we bring an unparalleled depth of knowledge and expertise in the sustainability sector to the table.`;
  const paragraphText2 = `Our nuanced understanding of the Environmental, Social, and Governance (ESG) guidelines, together with our extensive network within the sustainability sphere, enables us to align your business with customers, suppliers, and partners who are equally committed to responsible business practices. We believe that such an alignment not only benefits the world at large but also ensures your business's long-term success in harmony with the planet and its inhabitants.`;

  return (
    <div className="container">
      <div className="image">
        <img src={imageUrl} alt="Description" />
      </div>
      <div className="text">
        <h1>Our Sustainability Efforts</h1>
        <span>{paragraphText1}</span>
        <span>{paragraphText2}</span>
      </div>
    </div>
  );
};

export default Sustainability_effort;
