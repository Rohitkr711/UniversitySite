export default function StatsCardComp({ title, value, extra, action }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between">
      <h3 className="text-gray-600">{title}</h3>

      <p className="text-2xl md:text-3xl font-bold mt-3">{value}</p>

      {extra && <p className="text-sm text-gray-500 mt-1">{extra}</p>}

      {action && (
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
          {action}
        </button>
      )}
    </div>
  );
}
