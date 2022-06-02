import React from "react";
import { Modal } from "react-native";

const ModalComponent = ({ children, visible, onRequestClose, animationType }) => {
    return (
        <Modal
        animationType={animationType}
        visible={visible}
        onRequestClose={() => onRequestClose()}
      >
        {children}
      </Modal>
    )
};

export default ModalComponent;