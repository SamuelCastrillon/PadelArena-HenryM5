import { IProductPaymentDataReq } from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "../AxiosConfig";

async function postPaymentToMP(productData: IProductPaymentDataReq) {
  try {
    const redirectUrl: string = await axiosInstance.post("/mercado-pago", productData);
    if (redirectUrl) {
      return redirectUrl;
    } else {
      throw new Error("Error al realizar el pago");
    }
  } catch (error) {
    console.log(error);
  }
}

export default postPaymentToMP;
