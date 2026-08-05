import React from "react";
import { useLoaderData } from "react-router-dom";

function ProductDetails() {
  const product = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-8">

        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-w-md rounded-xl shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">

          <span className="text-sm font-semibold text-orange-600 uppercase">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold mt-2">
            {product.title}
          </h1>

          <p className="text-gray-600 mt-4">
            {product.description}
          </p>

          <div className="mt-6 space-y-3">

            <h2 className="text-2xl font-bold text-green-600">
              ₹ {product.price}
            </h2>

            <p className="text-lg">
              ⭐ <span className="font-semibold">{product.rating}</span>
            </p>

            <p className="text-lg">
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>

            <p className="text-lg">
              <span className="font-semibold">Stock:</span> {product.stock}
            </p>

          </div>

          <button
            className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            Buy Now
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;