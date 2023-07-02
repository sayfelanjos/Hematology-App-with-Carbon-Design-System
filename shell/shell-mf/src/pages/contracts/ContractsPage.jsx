import React, { Suspense } from "react";
import { error } from "@babel/eslint-parser/lib/convert";
const ContractsModule =
  process.env.NODE_ENV === "devolopment"
    ? () => null
    : React.lazy(() =>
        import("contracts/ContractsModule")
          .then((res) => ({
            default: res.ContractsModule,
          }))
          .catch((error) => {
            throw "Can not import ContractsModule";
          }),
      );
const ContractsPage = () => {
  return (
    // TODO: need to put a fallback component
    <Suspense>
      <ContractsModule />
    </Suspense>
  );
};

export default ContractsPage;
