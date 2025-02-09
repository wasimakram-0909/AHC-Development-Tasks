import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastConfig: ToastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
};

export const notifySuccess = (message: string) => {
  toast.success(message, toastConfig);
};

export const notifyError = (message: string) => {
  toast.error(message, toastConfig);
};

const ToastProvider = () => {
  return <ToastContainer />;
};

export default ToastProvider;
