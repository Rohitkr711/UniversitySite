export function Card({ title }) {
  return (
    <div className="border border-gray-200 rounded-lg px-3 py-2 hover:bg-blue-50 cursor-pointer transition">
      {title}
    </div>
  );
}
