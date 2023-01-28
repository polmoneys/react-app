import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Nav from "@/system/components/Nav";

const Layout = () => {
  return (
    <Fragment>
      <Nav />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
