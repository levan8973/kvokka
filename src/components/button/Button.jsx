import style from "./Button.module.scss";

const Button = ({ additionalStyles }) => {
  return (
    <button className={`${style.btn} ${additionalStyles}`}>
      Забронировать
    </button>
  );
};
export default Button;
