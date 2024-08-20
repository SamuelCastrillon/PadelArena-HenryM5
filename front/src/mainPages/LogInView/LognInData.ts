import * as yup from "yup";
import {
  IButtonForm,
  IDataConstructorInput,
} from "@/components/MainComponents/ReusableFormComponent/FormInterface";

export const logInInitialValues = {
  email: "",
  password: "",
};

//? Validations Inpusts form
export const logInSchema = yup.object({
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
    .max(40, "Too Long!")
    .defined("Required!"),
});

//? Data constructor form
export const inputsLogIngFormValues: IDataConstructorInput[] = [
  {
    LabelText: "User Email",
    FieldType: "email",
    FieldName: "email",
    FieldPH: "example@mail.com",
  },
  {
    LabelText: "Password",
    FieldType: "password",
    FieldName: "password",
    FieldPH: "********",
  },
];

export const butonsLogInForm: IButtonForm[] = [
  { name: "Sign In", type: "submit" },
];

