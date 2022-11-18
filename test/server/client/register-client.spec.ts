import { describe, expect, it, test } from 'vitest'
import { ClientHelper } from '../../../utils/clientHelper'
import {v4} from 'uuid'

describe('Register Client', async () => {
    it('Should register a client', async () => {
        const input = {
            name: "name",
            email: "test@gmail.com",
            password : "password",
        }
        ClientHelper.register(input);
        expect(ClientHelper.clients).toHaveLength(1)
    })
})
