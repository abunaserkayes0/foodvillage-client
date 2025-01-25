export default function BreadcrumbBanner({ title, currentPath, imgUrl }) {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center rounded-lg h-64 relative my-10"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="bg-black/50 inset-0 absolute rounded-lg"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h2 className="text-center text-white text-3xl font-bold">{title}</h2>
        {currentPath && (
          <span className="text-white text-xl font-bold bg-red-600 p-2">
            {currentPath}
          </span>
        )}
      </div>
    </div>
  );
}
