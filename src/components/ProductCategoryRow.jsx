import React from "react";

function ProductCategoryRow({ category }) {
  // Displays the category as a separate row
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

export default ProductCategoryRow;
