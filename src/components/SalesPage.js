import React from "react";
import FilterSearch from "./FilterSearch";
import ProductComp from "./ProductComp";
import SalesAdding from "./SalesAdding";

function SalesPage() {
  return (
    <main>
      <FilterSearch />
      <ProductComp />
      <SalesAdding />
    </main>
  );
}

export default SalesPage;
