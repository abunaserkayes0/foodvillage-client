import { ArrowRight } from "lucide-react";

export default function Service({ service }) {
  const { img, price, title } = service || {};

  return (
    <div className="card glass w-96 shadow-lg">
      <figure>
        <img src={img} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-black">{title}</h2>
        <p className="text-lg font-bold">${price}</p>
        <div className="card-actions justify-end">
          <button className="text-orange-600">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
