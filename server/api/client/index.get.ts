import { ClientHelper } from "~~/utils/clientHelper";

// eslint-disable-next-line no-undef
export default defineEventHandler(() => {
  const res = ClientHelper.getAll();
  return res;
});
