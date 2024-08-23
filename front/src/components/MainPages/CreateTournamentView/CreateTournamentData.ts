import * as yup from "yup";
import {
  IButtonForm,
  IDataConstructor,
} from "@/components/MainComponents/ReusableFormComponent/FormInterface";

export const createTournamentInitialValues = {
  name: "",
  startDate: {},
  startTime: "",
  endTime: "",
  playingDays: [],
  teamsQuantity: 16,
  matchDuration: 90,
  courts: 4,
  description: "",
  tournamentImg: "",
  categorie: "",
};

//? Validations Inpusts form
export const createTournamentSchema = yup.object({
  name: yup.string().min(2, "Too Short!").max(40, "Too Long!").defined("Required!"),
  startDate: yup.string().defined("Required!"),
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
    FieldName: "startDate",
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
    LabelText: "Cantidad de equipos",
    FieldType: "number",
    FieldName: "teamsQuantity",
    FieldPH: "16",
  },
  {
    LabelText: "Duracion media de partido en minutos",
    FieldType: "number",
    FieldName: "matchDuration",
    FieldPH: "90",
  },
  {
    LabelText: "Numero de canchas disponibles para el Torneo",
    FieldType: "number",
    FieldName: "courts",
    FieldPH: "2",
  },
  {
    LabelText: "Descripción",
    FieldType: "textarea",
    FieldName: "description",
    FieldPH: "Descripción del Torneo",
  },
  {
    LabelText: "Imagen de portada del Torneo",
    FieldType: "file",
    FieldName: "tournamentImg",
    FieldPH: "Categoria 01",
  },
  {
    LabelText: "Categoria del Torneo",
    FieldType: "text",
    FieldName: "categorie",
    FieldPH: "Categoria 01",
  },
];

export const butonsCreateTournamentForm: IButtonForm[] = [{ name: "Crear Torneo", type: "submit" }];
