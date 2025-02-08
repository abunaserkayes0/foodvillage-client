import { useEffect, useState } from "react";
import MyService from "../Atoms/MyService";
import { url } from "../../../utils/fetchurl";
import useAuth from "../../hooks/useAuth";
import Loading from "../Atoms/Loading";

export default function MyServices() {
  const [myServices, setMyServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {
    user: { email },
  } = useAuth();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${url}/my-food?email=${email}`, {
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
  }, [email]);

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
            {myServices?.map((myService) => (
              <MyService key={myService._id} myService={myService} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <>{content}</>;
}
