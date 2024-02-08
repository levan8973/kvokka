import Information from "./Information";
import style from "./informationData.module.scss";

import { ReactComponent as Service } from "../../assets/icon/service.svg";
import { ReactComponent as Cofee } from "../../assets/icon/cofee.svg";
import { ReactComponent as Internet } from "../../assets/icon/internet.svg";
import { ReactComponent as WiFi } from "../../assets/icon/wi-fi.svg";
import { ReactComponent as Person } from "../../assets/icon/person.svg";
import { ReactComponent as PC } from "../../assets/icon/pc-check.svg";
import { ReactComponent as Tabel } from "../../assets/icon/table.svg";
import { ReactComponent as Bus } from "../../assets/icon/bus.svg";
import { ReactComponent as Volume } from "../../assets/icon/volume-mute.svg";
import { ReactComponent as Percent } from "../../assets/icon/percent.svg";

const InformationData = () => {
  const dataInformation = [
    {
      imgSVG: <Service />,
      text: "Удобный сервис онлайн бронирования",
    },
    {
      imgSVG: <Cofee />,
      text: "Оборудованная зона отдыха (чай, кофе)",
    },
    {
      imgSVG: <Internet />,
      text: "Высокоскоростной интернет и пользование принтером",
    },
    {
      imgSVG: <WiFi />,
      text: "Безлимитный Wi-Fi",
    },
    {
      imgSVG: <Person />,
      text: "Подойдёт для фрилансеров и команд, любящих простоту и комфорт",
    },
    {
      imgSVG: <PC />,
      text: "Полностью оборудованное рабочее место со стационарным ПК",
    },
    {
      imgSVG: <Tabel />,
      text: "Одно нефиксированное рабочее место в open space",
    },
    {
      imgSVG: <Bus />,
      text: "5 минут до остановки общественного транспорта",
    },
    {
      imgSVG: <Volume />,
      text: "Окна выходят на тихую улицу — посторонний шум не отвлечёт от главного",
    },
    {
      imgSVG: <Percent />,
      text: "Скидка на аренду переговорных комнат",
    },
  ];
  return (
    <div className={style.information}>
      <h2>Наш коворкинг</h2>
      <div className={style.cards}>
        {dataInformation.map((content, index) => {
          return (
            <Information
              key={index}
              imgSVG={content.imgSVG}
              text={content.text}
            />
          );
        })}
      </div>
    </div>
  );
};
export default InformationData;
