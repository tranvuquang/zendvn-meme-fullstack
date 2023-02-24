import React from "react";
import { Route, Routes } from "react-router-dom";
import UserPage from "../pages/user/UserPage";
import UserHomePage from "../pages/user";
import UserId from "../pages/user/UserId";

type Props = {};

const UserRoute = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserHomePage />}>
          <Route index element={<UserPage />} />
          <Route path=":id" element={<UserId />} />
          <Route path="/profile" element={<UserPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default UserRoute;
