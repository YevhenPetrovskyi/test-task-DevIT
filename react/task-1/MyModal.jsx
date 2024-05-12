import { useEffect } from 'react';
import css from './MyModal.module.css';

const MyModal = ({ open, children, disableGlobalScroll = false }) => {
  useEffect(() => {
    if (open) {
      if (disableGlobalScroll) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open, disableGlobalScroll]);

  return (
    open && (
      <div className={css.overlay}>
        <div className={css.modal}>{children}</div>
      </div>
    )
  );
};

export default MyModal;
