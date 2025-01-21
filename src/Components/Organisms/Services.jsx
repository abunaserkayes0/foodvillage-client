import { useEffect, useState } from "react";
import { url } from "../../../utils/fetchurl";
import Service from "../Atoms/Service";
import { ArrowRight } from "lucide-react";
import Content from "../Atoms/Content";

export default function Services() {
  const [services, setServices] = useState([]);
  const [allServices, setAllServices] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/foods`);
        const result = await res.json();
        setServices(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const someServices = allServices ? services : services.slice(0, 6);

  return (
    <div>
      <Content
        miniTitle="Services"
        title="Our Services Area"
        paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          odio, esse ex neque voluptates error nihil quasi ducimus non saepe
          nostrum adipisci dolorem, officia nulla minima quisquam possimus qui
          a!"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
        {someServices?.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <div>
        {!allServices && services.length > 6 && (
          <div className="flex items-center justify-center p-6 w-full my-4">
            <button
              className="btn bg-red-600  font-bold text-white hover:outline hover:outline-white hover:bg-red-700"
              onClick={() => setAllServices(true)}
            >
              More Services <ArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
