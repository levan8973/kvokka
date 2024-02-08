import navigationData from "./navigationData.json";
import style from "./navigation.module.scss";

const Navigation = () => {
  return (
    <ul className={style}>
      {navigationData.map((value, i) => {
        return <li key={i}>{value.title}</li>;
      })}
    </ul>
  );
};
export default Navigation;
