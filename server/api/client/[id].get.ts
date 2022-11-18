import { ClientHelper } from '../../../utils/clientHelper'

export default defineEventHandler ((event) => {
    const res = ClientHelper.getOne(event.context.params.id)
    return { 
        res
    }
})