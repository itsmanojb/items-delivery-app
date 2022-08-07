import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { hide as hideModal } from '../store/modal';
import DiscountInfo from './home/DiscountInfo';

const Modal = () => {
  const { type, data } = useAppSelector((state) => state.modal.modalData);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(hideModal());
  };

  const output =
    type === 'discount' ? (
      <DiscountInfo data={data} onClose={handleClose} />
    ) : null;

  return (
    <div className="fixed inset-0 h-screen w-screen z-50 overflow-hidden p-4">
      <div
        className="absolute z-10 inset-0 bg-black bg-opacity-[.65]"
        onClick={handleClose}
      />
      <div className="_modal">{output}</div>
    </div>
  );
};

export default Modal;
