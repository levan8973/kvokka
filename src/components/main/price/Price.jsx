import Button from "../../button/Button";
import style from "./price.module.scss";

const Price = () => {
  return (
    <div className={style.price}>
      <div className={style.header}>
        <h2>Цены</h2>
        <p>
          Независимо от выбранного вами времени пребывания, вы можете
          воспользоваться всеми услугами коворкинга
        </p>
      </div>
      <div className={style.items}>
        <div className={style.block}>
          <div className={style.content}>
            <div className={style.block_top}>
              <span>Один час</span>
              <h3>
                200 <span>₽</span>
              </h3>
            </div>
            <div className={style.block_button}>
              <p>
                У вас короткая встреча?<span> Нужно срочно</span> доделать
                правки? Приходите на несколько часов и сосредоточьтесь на
                главном!
              </p>
              <Button additionalStyles={style.btn} />
            </div>
          </div>
        </div>

        <div className={style.block}>
          <div className={style.content}>
            <div className={style.block_top}>
              <span>За месяц</span>
              <h3>
                5000 <span>₽</span>
              </h3>
            </div>
            <div className={style.block_button}>
              <p>
                Надоело искать место, где можно
                <span> сфокусироваться на работе?</span> Вам нужно постоянное
                рабочее пространство? Не вопрос! Этот тариф для вас!
              </p>
              <Button additionalStyles={style.btn} />
            </div>
          </div>
        </div>

        <div className={style.block}>
          <div className={style.content}>
            <div className={style.block_top}>
              <span>Один день</span>
              <h3>
                800 <span>₽</span>
              </h3>
            </div>
            <div className={style.block_button}>
              <p>
                Рабочий день-много или мало? Достаточно!
                <span> Для разноплановых задач</span>, не требующих постоянного
                контроля и присутствия!
              </p>
              <Button additionalStyles={style.btn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Price;
