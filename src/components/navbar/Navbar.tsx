import styles from "./navbar.module.scss";
interface INavbar {}

const Navbar = ({}: INavbar) => {
  return <nav className={styles.navbar}>Navbar</nav>;
};

export default Navbar;
