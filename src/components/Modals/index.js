import "./modal-styles.css";

import { useCallback, useEffect } from "react";

import Button from "../Buttons/BaseButton";
import useModal from "../../hooks/useModal";
import { ReactComponent as CloseIcon } from "../../assets/svg/cross.svg";

const ModalBase = ({ children, modalTitle, className }) => {
  const { closeModal } = useModal();

  const handleEscKey = useCallback((event) => {
    if (event.key === "Escape") return closeModal();
  });

  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <div className={`modal-overlay ${className && className}`}>
      <div className="modal-container">
        <div className={`modal`}>
          <div className={`modal-header`}>
            {modalTitle && <h2 className="modal-heading">{modalTitle}</h2>}
            <Button onClick={closeModal} Icon={CloseIcon} />
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default ModalBase;
