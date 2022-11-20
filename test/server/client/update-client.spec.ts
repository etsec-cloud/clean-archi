import { v4 } from "uuid";
import { describe, expect, it } from "vitest";
import { ClientHelper } from "../../../utils/clientHelper";
describe("Update client", async () => {
  const uuid = v4();
  const clientTest = {
    uuid: uuid,
    name: "name",
    email: "email@gmail.com",
    password: "password",
  };
  ClientHelper.clients.push(clientTest);

  const input = {
    name: "nameUpdated",
    email: "emailUpdated@gmail.com",
    password: "newPassword",
  };

  const invalidUpdatedClientWithWrongEmail = {
    name: "nameUpdated",
    email: "emailUpdated",
    password: "newPassword",
  };
  const invalidUpdatedClientWithWrongName = {
    name: "name$with^odd&characters",
    email: "email@gmail.com",
    password: "newPassword",
  };

  const invalidUpdatedClient = {
    name: "",
    email: "emailUpdated@gmail.com",
    password: "newPassword",
  };
  const invalidUpdatedClient2 = {
    name: "nameUpdated",
    email: "",
    password: "newPassword",
  };
  const invalidUpdatedClient3 = {
    name: "nameUpdated",
    email: "emailUpdated@gmail.com",
    password: "",
  };

  it("Should not update a client with an empty value", async () => {
    ClientHelper.update(uuid, invalidUpdatedClient);
    expect(ClientHelper.clients).toHaveLength(1);
    expect(ClientHelper.clients[0].name).toBe(clientTest.name);
    expect(ClientHelper.clients[0].email).toBe(clientTest.email);

    ClientHelper.update(uuid, invalidUpdatedClient2);
    expect(ClientHelper.clients).toHaveLength(1);
    expect(ClientHelper.clients[0].name).toBe(clientTest.name);
    expect(ClientHelper.clients[0].email).toBe(clientTest.email);

    ClientHelper.update(uuid, invalidUpdatedClient3);
    expect(ClientHelper.clients).toHaveLength(1);
    expect(ClientHelper.clients[0].name).toBe(clientTest.name);
    expect(ClientHelper.clients[0].email).toBe(clientTest.email);
  });

  it("Should not update a client with unmatching regex", async () => {
    ClientHelper.update(uuid, invalidUpdatedClientWithWrongEmail);
    expect(ClientHelper.clients).toHaveLength(1);
    expect(ClientHelper.clients[0].name).toBe(clientTest.name);
    expect(ClientHelper.clients[0].email).toBe(clientTest.email);

    ClientHelper.update(uuid, invalidUpdatedClientWithWrongName);
    expect(ClientHelper.clients).toHaveLength(1);
    expect(ClientHelper.clients[0].name).toBe(clientTest.name);
    expect(ClientHelper.clients[0].email).toBe(clientTest.email);
  });

  it("Should update a client", async () => {
    ClientHelper.update(uuid, input);
    expect(ClientHelper.clients).toHaveLength(1);
    expect(ClientHelper.clients[0].name).toBe(input.name);
    expect(ClientHelper.clients[0].email).toBe(input.email);
  });
});
