import { ClientHelper } from "~~/utils/clientHelper";

export default defineEventHandler(() => {
  const res = ClientHelper.getAll();
  return res;
});
