import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <>
      <MDBContainer fluid className="gallery-container">
        <h1 className="gallery-title">Our Event Gallery</h1>
        <MDBRow>
          {/* Column 1 */}
          <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              className="w-100 shadow-1-strong rounded mb-4 gallery-image"
              alt="Boat on Calm Water"
              onClick={(e) => handleImageClick(e.target.src)}
            />
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              className="w-100 shadow-1-strong rounded mb-4 gallery-image"
              alt="Wintry Mountain Landscape"
              onClick={(e) => handleImageClick(e.target.src)}
            />
          </MDBCol>

          {/* Column 2 */}
          <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              className="w-100 shadow-1-strong rounded mb-4 gallery-image"
              alt="Mountains in the Clouds"
              onClick={(e) => handleImageClick(e.target.src)}
            />
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              className="w-100 shadow-1-strong rounded mb-4 gallery-image"
              alt="Boat on Calm Water"
              onClick={(e) => handleImageClick(e.target.src)}
            />
          </MDBCol>

          {/* Column 3 */}
          <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              className="w-100 shadow-1-strong rounded mb-4 gallery-image"
              alt="Waves at Sea"
              onClick={(e) => handleImageClick(e.target.src)}
            />
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              className="w-100 shadow-1-strong rounded mb-4 gallery-image"
              alt="Yosemite National Park"
              onClick={(e) => handleImageClick(e.target.src)}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <img src={selectedImage} alt="Enlarged view" />
            <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-container {
          padding: 80px;
          background: #000;
          min-height: 100vh;
        }

        .gallery-title {
          color: white;
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.5rem;
          font-weight: bold;
        }

        .gallery-image {
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .gallery-image:hover {
          transform: scale(1.02);
        }

        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .lightbox-content {
          position: relative;
          max-width: 90%;
          max-height: 90vh;
        }

        .lightbox-content img {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
        }

        .close-button {
          position: absolute;
          top: -40px;
          right: -40px;
          background: none;
          border: none;
          color: white;
          font-size: 30px;
          cursor: pointer;
          padding: 10px;
        }

        .close-button:hover {
          color: #ddd;
        }

        @media (max-width: 768px) {
          .gallery-container {
            padding: 40px 20px;
          }

          .gallery-title {
            font-size: 2rem;
            margin-bottom: 30px;
          }

          .close-button {
            top: -30px;
            right: -10px;
          }
        }
      `}</style>
    </>
  );
}
