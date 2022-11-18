import { v4 } from "uuid";
import { describe, expect, it } from "vitest";
import { ClientHelper } from '../../../utils/clientHelper'
import bcrypt from 'bcrypt';

describe('Reset client password', async () => {
    const clientTest = {
        uuid : v4(),
        name: "name",
        email: "email",
        password: "password"
    }
    ClientHelper.clients.push(clientTest)
    it('should reset a client password', async () => {
        ClientHelper.resetPassword(clientTest.uuid, 'newPassword');
        expect(bcrypt.compareSync('newPassword', clientTest.password)) 
    })
})