import Button from "../../button/Button";
import style from "./top.module.scss";
import Work from "../../../assets/img/Work.png";

const Top = () => {
  return (
    <div className={style.top}>
      <div className={style.content}>
        <h2>Уютный коворкинг в центре Курска</h2>
        <p>
          Рабочее местов open space,в исторической части Курска и в пяти минутах
          от остановки общественного транспорта.
        </p>
        <Button />
      </div>
      <img src={Work} alt="img Work" />
    </div>
  );
};
export default Top;
