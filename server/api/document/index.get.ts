import { DocumentHelper } from "~~/utils/documentHelper";

// eslint-disable-next-line no-undef
export default defineEventHandler(() => {
  const res = DocumentHelper.getAll();
  return res;
});
