import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import CarouselItem from "../Atoms/CarouselItem";

export default function Carousel() {
  return (
    <div className="carousel w-full max-h-[80vh] bg-cover rounded-xl">
      <CarouselItem
        currentSlide="slide1"
        image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124513/FoodVillage/banner/banner-3_ygnfh4.jpg"
        previousSlide="#slide4"
        NextSlide="#slide2"
      />

      <CarouselItem
        currentSlide="slide2"
        image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124513/FoodVillage/banner/banner-2_ksrklp.jpg"
        previousSlide="#slide1"
        NextSlide="#slide3"
      />

      <CarouselItem
        currentSlide="slide3"
        image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124513/FoodVillage/banner/banner-1_rmc6h0.jpg"
        previousSlide="#slide2"
        NextSlide="#slide4"
      />

      <CarouselItem
        currentSlide="slide4"
        image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124513/FoodVillage/banner/banner-4_l6zxsn.jpg"
        previousSlide="#slide3"
        NextSlide="#slide1"
      />
    </div>
  );
}
