import { DocumentHelper } from "../../../utils/documentHelper";

export default defineEventHandler((event) => {
  const isDeleted = DocumentHelper.delete(event.context.params.id);
  return {
    isDeleted: isDeleted,
  };
});
