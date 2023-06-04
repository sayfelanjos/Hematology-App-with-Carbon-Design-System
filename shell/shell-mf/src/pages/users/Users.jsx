import React, { Suspense } from "react";
const UsersModule = React.lazy(() => import("users/UsersModule"));

const Users = () => {
  return (
    <Suspense>
      <UsersModule onNavigate={() => console.log("The container Navigation in Users!!!")} />
    </Suspense>
  );
};

export default Users;
