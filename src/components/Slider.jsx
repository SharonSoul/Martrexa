import React, { useEffect, useState } from 'react';
import styles from './../styles/Slider.module.css'; // Import your CSS module

// Import images from the assets folder
import greenImage from './../assets/green.png';
import blueImage from './../assets/blue.png';
import redImage from './../assets/red.png';
import whiteImage from './../assets/white.png';
import blackImage from './../assets/black.png';

const headphones = [
  { color: 'green', image: greenImage, background: 'radial-gradient(50% 50% at 50% 50%, #C7F6D0 0%, #7CB686 92.19%)' },
  { color: 'blue', image: blueImage, background: 'radial-gradient(50% 50% at 50% 50%, #D1E4F6 0%, #5F9CCF 100%)' },
  { color: 'red', image: redImage, background: 'radial-gradient(50% 50% at 50% 50%, #FFB7B2 0%, #ED746E 100%)' },
  { color: 'white', image: whiteImage, background: 'radial-gradient(50% 50% at 50% 50%, #D7D7D7 0%, #979797 100%)' },
  { color: 'black', image: blackImage, background: 'radial-gradient(50% 50% at 50% 50%, #6B6B6B 0%, #292929 100%)' }
];

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0); // Tracks which headphone is active

  useEffect(() => {
    const slideDuration = 3000; // 3 seconds duration for each slide
    const intervalDuration = 6000; // 6 seconds interval (3s in + 3s out)

    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % headphones.length); // Move to the next image
    }, intervalDuration);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <section
      className={styles.sliderMain}
      style={{ background: headphones[imageIndex].background }} // Change background dynamically
    >
      <div className={styles.textContainer}>
        <div className={styles.logo}>
          <a href="#">
            <img src="https://www.yudiz.com/codepen/headphone-slider/logo.svg" alt="logo" />
          </a>
        </div>
        <div className={styles.sliderContentWrap}>
          <div className={styles.sliderContent}>
            <h2 className={styles.headingStyle2}>
              Apple AirPods Max Wireless Over-Ear Headphones.
            </h2>
            <p>
              Active Noise Cancelling, Transparency Mode, Spatial Audio, Digital Crown for Volume Control. Bluetooth Headphones for iPhone
            </p>
            <h3 className={styles.headingStyle2}>$779.99</h3>
            <div className={styles.socialIcons}>
              <a href="#"><img src="https://www.yudiz.com/codepen/headphone-slider/instagram-icon.svg" alt="instagram" /></a>
              <a href="#"><img src="https://www.yudiz.com/codepen/headphone-slider/facbook-icon.svg" alt="facebook" /></a>
              <a href="#"><img src="https://www.yudiz.com/codepen/headphone-slider/twiter-icon.svg" alt="twitter" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sliderImages}>
        <img
          className={styles.sliderImage}
          src={headphones[imageIndex].image}
          alt={`${headphones[imageIndex].color} headphone`}
        />
      </div>
    </section>
  );
};

export default Slider;
