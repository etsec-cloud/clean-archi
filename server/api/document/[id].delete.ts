import { DocumentHelper } from "../../../utils/documentHelper";

// eslint-disable-next-line no-undef
export default defineEventHandler((event) => {
  const res = DocumentHelper.getOne(event.context.params.id);
  DocumentHelper.deleteFile(res.fileName);
  const isDeleted = DocumentHelper.delete(event.context.params.id);
  return {
    isDeleted: isDeleted,
  };
});
