import * as yup from "yup";
import {
  IButtonForm,
  IDataConstructorInput,
} from "@/components/MainComponents/ReusableFormComponent/FormInterface";

export const createTournamentInitialValues = {
  name: "",
  date: "",
  startTime: "",
  endTime: "",
  categorie: "",
  description: "",
};

//? Validations Inpusts form
export const createTournamentSchema = yup.object({
  name: yup.string().min(2, "Too Short!").max(40, "Too Long!").defined("Required!"),
  password: yup.string().min(8, "Too Short!").max(40, "Too Long!").defined("Required!"),
});

//? Data constructor form
export const inputsCreateTournamentFormValues: IDataConstructorInput[] = [
  {
    LabelText: "Nombre Del Torneo",
    FieldType: "text",
    FieldName: "name",
    FieldPH: "Padel Arena",
  },
  {
    LabelText: "Fecha de Inicio",
    FieldType: "date",
    FieldName: "date",
    FieldPH: "01/01/2025",
  },
  {
    LabelText: "Hora de Inicio",
    FieldType: "time",
    FieldName: "startTime",
    FieldPH: "00:00",
  },
  {
    LabelText: "Hora de Conclusion",
    FieldType: "time",
    FieldName: "endTime",
    FieldPH: "00:00",
  },
  {
    LabelText: "Categoria del Torneo",
    FieldType: "text",
    FieldName: "categorie",
    FieldPH: "Categoria 01",
  },
  {
    LabelText: "Descripción",
    FieldType: "text",
    FieldName: "description",
    FieldPH: "Descripción del Torneo",
  },
];

export const butonsCreateTournamentForm: IButtonForm[] = [{ name: "Crear Torneo", type: "submit" }];
