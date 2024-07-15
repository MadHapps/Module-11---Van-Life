import { useEffect } from "react";
import { createPortal } from "react-dom";

// Portal component for modal
export default function ModalWrapper({ children, modalRef }) {
  const modalRoot = document.getElementById("modal-root");
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  }, [el, modalRoot]);

  return createPortal(
    <div ref={modalRef} className="modal-wrapper">
      {children}
    </div>,
    el
  );
}
