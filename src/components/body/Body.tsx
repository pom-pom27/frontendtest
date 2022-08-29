import Header from "../atom/header/Header";
import MapView from "../atom/map-view/MapView";
import styles from "./body.module.scss";
interface IBody {}

const Body = ({}: IBody) => {
  return (
    <main className={styles.body}>
      <Header />
      <MapView />
    </main>
  );
};

export default Body;
