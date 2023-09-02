import React from "react";
import Avatar from "react-avatar-edit";
import ReactDom from "react-dom";
import styles from "./AvatarModal.module.scss";

const AvatarModal = (props) => {
  return ReactDom.createPortal(
    <div className={styles["modal-wrapper"]}>
      <Avatar
        width={props.width}
        height={props.height}
        onCrop={props.onCrop}
        onClose={props.onClose}
        src={props.src}
      />
    </div>,
    document.getElementById("portal"),
  );
};

export default AvatarModal;
