import { describe, expect, it, test } from 'vitest'
import { ClientHelper } from '../../../utils/clientHelper'
import { v4 } from 'uuid'

describe('Get client', async () => {
    const clientTest = {
        uuid : v4(),
        name: "name",
        email: "email",
        password :"password",
    }
    it('Should get a client', async () => {
        ClientHelper.clients.push(clientTest);
        const client = ClientHelper.getOne(clientTest.uuid);
        expect(client).toStrictEqual(clientTest)
    });
});
