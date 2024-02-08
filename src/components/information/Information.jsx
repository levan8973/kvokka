import style from "./information.module.scss";

const Information = ({ imgSVG, text }) => {
  return (
    <div className={style.card}>
      {imgSVG}
      <p>{text}</p>
    </div>
  );
};

export default Information;
