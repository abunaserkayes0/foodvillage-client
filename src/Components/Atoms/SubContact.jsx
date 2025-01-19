export default function SubContact({ icon, paragraph, heading }) {
  return (
    <div className="flex items-center justify-start md:justify-start lg:justify-evenly w-full">
      <div className="w-1/5">{icon}</div>
      <div className="">
        <p className="font-semibold">{paragraph}</p>
        <h2 className="text-3xl font-black">{heading}</h2>
      </div>
    </div>
  );
}
