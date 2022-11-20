import { DocumentHelper } from "../../../utils/documentHelper";

export default defineEventHandler((event) => {
  const res = DocumentHelper.getOne(event.context.params.id);
  return {
    res,
  };
});
