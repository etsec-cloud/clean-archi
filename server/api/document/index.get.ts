import { DocumentHelper } from "~~/utils/documentHelper";

export default defineEventHandler(() => {
  const res = DocumentHelper.getAll();
  return res;
});
