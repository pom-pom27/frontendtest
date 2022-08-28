import styles from "./home-page.module.scss";
interface IHomePage {}

const HomePage = ({}: IHomePage) => {
  return <div className={styles["home-page"]}>HomePage</div>;
};

export default HomePage;
