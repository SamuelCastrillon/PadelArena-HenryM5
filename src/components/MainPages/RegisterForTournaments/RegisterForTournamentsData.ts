import * as yup from "yup";
import {
  IButtonForm,
  IDataConstructor,
} from "@/components/MainComponents/ReusableFormComponent/FormInterface";
import { getAllUsers } from "@/Server/Users/getUsers";
import { IUserLogin } from "@/interfaces/RequestInterfaces";

//? Validations Inpusts form
export const registerTournamentSchema = yup.object({
  teammate: yup.string().defined("Requerido!"),
});

export async function getDataToContructFormRegisterTournament() {
  const usersDataSelect: IUserLogin[] = await getAllUsers();

  const usersToSelect = usersDataSelect.map((user: IUserLogin) => {
    return { value: user.id, name: user.name + " " + user.lastName };
  });

  const registerTournementInitialValues = {
    teammate: usersDataSelect[0].id,
  };

  //? Data constructor form
  const inputsRegisterTournamentFormValues: IDataConstructor[] = [
    {
      LabelText: "Compañero de equipo",
      FieldType: "select",
      FieldName: "teammate",
      selectOptions: usersToSelect,
    },
  ];
  return {
    inputsRegisterTournamentFormValues,
    registerTournementInitialValues,
  };
}
export const butonsRegisterTournamentForm: IButtonForm[] = [
  { name: "Inscribir Equipo", type: "submit" },
];
