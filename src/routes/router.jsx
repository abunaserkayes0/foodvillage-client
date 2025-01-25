import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Molecules/Layout";
import Home from "../Components/Pages/Home";
import NotFound from "../Components/Atoms/NotFound";
import ServiceDetails from "../Components/Molecules/ServiceDetails";
import { url } from "../../utils/fetchurl";
import Login from "../Components/Templates/Login";
import Register from "../Components/Templates/Register";
import AddService from "../Components/Templates/AddService";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

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
        element: (
          <PrivetRoute>
            <ServiceDetails />
          </PrivetRoute>
        ),
        loader: ({ params: { id } }) => fetch(`${url}/foods/${id}`),
      },
      {
        path: "/addService",
        element: (
          <PrivetRoute>
            {" "}
            <AddService />{" "}
          </PrivetRoute>
        ),
        loader: () => fetch(`${url}/foods`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
