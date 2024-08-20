import {
  IButtonForm,
  IDataConstructorInput,
} from "@/components/MainComponents/ReusableFormComponent/FormInterface";
import * as yup from "yup";

export const signInInitialValues = {
  name: "",
  email: "",
  password: "",
  address: "",
  phone: "",
};

//? Validations Inpusts form
export const registerSchema = yup.object({

  name: yup
    .string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .defined("Required!"),
  email: yup
    .string()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Invalid email"
    )
    .defined("Required!"),
  password: yup
    .string()
    .min(8, "Too Short!")
    .max(12, "Too Long!")
    .defined("Required!"),
  address: yup.string().defined("Required!"),
  phone: yup
    .string()
    .min(9, "Invalid Number!")
    .max(12, "Invalid Number!")
    .defined("Required!"),

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

  {
    LabelText: "User Name",
    FieldType: "text",
    FieldName: "name",
    FieldPH: "UserName...",
  },
  {
    LabelText: "Email",
    FieldType: "email",
    FieldName: "email",
    FieldPH: "example@mail.com",
  },
  {
    LabelText: "Password (8-12 Characters)",

  { LabelText: "Nombre", FieldType: "text", FieldName: "name", FieldPH: "UserName..." },
  { LabelText: "Apellido", FieldType: "text", FieldName: "lastName", FieldPH: "UserName..." },
  { LabelText: "Email", FieldType: "email", FieldName: "email", FieldPH: "example@mail.com" },
  { LabelText: "Direccion", FieldType: "address", FieldName: "address", FieldPH: "address" },
  {
    LabelText: "Contraseña (8-12 Characters)",

    FieldType: "password",
    FieldName: "password",
    FieldPH: "********",
  },

  {
    LabelText: "Address",
    FieldType: "address",
    FieldName: "address",
    FieldPH: "address",
  },
  {
    LabelText: "Phone",
    FieldType: "number",
    FieldName: "phone",
    FieldPH: "000 000 0000",
  },
];

export const butonsSignInForm: IButtonForm[] = [
  { name: "Create Account", type: "submit" },
];

  { LabelText: "País", FieldType: "text", FieldName: "country", FieldPH: "Argentina" },
  { LabelText: "Ciudad", FieldType: "text", FieldName: "city", FieldPH: "Buenos Aires" },

  { LabelText: "Phone", FieldType: "number", FieldName: "phone", FieldPH: "000 000 0000" },
];


