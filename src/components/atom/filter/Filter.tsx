import ArrowDown from "../../../img/arrowdown.png";
import styles from "./filter.module.scss";
interface IFilter {}

const Filter = ({}: IFilter) => {
  return (
    <div className={styles.filter}>
      <div>
        Filter by favorite
        <img src={ArrowDown} alt="arrow down" />
      </div>
    </div>
  );
};

export default Filter;
