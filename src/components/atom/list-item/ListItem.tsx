import clsx from "clsx";
import appStore from "../../../util/appState";
import { MapObject } from "../map-view/MapView";
import styles from "./list-item.module.scss";
interface IListItem {
  map: MapObject;
  isSelected?: boolean;
}

const ListItem = ({ map, isSelected }: IListItem) => {
  const setSelectedPlace = appStore((state) => state.setSelectedPlace);
  const setIsShow = appStore((state) => state.setIsShow);
  return (
    <div
      onClick={() => {
        setSelectedPlace(map);
        setIsShow(true);
      }}
      className={clsx(styles["list-item"], isSelected && styles.selected)}
    >
      {map.name}
    </div>
  );
};

export default ListItem;
