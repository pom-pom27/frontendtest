import styles from "./navbar-item.module.scss";
interface INavbarItem {
  title: string;
  img: string;
}

const NavbarItem = ({ title, img }: INavbarItem) => {
  return (
    <div className={styles["navbar-item"]}>
      <img src={img} alt="icon" />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default NavbarItem;

<img src="" alt="" />;
