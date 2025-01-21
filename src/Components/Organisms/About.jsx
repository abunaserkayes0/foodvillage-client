export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 items-center p-4 md:p-8">
      {/* Image Container */}
      <div className="relative flex justify-center mx-auto p-5">
        <img
          className="w-full object-cover rounded-md"
          src="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124512/FoodVillage/abouts/chickpeas_c8yewd.jpg"
          alt="A delicious chickpeas dish garnished and served beautifully."
        />
        <img
          className="absolute top-3/4 -right-1/2 transform -translate-x-1/2 -translate-y-1/2 border-8 border-white rounded-md max-w-[270px] m-5 md:max-w-md lg:max-w-lg"
          src="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737124512/FoodVillage/abouts/Humas_with_pita_tqb457.jpg"
          alt="Hummus with pita bread displayed as an appetizing dish."
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-6 pt-10 md:gap-10 lg:p-16">
        <h4 className="text-xl sm:text-2xl font-bold text-red-700">
          About Us
        </h4>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
          Discover the Taste of Authentic Culinary Delights
        </h2>
        <p className="text-sm sm:text-base lg:text-lg">
          Experience a fusion of flavors crafted with passion and care. Our
          dishes are a blend of tradition and innovation, bringing you a dining
          experience like no other.
        </p>
        <p className="text-sm sm:text-base lg:text-lg">
          From our freshly prepared ingredients to our warm hospitality, every
          detail is curated to delight your senses. Join us on this journey of
          culinary excellence.
        </p>
        <div>
          <button
            className="bg-red-600 text-white text-base p-3 sm:p-4 rounded-sm font-bold  hover:bg-red-700 transition-colors"
            aria-label="Get more information about us"
          >
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
}
