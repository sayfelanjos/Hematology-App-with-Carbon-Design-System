import React, { useState } from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";
import AvatarModal from "../avatar-modal/AvatarModal";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import ProfileAvatarIcon from "../../assets/icons/ProfileAvatarIcon";

const Card = () => {
  const [src] = useState("");
  const [preview, setPreview] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setPreview(preview);
    setIsOpen(!isOpen);
  };
  const onCrop = (view) => {
    setPreview(view);
  };
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <div className={styles["card"]}>
      <div className={styles["card__three-dots-button-box"]}>
        <button className={styles["card__three-dots-button"]}></button>
      </div>
      <div className={styles["card__avatar"]}>
        {isOpen && (
          <AvatarModal width={400} height={400} onCrop={onCrop} onClose={onClose} src={src} />
        )}
        <div className={styles["card__avatar-image-box"]} onClick={onClick}>
          {(preview && (
            <img className={styles["card__avatar-image"]} src={preview} alt="User Photo" />
          )) || <ProfileAvatarIcon className={styles["card__avatar-profile"]} />}
        </div>
        <h6 className={styles["card__avatar-name"]}>Julia Cara de Sapato</h6>
        <p className={styles["card__avatar-designation"]}>Full Stack Developer</p>
        <div className={styles["card__social-medias-icons"]}>
          <TwitterIcon />
          <LinkedinIcon />
          <InstagramIcon />
        </div>
      </div>
      <nav className={styles["card__menu"]}>
        <div className={styles["card__menu-item"]}>
          <Link className={styles["card__menu-item-link"]} to={"/profile/personal"}>
            Informações Pessoais
          </Link>
        </div>
        <div className={styles["card__menu-item"]}>
          <Link className={styles["card__menu-item-link"]} to={"/profile/password"}>
            Mudar Senha
          </Link>
        </div>
        <div className={styles["card__menu-item"]}>
          <Link className={styles["card__menu-item-link"]} to={"/profile/settings"}>
            Configurações
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Card;
