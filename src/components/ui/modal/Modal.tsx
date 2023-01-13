import closeIcon from "../../../assets/close.svg";
import { useState } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

export enum Positions {
  TopRight = "top-right",
  BottomRight = "bottom-right",
  TopLeft = "top-left",
  BottomLeft = "bottom-left",
  MiddleCenter = "middle-center",
}

interface ModalProps {
  children: React.ReactNode;
  position?: Positions;
  className?: string;
  buttonText?: string;
}
const Modal: React.FC<ModalProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // Avoid empty spaces
  const containerClass = `modal-container${props.position ? " " + props.position : ""}`;

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const domNode = useOnClickOutside(() => {
    setIsOpen(false);
  });
  return (
    <>
      <button onClick={toggleModal}> {props.buttonText ? props.buttonText : "Open Modal"} </button>
      {isOpen && (
        <section className={containerClass}>
          <div ref={domNode} className={`modal-content${props.className ? " " + props.className : ""}`}>
            <button className="close-modal-button" onClick={toggleModal}>
              <img src={closeIcon} alt="close modal icon" width={23} height={23} />
            </button>
            {props.children}
          </div>
        </section>
      )}
    </>
  );
};

export default Modal;
