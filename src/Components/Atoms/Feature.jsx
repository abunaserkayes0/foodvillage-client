export default function Feature({ icon, title }) {
  return (
    <>
      <div className="card w-50 bg-base-100 border-2 shadow-xl hover:bg-orange-600 hover:text-white hover:transition-all">
        <figure className="px-10 pt-10">{icon}</figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </>
  );
}
