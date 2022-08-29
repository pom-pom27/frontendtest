import appStore from "../../util/appState";
import Filter from "../atom/filter/Filter";
import ListItem from "../atom/list-item/ListItem";
import styles from "./list-place.module.scss";
interface IListPlace {}

const ListPlace = ({}: IListPlace) => {
  const mapList = appStore((state) => state.mapList);
  const selectedPlace = appStore((state) => state.selectedPlace);

  return (
    <div className={styles["list-place"]}>
      <Filter />

      {mapList.map((map) => (
        <ListItem map={map} isSelected={map === selectedPlace} />
      ))}
      {/* <ListItem title="Merlion" />
      <ListItem title="Marina Bay Sands" isHaveArrow />
      <ListItem title="Garden by the Bay" isHaveArrow />
      <ListItem title="China Town" isHaveArrow />
      <ListItem title="Asian Civilisations Museum" />
      <ListItem title="Clarke Quay" />
      <ListItem title="Fort Canning Park" />
      <ListItem title="Singapore Flyer" />
      <ListItem title="Orchard Road" /> */}
    </div>
  );
};

export default ListPlace;

/**
 * list
 * p10 25
 *
 * list item
 * p15 35
 *
 * filter
 * p40
 */
