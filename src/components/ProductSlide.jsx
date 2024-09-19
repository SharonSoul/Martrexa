import React, { useEffect, useState } from 'react';
import './../styles/productSlide.module.css'; // Import your CSS here

function ProductSlide() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const images = Array.from(document.querySelectorAll('.slider-image'));
    const backgrounds = document.querySelectorAll('.background');

    // Function to update the slider and background
    const updateSlider = () => {
      images.forEach((image) => {
        image.classList.remove('active', 'previous', 'next', 'inactive');
      });

      // Add active, previous, and next classes
      images[imageIndex].classList.add('active');
      images[(imageIndex - 1 + images.length) % images.length].classList.add('previous');
      images[(imageIndex + 1) % images.length].classList.add('next');

      // Add inactive class to remaining images
      images.forEach((image, index) => {
        if (index !== imageIndex && index !== (imageIndex - 1 + images.length) % images.length && index !== (imageIndex + 1) % images.length) {
          image.classList.add('inactive');
        }
      });

      // Update background opacity
      backgrounds.forEach((background) => {
        background.style.opacity = 0;
      });
      backgrounds[imageIndex].style.opacity = 1;

      // Update the image index
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Initial state
    updateSlider();

    // Set interval for updating the slider every 3 seconds
    const intervalId = setInterval(updateSlider, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [imageIndex]);

  return (
    <section className="slider-main">
      <div className="container">
        <div className="logo">
          <a href="#">
            <img
              src="https://www.yudiz.com/codepen/headphone-slider/logo.svg"
              alt="logo"
            />
          </a>
        </div>
        <div className="slider-content-wrap">
          <div className="slider-content">
            <h2 className="heading-style-2">
              Apple AirPods Max Wireless Over-Ear Headphones.
            </h2>
            <p>
              Active Noise Cancelling, Transparency Mode, Spatial Audio, Digital
              Crown for Volume Control. Bluetooth Headphones for iPhone
            </p>
            <h3 className="heading-style-2">$779.99</h3>
            <div className="social-icons">
              <a href="#">
                <img
                  src="https://www.yudiz.com/codepen/headphone-slider/instagram-icon.svg"
                  alt="instagram"
                />
              </a>
              <a href="#">
                <img
                  src="https://www.yudiz.com/codepen/headphone-slider/facbook-icon.svg"
                  alt="facebook"
                />
              </a>
              <a href="#">
                <img
                  src="https://www.yudiz.com/codepen/headphone-slider/twiter-icon.svg"
                  alt="twitter"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-images">
        <img
          className="slider-image"
          src="https://www.yudiz.com/codepen/headphone-slider/green.png"
          alt="green headphone"
        />
        <img
          className="slider-image"
          src="https://www.yudiz.com/codepen/headphone-slider/blue.png"
          alt="blue headphone"
        />
        <img
          className="slider-image"
          src="https://www.yudiz.com/codepen/headphone-slider/red.png"
          alt="red headphone"
        />
        <img
          className="slider-image"
          src="https://www.yudiz.com/codepen/headphone-slider/white.png"
          alt="white headphone"
        />
        <img
          className="slider-image"
          src="https://www.yudiz.com/codepen/headphone-slider/black.png"
          alt="black headphone"
        />
      </div>

      <div id="backgrounds">
        <div
          className="background"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, #C7F6D0 0%, #7CB686 92.19%)',
          }}
        ></div>
        <div
          className="background"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, #D1E4F6 0%, #5F9CCF 100%)',
          }}
        ></div>
        <div
          className="background"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, #FFB7B2 0%, #ED746E 100%)',
          }}
        ></div>
        <div
          className="background"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, #D7D7D7 0%, #979797 100%)',
          }}
        ></div>
        <div
          className="background"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, #6B6B6B 0%, #292929 100%)',
          }}
        ></div>
      </div>
    </section>
  );
}

export default ProductSlide;
