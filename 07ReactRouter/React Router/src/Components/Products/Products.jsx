import React from "react";
import {Link, NavLink} from 'react-router-dom'

export default function Products() {
  const products = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    image: `https://picsum.photos/300/300?random=${i + 1}`,
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold text-center">
                {product.name}
              </h2>

              <Link to={`/products/${product.id}`}className="mt-5 w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition">
                View Product
              </Link >
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

