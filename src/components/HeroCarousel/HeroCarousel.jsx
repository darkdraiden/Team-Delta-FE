import React from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";

const images = [
  "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://blog.wego.com/wp-content/uploads/Kalapathar-sunset-1080x675.jpg",
  "https://platinumlist.net/guide/wp-content/uploads/2022/12/bestviews-dubai-1-scaled.jpg",
  "https://content.r9cdn.net/rimg/dimg/c9/00/0d7c3411-city-58595-168c496249f.jpg?width=1366&height=768&xhint=2456&yhint=2195&crop=true",
  "https://media.tacdn.com/media/attractions-content--1x-1/11/81/ea/b9.jpg",
];
const HeroCarousel = () => {
  const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((images, index) => (
            <div className="w-full h-65 md:h-80 py-3" key={index}>
              <img
                src={images}
                alt="Hero Banner"
                className="w-full h-96 rounded-md object-cover "
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block ">
        <HeroSlider {...settingsLG}>
          {images.map((image, index) => (
            <div className="w-full h-96 px-0 py-0 mb-0" key={index}>
              <img
                src={image}
                alt="Hero Banner"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
