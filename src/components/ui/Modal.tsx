import type { ReactNode } from "react";
import { Icons } from "../icons/Icons";
import { IconButton } from "./IconButton";
import "./Modal.css";

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
}

export function Modal({ open, title, onClose, children, footer }: ModalProps) {
  if (!open) return null;

  return (
    <div className="nw-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="nw-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nw-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header>
          <h2 id="nw-modal-title">{title}</h2>
          <IconButton label="Close dialog" onClick={onClose}>
            <Icons.close />
          </IconButton>
        </header>
        <div className="nw-modal-body">{children}</div>
        {footer ? <footer>{footer}</footer> : null}
      </div>
    </div>
  );
}
