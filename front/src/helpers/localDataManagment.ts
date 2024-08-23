import { IUserLoginRes } from "@/interfaces/RequestInterfaces";

const userKeyDefiny = "dataCurrentUser";
export function saveCurrentUser(newCurrentUser: IUserLoginRes): void {
  const dataToSreing = JSON.stringify(newCurrentUser);
  localStorage.setItem(userKeyDefiny, dataToSreing);
}

export function getCurrentUser(): IUserLoginRes | null {
  const getData = localStorage.getItem(userKeyDefiny);
  if (getData) return JSON.parse(getData);
  else {
    console.error("Undefine Key");
    return null;
  }
}
