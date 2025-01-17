import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Molecules/Layout";
import Home from "../Components/Pages/Home";
import NotFound from "../Components/Atoms/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
