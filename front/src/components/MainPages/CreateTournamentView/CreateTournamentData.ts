import * as yup from "yup";
import {
  IButtonForm,
  IDataConstructor,
} from "@/components/MainComponents/ReusableFormComponent/FormInterface";

export const createTournamentInitialValues = {
  name: "Pdel Arena",
  startDate: "2024-01-01",
  startTime: "08:00",
  endTime: "14:00",
  playingDays: [],
  teamsQuantity: 16,
  matchDuration: 90,
  courts: 4,
  description:
    "Un torneo de verano de verano con un premio de 5000€. ¡Prepárate para la competición!",
  tournamentImg: "",
  categorie: "Cualquier categoria",
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
        FieldName: "Lunes",
        FieldType: "checkbox",
      },
      {
        LabelText: "Martes",
        FieldName: "Martes",
        FieldType: "checkbox",
      },
      {
        LabelText: "Miercoles",
        FieldName: "Miercoles",
        FieldType: "checkbox",
      },
      {
        LabelText: "Jueves",
        FieldName: "Jueves",
        FieldType: "checkbox",
      },
      {
        LabelText: "Viernes",
        FieldName: "Viernes",
        FieldType: "checkbox",
      },
      {
        LabelText: "Sabado",
        FieldName: "Sabado",
        FieldType: "checkbox",
      },
      {
        LabelText: "Domingo",
        FieldName: "Domingo",
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
