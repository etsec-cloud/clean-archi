import { ClientHelper } from "~~/utils/clientHelper"

export default defineEventHandler  ( async (event) => {
    const body = await readBody(event)
    const isRegistered =  ClientHelper.register(body)
    return { isRegistered: isRegistered }
})