import * as yup from "yup";
import {
  IButtonForm,
  IDataConstructor,
} from "@/components/MainComponents/ReusableFormComponent/FormInterface";
import { getAllUsers } from "@/Server/Users/getUsers";
import { IUserLogin } from "@/interfaces/RequestInterfaces";

export const registerTournementInitialValues = {
  teammate: "",
};

//? Validations Inpusts form
export const registerTournamentSchema = yup.object({
  teammate: yup.string().defined("Requerido!"),
});

export async function getDataToContructFormRegisterTournament(): Promise<IDataConstructor[]> {
  const usersDataSelect: IUserLogin[] = await getAllUsers();

  const usersToSelect = usersDataSelect.map((user: IUserLogin) => {
    return { value: user.id, name: user.name + " " + user.lastName };
  });

  //? Data constructor form
  const inputsRegisterTournamentFormValues: IDataConstructor[] = [
    {
      LabelText: "Companero de equipo",
      FieldType: "select",
      FieldName: "teammate",
      selectOptions: usersToSelect,
    },
  ];
  return inputsRegisterTournamentFormValues;
}
export const butonsRegisterTournamentForm: IButtonForm[] = [
  { name: "Inscribir Equipo", type: "submit" },
];
