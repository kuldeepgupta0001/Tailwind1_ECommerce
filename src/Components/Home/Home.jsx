import React from "react";
import Image1 from "../../assets/home/women.png";
import Image2 from "../../assets/home/shopping.png";
import Image3 from "../../assets/home/sale.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Products from "../Products/Products";
import TopProducts from "../TopProducts/TopProducts";
import Banner from "../Banner/Banner";
import Subscribe from "../Subscribe/Subscribe";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Nestled in the heart of the city, Café Elysium is a haven for those seeking a respite from the hustle and bustle of daily life. Stepping into the warm embrace of this quaint coffee haven, guests are greeted by the rich aroma of freshly ground beans and the gentle hum of conversation.",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Nestled in the heart of the city, Café Elysium is a haven for those seeking a respite from the hustle and bustle of daily life. Stepping into the warm embrace of this quaint coffee haven, guests are greeted by the rich aroma of freshly ground beans and the gentle hum of conversation.",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Nestled in the heart of the city, Café Elysium is a haven for those seeking a respite from the hustle and bustle of daily life. Stepping into the warm embrace of this quaint coffee haven, guests are greeted by the rich aroma of freshly ground beans and the gentle hum of conversation.",
  },
];
const Home = () => {
  return (
    <div
      className="bg-white dark:bg-gray-900 dark:text-white
     duration-200"
    >
      <div
        className="relative overflow-hidden min-h-[550px]
    sm:min-h-[603px] bg-gray-100 flex justify-center items-center
    dark:bg-gray-950 dark:text-white duration-200"
      >
        {/* Background Pattern */}
        <div
          className="h-[750px] w-[750px] bg-primary/40
      absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"
        ></div>
        {/* Home Section */}
        <div className="container pb-8 sm:pb-0">
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {ImageList.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Text Content Section */}
                  <div
                    className="flex flex-col justify-center gap-4
             pt-12 sm:pt-0 text-center sm:text-left
             order-2 sm:order-1 relative z-10"
                  >
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl
              font-bold"
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text:sm"
                    >
                      {data.description}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <button
                        className="bg-gradient-to-r 
                from-primary to-secondary hover:scale-105
                duration-200 text-white py-2 px-4
                rounded-full"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                  {/* Image Section */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt="Image"
                        className="w-[300px] h-[300px] sm:h-[450px]
                  sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
    </div>
  );
};

export default Home;
