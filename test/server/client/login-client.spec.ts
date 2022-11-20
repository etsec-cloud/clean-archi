import { describe, expect, it } from "vitest";
import { ClientHelper } from "../../../utils/clientHelper";
import { v4 } from "uuid";
import bcrypt from "bcrypt";

describe("Login Client", async () => {
  const password = bcrypt.hashSync("password", 10);
  const input = {
    email: "email",
    password: "password",
  };
  const clientTest = {
    uuid: v4(),
    name: "name",
    email: "email",
    password: password,
  };
  ClientHelper.clients.push(clientTest);
  it("Should connect a client", async () => {
    expect(ClientHelper.login(input)).toBe(clientTest);
  });
});
