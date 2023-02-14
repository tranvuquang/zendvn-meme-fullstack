import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import Menu from "../Menu/Menu";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <Menu />
      <hr />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
