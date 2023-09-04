import React, { useState } from "react";

const ProductList = () => {
  const [minPrice, setMinPrice] = useState(""); // Minimum price filter
  const [maxPrice, setMaxPrice] = useState(""); // Maximum price filter

  // Sample product data (replace with your actual data)
  const products = [
    { id: 1, name: "Product 1", price: 50 },
    { id: 2, name: "Product 2", price: 75 },
    { id: 3, name: "Product 3", price: 100 },
    { id: 4, name: "Product 4", price: 120 },
    { id: 5, name: "Product 5", price: 200 },
  ];

  const filteredProducts = products.filter((product) => {
    const productPrice = parseFloat(product.price);

    // Check if the product price is within the selected price range
    return (
      (minPrice === "" || productPrice >= parseFloat(minPrice)) &&
      (maxPrice === "" || productPrice <= parseFloat(maxPrice))
    );
  });

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
