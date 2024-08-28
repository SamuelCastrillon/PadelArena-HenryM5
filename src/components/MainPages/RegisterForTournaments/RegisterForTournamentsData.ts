import * as yup from "yup";
import {
  IButtonForm,
  IDataConstructor,
} from "@/components/MainComponents/ReusableFormComponent/FormInterface";

export const registerTournementInitialValues = {
  teammate: "",
};

//? Validations Inpusts form
export const registerTournamentSchema = yup.object({
  teammate: yup.string().defined("Requerido!"),
});

//? Data constructor form
export const inputsRegisterTournamentFormValues: IDataConstructor[] = [
  {
    LabelText: "Teammate",
    FieldType: "select",
    FieldName: "teammate",
    FieldPH: "Teammate...",
  },
];

export const butonsRegisterTournamentForm: IButtonForm[] = [
  { name: "Inscribir Equipo", type: "submit" },
];
