import React, { Suspense } from "react";
const CustomersAndSuppliersModule =
  process.env.NODE_ENV === "devolopment"
    ? () => null
    : React.lazy(() =>
        import("customers_and_suppliers/CustomersAndSuppliersModule").then((res) => ({
          default: res.CustomersAndSuppliersModule,
        })),
      );
const CustomersAndSuppliersPage = () => {
  return (
    // TODO: need to put a fallback component
    <Suspense>
      <CustomersAndSuppliersModule />
    </Suspense>
  );
};

export default CustomersAndSuppliersPage;
