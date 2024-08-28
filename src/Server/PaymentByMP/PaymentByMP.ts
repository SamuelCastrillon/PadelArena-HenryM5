import { IProductPaymentDataReq } from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "../AxiosConfig";

async function postPaymentToMP(productData: IProductPaymentDataReq) {
  try {
    const redirectUrl: string = await axiosInstance.post("/mercado-pago", productData);
    return redirectUrl;
  } catch (error) {
    console.log(error);
  }
}

export default postPaymentToMP;
