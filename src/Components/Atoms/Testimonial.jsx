import { Star } from "lucide-react";

export default function Testimonial({ img, name, profession, rating }) {
  return (
    <div className="w-96 flex flex-col justify-center p-4">
      <section className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div>
            <img className="w-10 h-10 rounded-full" src={img} alt="" />
          </div>
          <div className="flex-col">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-lg font-semibold">{profession}</p>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124514/FoodVillage/others/quote_1_tup6g3.png"
          alt=""
        />
      </section>
      <section>
        <p className="italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          tempore explicabo nemo, sit quisquam eveniet nulla aperiam sequi odit
          optio, asperiores voluptatum rerum, placeat perspiciatis. Doloribus
          illo aspernatur sunt accusantium.
        </p>
        <div className="flex">
          {Array.from({ length: 5 }, (_, index) => {
            return (
              <span
                key={index}
                className={`${
                  rating > index ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                <Star strokeWidth={4} />
              </span>
            );
          })}
        </div>
      </section>
    </div>
  );
}
