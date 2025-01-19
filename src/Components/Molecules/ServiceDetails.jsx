import { useLoaderData, useLocation } from "react-router-dom";
import BreadcrumbBanner from "../Atoms/BreadcrumbBanner";

export default function ServiceDetails() {
  const { pathname } = useLocation();
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <BreadcrumbBanner
        currentPath={pathname}
        title="Hello Venom"
        imgUrl="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737130542/FoodVillage/others/bg-one_n8p5bh.png"
      />
    </>
  );
}
