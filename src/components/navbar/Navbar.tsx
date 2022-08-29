import NavbarItem from "../navbar-item/NavbarItem";
import styles from "./navbar.module.scss";
interface INavbar {}
const navbarItems = [
  { title: "Browse", img: require("../../img/browse.png") },
  { title: "Suggest Attraction", img: require("../../img/singa.png") },
  { title: "Videos", img: require("../../img/video.png") },
  { title: "Blog", img: require("../../img/blog.png") },
  { title: "About", img: require("../../img/about.png") },
];

const Navbar = ({}: INavbar) => {
  return (
    <nav className={styles.navbar}>
      {navbarItems.map((item, index) => (
        <NavbarItem key={index} title={item.title} img={item.img} />
      ))}
    </nav>
  );
};

export default Navbar;
