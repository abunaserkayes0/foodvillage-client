import { ArrowRight, MoveLeftIcon, MoveRightIcon } from "lucide-react";

export default function CarouselItem({
  image,
  previousSlide,
  NextSlide,
  currentSlide,
}) {
  return (
    <div
      id={currentSlide}
      className="carousel-item relative w-full rounded-xl overflow-hidden"
    >
      <img src={image} className="w-full object-cover" alt="Carousel Item" />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute w-11/12 md:w-1/2 flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform gap-5 p-4 text-center lg:text-center md:text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          accusamus!
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit
          qui tempore corporis, officiis eligendi ullam repudiandae illum
          reprehenderit facilis fuga odio voluptates repellendus. Iure
          praesentium dicta quibusdam earum autem!
        </p>
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <button className="btn bg-orange-50 text-black hover:outline hover:outline-2 hover:bg-orange-800 hover:text-white">
            Discover More <ArrowRight />
          </button>
          <button className="btn bg-orange-50 text-black hover:outline hover:outline-2 hover:bg-orange-800 hover:text-white">
            Latest Project <ArrowRight />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-5 bottom-5 md:right-10 md:bottom-10 flex gap-5">
        <a
          href={previousSlide}
          className="btn btn-circle text-black hover:bg-orange-700 hover:text-white "
        >
          <MoveLeftIcon />
        </a>
        <a
          href={NextSlide}
          className="btn btn-circle text-black hover:bg-orange-700 hover:text-white"
        >
          <MoveRightIcon />
        </a>
      </div>
    </div>
  );
}
