import React from "react";
import Header from "./Header";
import styled from "@emotion/styled";

const ProductImage = styled("img")({
  height: "60px",
  width: "60px",
});

function ProductList({ data }) {
  return (
    <>
      <Header />
      <div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => {
              return (
                <tr key={product.id} style={{ marginBottom: "10px" }}>
                  <td>
                    <ProductImage src={product.image}></ProductImage>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductList;
