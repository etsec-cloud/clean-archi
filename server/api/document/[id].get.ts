import { DocumentHelper } from "../../../utils/documentHelper";

// eslint-disable-next-line no-undef
export default defineEventHandler((event) => {
  const res = DocumentHelper.getOne(event.context.params.id);
  return {
    res,
  };
});
