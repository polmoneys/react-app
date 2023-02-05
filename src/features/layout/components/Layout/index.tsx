import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "@/config/store/hooks";
import Nav from "@/features/layout/components/Nav";
import { HelveticaNeue } from "@/system/components/Typography";
import { settingsSlice } from "../../store";
import Zoom from "../Zoom";
import Row from "@/system/components/Row";
import styles from "./index.module.css";

const Layout = () => {
  const { zoom } = useAppSelector(settingsSlice);
  return (
    <Fragment>
      <Nav />

      <main className={styles.main}>
        <Outlet />
      </main>
      <Row as="footer" gap="var(--gap-3)" className="px:lg">
        <HelveticaNeue> Current zoom level: {zoom}</HelveticaNeue>
        <Zoom />
      </Row>
    </Fragment>
  );
};

export default Layout;
