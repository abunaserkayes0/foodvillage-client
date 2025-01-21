export default function Content({ miniTitle, title, paragraph }) {
  return (
    <div className="w-1/2 text-center mx-auto py-5">
      <h4 className="text-xl font-bold text-red-700 py-3">{miniTitle}</h4>
      <h2 className="text-4xl font-bold py-3">{title}</h2>
      <p className="text-base text-gray-500 py-3">{paragraph}</p>
    </div>
  );
}
