import { useEffect, useState } from "react";
import MyService from "../Atoms/MyService";
// import { url } from "../../../utils/fetchurl";
import useAuth from "../../hooks/useAuth";
import Loading from "../Atoms/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function MyServices() {
  const [myServices, setMyServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {
    user: { email },
  } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    setIsLoading(true);
    axiosSecure
      .get(`/my-food?email=${email}`)
      .then((result) => {
        setMyServices(result.data);
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
