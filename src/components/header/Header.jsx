import Navigation from "../nav/Navigation";
import Button from "../button/Button";
import style from "./header.module.scss";
import { ReactComponent as Logo } from "../../assets/icon/logo.svg";
import { ReactComponent as LogoTelegram } from "../../assets/icon/logoTelegram.svg";

const Header = () => {
  return (
    <div className={style.header}>
      <Logo />
      <Navigation />
      <div className={style.btnAndLink}>
        <LogoTelegram />
        <Button />
      </div>
    </div>
  );
};
export default Header;
