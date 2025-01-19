import Content from "../Atoms/Content";
import Product from "../Atoms/Product";

export default function Products() {
  return (
    <>
      <Content
        miniTitle="Popular Products"
        title="Browse Our Products"
        paragraph="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      "
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-3">
        <Product
          img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124517/FoodVillage/products/Spicy_Indian_Rice_fwr42e.jpg"
          title="Spicy_Indian_Rice"
          paragraph="Displaying the dishes offered by the restaurant, including detailed descriptions, prices, and images."
          rating="4"
        />
        <Product
          img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124516/FoodVillage/products/two_breakfast_plates_ignljr.jpg"
          title="Two_Breakfast_plates"
          paragraph="Allowing customers to order food directly through the website for pickup or delivery. This can include product categories such as appetizers, main courses, desserts, and drinks."
          rating="3"
        />
        <Product
          img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124515/FoodVillage/products/Shawarma_wew7yn.jpg"
          title="Shawarma"
          paragraph="Selling digital or physical gift cards that customers can use or share with others."
          rating="2"
        />
        <Product
          img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124515/FoodVillage/products/Grilled_sausages_ohpvu4.jpg"
          title="Grilled_sausages"
          paragraph="Offering branded products like mugs, T-shirts, aprons, or other restaurant-themed items"
          rating="5"
        />
        <Product
          img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124515/FoodVillage/products/Delicious_Indian_Chicken_ex8cfw.jpg"
          title="Delicious_Indian_Chicken"
          paragraph=" Providing pre-packaged meal kits, snacks, or specialty items that can be delivered to customers on a recurring basis."
          rating="1"
        />
        <Product
          img="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124514/FoodVillage/products/Sausages_on_Grill_gowwvb.jpg"
          title="Sausages_on_Grill"
          paragraph="If the restaurant specializes in unique cuisines, it can sell ingredients, sauces, or spices used in its dishes."
          rating="4"
        />
      </div>
    </>
  );
}
