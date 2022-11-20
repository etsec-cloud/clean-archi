import { DocumentHelper } from "~~/utils/documentHelper";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const isCreate = DocumentHelper.create(body);
  return {
    isCreate: isCreate,
  };
});
