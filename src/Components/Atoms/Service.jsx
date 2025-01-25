import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Service({ service }) {
  const { _id, img, price, title } = service || {};

  return (
    <div className="card glass w-96 shadow-lg">
      <figure className="max-w-md max-h-48">
        <img src={img} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-black">{title}</h2>
        <p className="text-lg font-bold">${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/foods/${_id}`} className="text-red-600">
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
