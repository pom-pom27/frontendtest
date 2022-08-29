import { useEffect } from "react";
import Body from "../../components/body/Body";
import ListPlace from "../../components/list-place/ListPlace";
import Navbar from "../../components/navbar/Navbar";
import appStore from "../../util/appState";
import styles from "./home-page.module.scss";
interface IHomePage {}

const HomePage = ({}: IHomePage) => {
  const fetchJson = appStore((state) => state.fetchJson);
  useEffect(() => {
    fetchJson();
  }, []);

  return (
    <div className={styles["home-page"]}>
      <Navbar />
      <ListPlace />
      <Body />
    </div>
  );
};

export default HomePage;
