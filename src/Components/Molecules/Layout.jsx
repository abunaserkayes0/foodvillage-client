import { Outlet } from "react-router-dom";
import Navbar from "../Organisms/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
