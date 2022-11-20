import { ClientHelper } from "~~/utils/clientHelper";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const uuid = event.context.params.id;
  const isLogged = ClientHelper.update(uuid, body);
  return {
    isUpdated: isLogged,
  };
});
