import React, { useCallback, useRef } from "react";
import { ModalContainer, Overlay } from "./styles";

interface ModalProps {
  title: string,
  children: React.ReactNode,
  style?: React.CSSProperties,
  handleClose: () => void,
}

function Modal({ title, children, handleClose, ...rest }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOut = useCallback((e: any) => {
    let current = containerRef?.current;
    const node: Node = e.target as Node;
    if (current && current === node && handleClose) {
      handleClose();
    }
  }, [handleClose]);

  return (
    <Overlay
      ref={containerRef}
      onClick={handleClickOut}
    >
      <ModalContainer>
        <header>{title}</header>
        <span
          id="delete"
          className="material-icons"
          onClick={() => handleClose()}
        >
          {" "}
          close{" "}
        </span>
        {children}
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;
