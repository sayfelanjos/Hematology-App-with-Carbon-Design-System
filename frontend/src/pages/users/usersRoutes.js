import PersonalInformationForm from "./components/personal-information-form/PersonalInformationForm";
import PasswordForm from "./components/password-form/PasswordForm";
import SettingsForm from "./components/settings-form/SettingsForm";
import React from "react";
import UsersTable from "./components/list/UsersTable";
import Profile from "./components/profile/Profile";

export const usersRoutes = {
  path: "users",
  children: [
    {
      path: "",
      element: <UsersTable />,
    },
    {
      path: "list",
      element: <UsersTable />,
    },
    {
      path: "profile",
      element: <Profile />,
      children: [
        {
          path: "",
          element: <PersonalInformationForm />,
        },
        {
          path: "personal",
          element: <PersonalInformationForm />,
        },
        {
          path: "password",
          element: <PasswordForm />,
        },
        {
          path: "settings",
          element: <SettingsForm />,
        },
      ],
    },
  ],
};
