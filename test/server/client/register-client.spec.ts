import { describe, expect, it, test } from 'vitest'
import { ClientHelper } from '../../../utils/clientHelper'
import {v4} from 'uuid'

describe('Register Client', async () => {
    const clientTest = {
        name: "",
        email: "test@gmail.com",
        password: "password"
    }
    const clientTest2 = {
        name: "name",
        email: "",
        password: "password"
    }
    const clientTest3 = {
        name: "name",
        email: "test@gmail.com",
        password: ""
    }
    it('Should not create a client with an empty value', async () => {
        ClientHelper.register(clientTest);
        ClientHelper.register(clientTest2);
        ClientHelper.register(clientTest3);
        expect(ClientHelper.clients).toHaveLength(0)
    })

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
