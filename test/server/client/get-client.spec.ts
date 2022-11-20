import { describe, expect, it } from "vitest";
import { ClientHelper } from "../../../utils/clientHelper";
import { DocumentHelper } from "../../../utils/documentHelper";
import { v4 } from "uuid";

describe("Get client", async () => {
  const clientTest = {
    uuid: v4(),
    name: "name",
    email: "email",
    password: "password",
  };
  const clientWithDocument = {
    uuid: v4(),
    name: "nameWithDocument",
    email: "emailWithDocument",
    password: "password",
  };
  const documentTest = {
    uuid: v4(),
    title: "title",
    fileName: "fileName",
    creationDate: new Date(),
    clientId: clientWithDocument.uuid,
    type: "text/pdf",
  };
  DocumentHelper.documents.push(documentTest);

  it("Should get a client", async () => {
    ClientHelper.clients.push(clientTest);
    const client = ClientHelper.getOne(clientTest.uuid);
    expect(client).toStrictEqual(clientTest);
  });
  it("Should be an array empty if no document", async () => {
    const client = ClientHelper.getOne(clientTest.uuid);
    expect(client.documents).toStrictEqual([]);
  });
  it("Should be an array with document", async () => {
    ClientHelper.clients.push(clientWithDocument);
    const client = ClientHelper.getOne(clientWithDocument.uuid);
    expect(client.documents).toStrictEqual([documentTest]);
  });
});
