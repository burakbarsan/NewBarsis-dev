import React from "react";
import { UncontrolledCarousel } from "reactstrap";

// Carousel images
import img1 from "../../../../assets/images/1.png";
import img2 from "../../../../assets/images/2.png";
import img3 from "../../../../assets/images/3.png";
import img4 from "../../../../assets/images/4.png";


const Slidewithcaption = () => {
  return (
    <React.Fragment>
      <UncontrolledCarousel
        interval={4000}
        items={[
          {
            altText: "Just Take a Step: Enter Barsis World Now! ",
            caption: "Hello to the Barsis family! Complete your login process within seconds.",
            key: 1,
            src: img1,
            style: {
              objectFit: "cover", // Resmi boyutlandırarak ekrana sığdırmak için
            },
          },
          {
            altText: "Just Take a Step: Enter Barsis World Now! ",
            caption: "Hello to the Barsis family! Complete your login process within seconds.",
            key: 2,
            src: img2,
            style: {
              objectFit: "cover",
            },
          },
          {
            altText: "Just Take a Step: Enter Barsis World Now! ",
            caption: "Hello to the Barsis family! Complete your login process within seconds.",
            key: 3,
            src: img3,
            style: {
              objectFit: "cover",
            },
          },
          {
            altText: "Just Take a Step: Enter Barsis World Now! ",
            caption: "Hello to the Barsis family! Complete your login process within seconds.",
            key: 4,
            src: img4,
            style: {
              objectFit: "cover",
            },
          },
        ]}
      />
    </React.Fragment>
  );
};

export default Slidewithcaption;

