import {
  IButtonForm,
  IDataConstructorInput,
} from "@/components/MainComponents/ReusableFormComponent/FormInterface";
import * as yup from "yup";

export const signInInitialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
  country: "",
  city: "",
  phone: "",
};

//? Validations Inpusts form
export const registerSchema = yup.object({
  name: yup.string().min(2, "Too Short!").max(40, "Too Long!").defined("Required!"),
  lastName: yup.string().min(2, "Too Short!").max(40, "Too Long!").defined("Required!"),
  email: yup
    .string()
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Invalid email")
    .defined("Required!"),
  address: yup.string().defined("Required!"),
  password: yup.string().min(8, "Too Short!").max(12, "Too Long!").defined("Required!"),
  country: yup.string().defined("Required!"),
  city: yup.string().defined("Required!"),
  phone: yup.string().min(9, "Invalid Number!").max(12, "Invalid Number!").defined("Required!"),
});

//? Data constructor form
export const inputsFormValues: IDataConstructorInput[] = [

  { LabelText: "Nombre", FieldType: "text", FieldName: "name", FieldPH: "UserName..." },
  { LabelText: "Aapellido", FieldType: "text", FieldName: "lastName", FieldPH: "UserName..." },
  { LabelText: "Email", FieldType: "email", FieldName: "email", FieldPH: "example@mail.com" },
  { LabelText: "Direccion", FieldType: "address", FieldName: "address", FieldPH: "address" },
  {
    LabelText: "Contraseña (8-12 Characters)",
    FieldType: "password",
    FieldName: "password",
    FieldPH: "********",
  },
  { LabelText: "País", FieldType: "text", FieldName: "country", FieldPH: "Argentina" },
  { LabelText: "Ciudad", FieldType: "text", FieldName: "city", FieldPH: "Buenos Aires" },
  { LabelText: "Phone", FieldType: "number", FieldName: "phone", FieldPH: "000 000 0000" },
];
