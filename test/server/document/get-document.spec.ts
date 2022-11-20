<<<<<<< HEAD
import { describe, expect, it, test } from "vitest";
=======
import { describe, expect, it } from "vitest";
>>>>>>> abc
import { DocumentHelper } from "../../../utils/documentHelper";
import { v4 } from "uuid";

describe("Document", async () => {
  it("Should get documents", async () => {
    const documents = DocumentHelper.getAll();
    expect(documents).toStrictEqual([]);
  });
  it("Should be an array", async () => {
    const documents = DocumentHelper.getAll();
    expect(documents).toBeInstanceOf(Array);
  });
  it("Should be a document of IDocument", async () => {
    const documentTest = {
      uuid: v4(),
      title: "title",
      fileName: "fileName",
      creationDate: new Date(),
      clientId: "1",
    };
    DocumentHelper.documents.push(documentTest);
    const documents = DocumentHelper.getAll();
    expect(documents).toContainEqual(documentTest);
  });
  it("Should get all documents", async () => {
    const documentTest1 = {
      uuid: v4(),
      title: "title1",
      fileName: "fileName1",
      creationDate: new Date(),
      clientId: "1",
    };
    const documentTest2 = {
      uuid: v4(),
      title: "title2",
      fileName: "fileName2",
      creationDate: new Date(),
      clientId: "2",
    };
    const documentTest3 = {
      uuid: v4(),
      title: "title3",
      fileName: "fileName3",
      creationDate: new Date(),
      clientId: "3",
    };
    const documents = [documentTest1, documentTest2, documentTest3];

    DocumentHelper.documents = documents;

    expect(DocumentHelper.getAll()).toStrictEqual(documents);
    expect(DocumentHelper.getAll()).toHaveLength(3);
  });
});
