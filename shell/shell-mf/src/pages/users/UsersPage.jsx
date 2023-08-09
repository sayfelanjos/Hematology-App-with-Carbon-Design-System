import React, { Suspense } from "react";
const UsersModule =
  process.env.NODE_ENV === "devolopment"
    ? () => null
    : React.lazy(() =>
        import("orders/UserModule").then((res) => ({
          default: res.UsersModule,
        })),
      );
const UsersPage = () => {
  return (
    // TODO: need to put fallback component
    <Suspense>
      <UsersModule onNavigate={() => console.log("The container Navigation in UsersPage!!!")} />
    </Suspense>
  );
};

export default UsersPage;
