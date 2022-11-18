import { ClientHelper } from "~~/utils/clientHelper"

export default defineEventHandler  ( async (event) => {
    const body = await readBody(event)
    const isLogged = ClientHelper.login(body)
    return {
        isLogged : isLogged
    }
})