// src/app/components/Card.js
export default function Card({ title, value, icon }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xs hover:scale-105 transition-transform">
        <div className="flex items-center mb-4">
          {icon && <div className="mr-2 text-3xl">{icon}</div>}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    );
  }
  