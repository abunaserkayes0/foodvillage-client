import Content from "../Atoms/Content";
import Team from "../Atoms/Team";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Teams() {
  return (
    <div className="my-16">
      <Content
        miniTitle="Team"
        title="Meet Our Team"
        paragraph="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      />

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <Team
            img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124520/FoodVillage/services-man/chefs-2_rs3snk.jpg"
            title="Tomas Alison"
            designation="Cuting Master"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Team
            img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124519/FoodVillage/services-man/chefs-4_tr9xji.jpg"
            title="Montial Bilish"
            designation="Team leader"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Team
            img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124519/FoodVillage/services-man/chefs-1_ltu2ui.jpg"
            title="Corner Vila"
            designation="Assistant"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Team
            img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124519/FoodVillage/services-man/chefs-3_j9ej9t.jpg"
            title="Gorge Cantor"
            designation="Quality checker"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
