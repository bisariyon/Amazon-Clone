import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return ( 
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={2000}
      >
        <div>
          <img
            loading="lazy"
            className="home__image w-full h-[450px] object-cover z-[-1] "
            src="https://images-eu.ssl-images-amazon.com/images/G/29/digital/video/magellan/country/Italy/EvergreenRefresh/Q3_2023/IOS_Mob_PMP_Navigational_Landing_Pages_SADLPDesktop_EVRGRN_XSite_1453x363_PV_it-IT.jpg"
            alt="Amazon Prime"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }}
          />
        </div>

        <div>
          <img
            loading="lazy"
            className="home__image w-full h-[450px] object-cover z-[-1] "
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/980_AB_GIF_Wave04_SP_TopBanner_Unrec_1242x450.jpg"
            alt="Sale"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }}
          />
        </div>
        <div>
          <img
            loading="lazy"
            className="home__image w-full h-[450px] object-cover z-[-1] "
            src="https://allstarsdigital.in/wp-content/uploads/2020/09/drive-sales-to-amazon-1024x546.jpg"
            alt="Sale"
            style={
              {
                // maskImage:
                // "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
              }
            }
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
