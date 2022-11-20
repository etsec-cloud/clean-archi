import { ClientHelper } from "../../../utils/clientHelper";

// eslint-disable-next-line no-undef
export default defineEventHandler((event) => {
  const isDeleted = ClientHelper.delete(event.context.params.id);
  return {
    isDeleted: isDeleted,
  };
});
