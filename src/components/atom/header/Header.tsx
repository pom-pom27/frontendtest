import appStore from "../../../util/appState";
import styles from "./header.module.scss";
interface IHeader {}
const icons = [
  { title: "setting", img: require("../../../img/setting.png") },
  { title: "question", img: require("../../../img/quest.png") },
  { title: "close", img: require("../../../img/close.png"), isClickable: true },
];

const Header = ({}: IHeader) => {
  const setIsShow = appStore((state) => state.setIsShow);
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE
      </div>
      <div className={styles.icons}>
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon.img}
            alt="icon"
            onClick={() => {
              if (!icon.isClickable) {
                return;
              }
              setIsShow(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
