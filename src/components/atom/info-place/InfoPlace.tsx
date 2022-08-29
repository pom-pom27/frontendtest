import { ReactComponent as Globe } from "../../../img/globe.svg";
import { ReactComponent as Pin } from "../../../img/pin.svg";
import { MapObject } from "../map-view/MapView";
import styles from "./info-place.module.scss";
interface IInfoPlace {
  map: MapObject;
}

const InfoPlace = ({ map }: IInfoPlace) => {
  return (
    <div className={styles["info-place"]}>
      <img src={map.img} alt="place" />
      <div className={styles.name}>{map.name}</div>
      <div className={styles.desc}>
        <p>{map.desc}</p>

        <div className={styles.info}>
          <Pin /> {map.address}
        </div>
        <div className={styles.info}>
          <Globe /> {map.website}
        </div>
      </div>
    </div>
  );
};

export default InfoPlace;
