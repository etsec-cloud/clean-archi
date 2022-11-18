import { v4 } from "uuid";
import { describe, expect, it } from "vitest";
import { ClientHelper } from '../../../utils/clientHelper'
describe('Update client', async () => {
    const uuid = v4()
    const clientTest = {
        uuid : uuid,
        name: "name",
        email: "email",
        password :"password",
    }
    ClientHelper.clients.push(clientTest);
    it('Should update a client', async () => {
        const input = {
            name: "nameUpdated",
            email: "emailUpdated",
            password: 'newPassword'
        }
        ClientHelper.update(uuid, input);
        expect(ClientHelper.clients).toHaveLength(1)
        expect(ClientHelper.clients[0].name).toBe(input.name)
        expect(ClientHelper.clients[0].email).toBe(input.email)
    })
});
