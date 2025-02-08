import { useEffect, useState } from "react";
import Loading from "../Atoms/Loading";
import { url } from "../../../utils/fetchurl";
import { Link } from "react-router-dom";

export default function ViewServices() {
  const [myServices, setMyServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${url}/food`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        setMyServices(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (myServices.length === 0) {
    content = <p>There is no services available.</p>;
  } else {
    content = (
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {myServices?.map((myService) => {
              const { _id, img, title, price, email } = myService || {};
              return (
                <tr key={_id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">{email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold">
                    {price}
                    <br />
                  </td>
                  <th>
                    <Link
                      to={`/serviceConfirmation/${_id}`}
                      className="btn btn-ghost btn-xs"
                    >
                      View
                    </Link>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return <>{content}</>;
}
