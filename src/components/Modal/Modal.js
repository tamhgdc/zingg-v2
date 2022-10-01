import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  return createPortal(<div id="modal">{children}</div>, document.body);
};

export default Modal;
