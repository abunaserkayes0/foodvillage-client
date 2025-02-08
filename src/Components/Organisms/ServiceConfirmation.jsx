import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { url } from "../../../utils/fetchurl";
import Loading from "../Atoms/Loading";
import { toast } from "react-toastify";

export default function ServiceConfirmation() {
  const foods = useLoaderData();
  const [allFoods, setAllFoods] = useState(foods);
  const [isLoading, setIsLoading] = useState(false);

  const handelChangeStatus = (e, id) => {
    setIsLoading(true);
    const data = {
      status: e.target.value,
    };

    setIsLoading(true);
    fetch(`${url}/food/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.modifiedCount > 0) {
          toast.success("Modified SuccessFully", {
            position: "bottom-right",
          });
          setIsLoading(false);
        }
      })
      .catch((error) => {
        if (error) {
          toast.error("Something Went Wrong", {
            position: "bottom-right",
          });
          setIsLoading(false);
        }
      });
    setAllFoods(foods);
  };

  return (
    <div className="overflow-x-auto">
      {isLoading && <Loading />}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {allFoods.length === 0 ? (
            <p>There is no items found </p>
          ) : (
            allFoods.map(({_id, img, title, email, status }) => (
              <tr key={_id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12" key={_id}>
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
                  price
                  <br />
                </td>
                <th>
                  <select
                    onChange={(e) => handelChangeStatus(e, _id)}
                    defaultValue={status || ""}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option value="" disabled>
                      Please Choose One?
                    </option>
                    <option value="Accept">Accept</option>
                    <option value="Reject">Reject</option>
                  </select>
                </th>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
