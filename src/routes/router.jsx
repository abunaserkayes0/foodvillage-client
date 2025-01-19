import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Molecules/Layout";
import Home from "../Components/Pages/Home";
import NotFound from "../Components/Atoms/NotFound";
import ServiceDetails from "../Components/Molecules/ServiceDetails";
import { url } from "../../utils/fetchurl";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/foods/:id",
        element: <ServiceDetails />,
        loader: ({ params: { id } }) => fetch(`${url}/foods/${id}`),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
