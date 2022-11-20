import { ClientHelper } from "~~/utils/clientHelper";

// eslint-disable-next-line no-undef
export default defineEventHandler(async (event) => {
  // eslint-disable-next-line no-undef
  const body = await readBody(event);
  const uuid = event.context.params.id;
  const isLogged = ClientHelper.update(uuid, body);
  return {
    isUpdated: isLogged,
  };
});
