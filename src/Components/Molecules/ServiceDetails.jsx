import { useLoaderData } from "react-router-dom";
import BreadcrumbBanner from "../Atoms/BreadcrumbBanner";
import { ArrowRight } from "lucide-react";

export default function ServiceDetails() {
  const data = useLoaderData();
  console.log(data);
  
  const { _id, title, img, facility, description, price } = data || {};

  return (
    <>
      <BreadcrumbBanner
        currentPath={_id}
        title="services Details"
        imgUrl="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737130542/FoodVillage/others/bg-one_n8p5bh.png"
        className="w-full h-auto"
      />
      <section className="container mx-auto px-4 flex flex-col gap-5 md:flex-row">
        <article className="w-full">
          <img
            className="w-full h-auto object-cover"
            src={img}
            alt="Image is not defined"
          />
          <h3 className="font-bold text-2xl md:text-4xl py-3">{title}</h3>
          <p className="text-sm md:text-lg">{description}</p>
        </article>
        <article className="">
          <div className="w-full p-7 font-bold  bg-stone-200 rounded-lg h-96">
            <h5 className="font-black text-lg md:text-xl">Services</h5>
            {facility?.map((fac, index) => (
              <div
                className="flex items-center justify-between p-4 text-sm bg-white rounded-md my-5 hover:bg-red-500 hover:text-white"
                key={index}
              >
                <h4>{fac.name}</h4>
                <ArrowRight />
              </div>
            ))}
          </div>
          <div className="my-5 bg-stone-200 p-5 rounded-sm">
            <h5 className="text-xl font-bold my-3">Price:${price}</h5>
            <button className="bg-red-600 font-bold rounded text-white px-3 py-2">
              CheckOut 
            </button>
          </div>
        </article>
      </section>
    </>
  );
}
