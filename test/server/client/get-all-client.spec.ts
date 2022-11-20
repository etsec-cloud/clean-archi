import { describe, expect, it, test } from "vitest";
import { ClientHelper } from "../../../utils/clientHelper";
import { v4 } from "uuid";

describe("Client", async () => {
  it("Should get clients", async () => {
    const clients = ClientHelper.getAll();
    expect(clients).toStrictEqual([]);
  });
  it("Should be an array", async () => {
    const clients = ClientHelper.getAll();
    expect(clients).toBeInstanceOf(Array);
  });
  it("Should be conform to IClient", async () => {
    const clientTest = {
      uuid: v4(),
      name: "name",
      email: "test@gmail.com",
      password: "password",
    };
    ClientHelper.clients.push(clientTest);
    const clients = ClientHelper.getAll();
    expect(clients).toContainEqual(clientTest);
  });
});
