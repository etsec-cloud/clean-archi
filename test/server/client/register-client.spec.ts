import { describe, expect, it } from 'vitest'
import { ClientHelper } from '../../../utils/clientHelper'

describe('Register Client', async () => {
    const invalidClientWithWrongEmail = {
        name: "nameUpdated",
        email: "emailUpdated",
        password: 'newPassword'
    }
    const invalidClientWithWrongName = {
        name: "name$with^odd&characters",
        email: "email@gmail.com",
        password: 'newPassword'
    }

    const invalidClient = {
        name: "",
        email: "test@gmail.com",
        password: "password"
    }
    const invalidClient2 = {
        name: "name",
        email: "",
        password: "password"
    }
    const invalidClient3 = {
        name: "name",
        email: "test@gmail.com",
        password: ""
    }
    it('Should not create a client with an empty value', async () => {
        ClientHelper.register(invalidClient);
        ClientHelper.register(invalidClient2);
        ClientHelper.register(invalidClient3);
        expect(ClientHelper.clients).toHaveLength(0)
    })

    it('Should not update a client with unmatching regex', async () => {
        ClientHelper.register(invalidClientWithWrongEmail);
        ClientHelper.register(invalidClientWithWrongName);
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
