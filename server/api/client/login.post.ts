import { ClientHelper } from "~~/utils/clientHelper";

// eslint-disable-next-line no-undef
export default defineEventHandler(async (event) => {
  // eslint-disable-next-line no-undef
  const body = await readBody(event);
  const isLogged = ClientHelper.login(body);
  return {
    isLogged: isLogged,
  };
});
