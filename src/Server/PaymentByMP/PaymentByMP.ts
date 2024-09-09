import { IAallUserPayments, IProductPaymentDataReq } from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "../AxiosConfig";

async function postPaymentToMP(productData: IProductPaymentDataReq) {
  try {
    const redirectUrl = await axiosInstance.post("/mercado-pago/create_preference", productData);
    if (redirectUrl.status === 201) {
      return redirectUrl.data;
    } else {
      throw new Error("Error al realizar el pago");
    }
  } catch (error) {
    console.log(error);
  }
}

export default postPaymentToMP;

export async function getAllPayments(userID: string) {
  try {
    const response = await axiosInstance.get(`/mercado-pago/byUser/${userID}`);
    console.log(response.data);
    const data: IAallUserPayments[] = response.data;
    if (!data) {
      throw new Error("No hay pagos");
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}
