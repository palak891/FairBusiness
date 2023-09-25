import React from 'react';

const ImageParagraph_Component = ({ imageUrl, paragraphText }) => {
  return (
    <div className="container">
      <div className="image">
        <img src={imageUrl} alt="Image Description" />
      </div>
      <div className="paragraph">
        <p>
          {paragraphText}
        </p>
      </div>
    </div>
  );
};

export default ImageParagraph_Component;
