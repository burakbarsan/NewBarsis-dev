import React from "react";
import { Col } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
 
// Import Images
import Image1 from "../../assets/images/1.png";
import Image2 from  "../../assets/images/2.png";
import Image3 from  "../../assets/images/3.png";
import Image4 from  "../../assets/images/4.png";
 
const AuthSlider = () => {
  const image1 = (
    <img className="login-slider-img"
      src={Image1}
    />
  );
  const image2 = (
    <img className="login-slider-img"
      src={Image2}
    />
  );
 
  const image3 = (
    <img className="login-slider-img"
      src={Image3}
    />
  );
  const image4 = (
    <img className="login-slider-img"
      src={Image4}
    />
  );
 
  return (
    <>
      <div className="login-slider-bg-blue"
      >
        <div className="login-logo"
        >
          <svg
            width="192"
            height="35"
            viewBox="0 0 192 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.2 14.368C34.08 16.288 36 19.552 36 23.296C36 29.2 31.2 34 25.296 34H2.4V0.399998H23.568C28.56 0.399998 32.64 4.48 32.64 9.472C32.64 11.296 32.112 12.976 31.2 14.368ZM8.4 6.4V12.544H23.616C25.296 12.544 26.688 11.152 26.688 9.472C26.688 7.792 25.296 6.4 23.616 6.4H8.4ZM25.296 28V27.952C27.888 27.952 30 25.84 30 23.248C30 20.656 27.888 18.544 25.296 18.544H8.4V28H25.296ZM68.9468 28L72.0188 34H65.2988L62.2268 28L54.8828 13.6L47.5388 28L44.4668 34H37.7468L40.8188 28L54.8828 0.399998L68.9468 28ZM97.2356 18.496L102.036 28.048L105.108 34.048H98.3876L95.3156 28.048L92.0996 21.76L91.9556 21.472C90.8996 19.744 89.0276 18.592 86.8676 18.592H80.8676V34.048H74.8676V0.447997H96.0836C98.5796 0.447997 100.836 1.456 102.468 3.088C104.1 4.768 105.108 7.024 105.108 9.52C105.108 13.168 102.948 16.336 99.8276 17.776C99.0116 18.16 98.1476 18.4 97.2356 18.496ZM80.8676 12.64L96.0836 12.592C96.5156 12.592 96.9476 12.496 97.3316 12.304C98.4356 11.824 99.1556 10.72 99.1556 9.52C99.1556 8.416 98.5796 7.648 98.2436 7.312C97.8596 6.928 97.1396 6.448 96.0836 6.448H80.8676V12.64ZM141.754 9.664L135.754 9.712V9.52C135.754 7.84 134.362 6.448 132.682 6.448H119.05C117.37 6.448 115.978 7.84 115.978 9.52V9.712C115.978 11.392 117.37 12.784 119.05 12.784H131.146C134.266 12.784 137.05 14.128 138.97 16.24C139.114 16.384 139.21 16.528 139.354 16.672C140.842 18.496 141.754 20.848 141.754 23.392C141.754 29.248 137.002 34 131.146 34H120.634C114.778 34 110.026 29.248 110.026 23.392H116.026C116.026 25.936 118.09 28 120.634 28H131.146C133.69 28 135.802 25.936 135.802 23.392C135.802 20.848 133.69 18.784 131.146 18.784H119.05C116.602 18.784 114.394 17.824 112.762 16.24C112.33 15.808 111.946 15.328 111.61 14.8C110.602 13.36 110.026 11.584 110.026 9.664V9.472C110.026 4.48 114.058 0.399998 119.05 0.399998H132.682C137.674 0.399998 141.754 4.48 141.754 9.472V9.664ZM152.541 34H146.541V0.399998H152.541V34ZM189.098 9.664L183.098 9.712V9.52C183.098 7.84 181.706 6.448 180.026 6.448H166.394C164.714 6.448 163.322 7.84 163.322 9.52V9.712C163.322 11.392 164.714 12.784 166.394 12.784H178.49C181.61 12.784 184.394 14.128 186.314 16.24C186.458 16.384 186.554 16.528 186.698 16.672C188.186 18.496 189.098 20.848 189.098 23.392C189.098 29.248 184.346 34 178.49 34H167.978C162.122 34 157.37 29.248 157.37 23.392H163.37C163.37 25.936 165.434 28 167.978 28H178.49C181.034 28 183.146 25.936 183.146 23.392C183.146 20.848 181.034 18.784 178.49 18.784H166.394C163.946 18.784 161.738 17.824 160.106 16.24C159.674 15.808 159.29 15.328 158.954 14.8C157.946 13.36 157.37 11.584 157.37 9.664V9.472C157.37 4.48 161.402 0.399998 166.394 0.399998H180.026C185.018 0.399998 189.098 4.48 189.098 9.472V9.664Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="login-slider-text-body"
        >
          <h1
            className="login-slider-baslik"
           
          >
            Just Take a Step:
            <br/>  Enter Barsis World Now!
          </h1>
 
 
          <h3 className="login-slider-content"
         
          >
            Hello to the Barsis family! Complete your login process within
            seconds.
          </h3>
        </div>
      </div>
      <React.Fragment>
        <Carousel
          interval={5000}
          transitionTime={1000}
          showThumbs={false}
          autoPlay={true}
          showArrows={false}
          showStatus={false}
          infiniteLoop={true}
          className="carousel slide"
        >
          <CarouselPage element={image1} />
          <CarouselPage element={image2} />
          <CarouselPage element={image3} />
          <CarouselPage element={image4} />
        </Carousel>
      </React.Fragment>
    </>
  );
};
 
const CarouselPage = ({ element }: any) => {
  return <div>{element}</div>;
};
 
export default AuthSlider;