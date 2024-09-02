import {
  IPayment,
  IProductPaymentDataReq,
} from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "../AxiosConfig";

async function postPaymentToMP(productData: IProductPaymentDataReq) {
  try {
    const redirectUrl = await axiosInstance.post(
      "/mercado-pago/create_preference",
      productData
    );
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

//hecho por Pili, para dashboardAdmin -> Falta ejecutar en el back
// export const getAllPayments = async (paymentData: IPayment) => {
//   try {
//     const response = await axiosInstance.get(
//       "/mercado-pago/preferences",
//       { paymentData }
//     );
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
