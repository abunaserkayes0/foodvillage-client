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
        <h1 className="text-xl md:text-5xl lg:text-6xl font-black text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          accusamus!
        </h1>
        <p className="text-[10px] md:text-lg lg:text-xl text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit
          qui tempore corporis, officiis eligendi ullam repudiandae illum
          reprehenderit facilis fuga odio voluptates repellendus. Iure
          praesentium dicta quibusdam earum autem!
        </p>
        <div className="flex flex-row gap-3 justify-center ">
          <div>
            <button className="btn bg-red-50 text-[8px] text-black hover:outline hover:outline-2 hover:bg-red-800 hover:text-white md:text-sm lg:tex-xl">
              Discover More <ArrowRight />
            </button>
          </div>
          <div>
            <button className="btn bg-red-50 text-[8px] text-black hover:outline hover:outline-2 hover:bg-red-800 hover:text-white md:text-sm lg:tex-xl">
              Latest Project <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute hidden right-5 bottom-5 md:right-10 md:bottom-10 md:flex gap-5">
        <a
          href={previousSlide}
          className="btn btn-circle text-black hover:bg-red-700 hover:text-white "
        >
          <MoveLeftIcon />
        </a>
        <a
          href={NextSlide}
          className="btn btn-circle text-black hover:bg-red-700 hover:text-white"
        >
          <MoveRightIcon />
        </a>
      </div>
    </div>
  );
}
