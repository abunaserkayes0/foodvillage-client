import { StarIcon } from "lucide-react";

export default function Product({ img, title, paragraph, rating }) {
  return (
    <div className="card glass w-96 flex items-center justify-center shadow-lg">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{paragraph}</p>
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, index) => {
            return (
              <span
                key={index}
                className={`${
                  index < rating ? "text-red-400" : "text-gray-300"
                }`}
              >
                <StarIcon strokeWidth={6} />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
