import style from "./main.module.scss";
import Top from "./top/Top";
import InformationData from "../information/InformationData";
import Price from "./price/Price";
import CustomCalendar from "./calendar/DatePicker";

const Main = () => {
  return (
    <div className={style.main}>
      <Top />
      <InformationData />
      <Price />
      <CustomCalendar />
    </div>
  );
};
export default Main;
