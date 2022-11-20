import { v4 } from "uuid";
import { describe, expect, it } from "vitest";
import { ClientHelper } from "../../../utils/clientHelper";

describe("Delete client", async () => {
  const uuid = v4();
  it("Should delete a client", async () => {
    const clientTest = {
      uuid: uuid,
      name: "name",
      email: "test@gmail.com",
      password: "password",
    };
    ClientHelper.clients.push(clientTest);
    ClientHelper.delete(uuid);
    expect(ClientHelper.clients).toHaveLength(0);
  });
  it("Should not crash server if deleting a non existant client", async () => {
    ClientHelper.delete(uuid);
    expect(ClientHelper.clients).toHaveLength(0);
  });
});
