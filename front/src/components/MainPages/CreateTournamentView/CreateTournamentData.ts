import * as yup from "yup";
import {
  IButtonForm,
  IDataConstructor,
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
  date: yup.string().min(8, "Too Short!").max(40, "Too Long!").defined("Required!"),
});

//? Data constructor form
export const inputsCreateTournamentFormValues: IDataConstructor[] = [
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
    LabelText: "Dias de Juego",
    FieldType: "checkboxContainer",
    FieldName: "playingDays",
    containerCheckBox: [
      {
        LabelText: "Lunes",
        FieldName: "lunes",
        FieldType: "checkbox",
      },
      {
        LabelText: "Martes",
        FieldName: "martes",
        FieldType: "checkbox",
      },
      {
        LabelText: "Miercoles",
        FieldName: "miercoles",
        FieldType: "checkbox",
      },
      {
        LabelText: "Jueves",
        FieldName: "jueves",
        FieldType: "checkbox",
      },
      {
        LabelText: "Viernes",
        FieldName: "viernes",
        FieldType: "checkbox",
      },
      {
        LabelText: "Sabado",
        FieldName: "sabado",
        FieldType: "checkbox",
      },
      {
        LabelText: "Domingo",
        FieldName: "domingo",
        FieldType: "checkbox",
      },
    ],
  },
  {
    LabelText: "Descripción",
    FieldType: "textarea",
    FieldName: "description",
    FieldPH: "Descripción del Torneo",
  },
];

export const butonsCreateTournamentForm: IButtonForm[] = [{ name: "Crear Torneo", type: "submit" }];
