import { toast } from "react-toastify";

declare global {
  interface Window {
    toast: typeof toast;
  }
  interface AxiosBaseResponseType {
    code: number;
    message: string;
    data: string;
  }
}
