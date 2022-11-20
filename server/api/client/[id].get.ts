import { ClientHelper } from "../../../utils/clientHelper";

// eslint-disable-next-line no-undef
export default defineEventHandler((event) => {
  const res = ClientHelper.getOne(event.context.params.id);
  return {
    res,
  };
});
