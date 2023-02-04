import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Nav from "@/features/layout/components/Nav";
import styles from "./index.module.css";

const Layout = () => (
  <Fragment>
    <Nav />
    <main className={styles.main}>
      <Outlet />
    </main>
  </Fragment>
);

export default Layout;
