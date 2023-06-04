import React, { Suspense } from "react";
const CustomersAndSuppliersModule = React.lazy(() =>
  import("customers_and_suppliers/CustomersAndSuppliersModule"),
);

const CustomersAndSuppliers = () => {
  return (
    <Suspense>
      <CustomersAndSuppliersModule />
    </Suspense>
  );
};

export default CustomersAndSuppliers;
