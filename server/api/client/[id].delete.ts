import { ClientHelper } from '../../../utils/clientHelper'

export default defineEventHandler ((event) => {
    const isDeleted = ClientHelper.delete(event.context.params.id)
    return { 
        isDeleted : isDeleted
    }
})