import { DocumentHelper } from "../../../utils/documentHelper";
import { describe, expect, it } from "vitest";
import { v4 } from "uuid";

describe("Document creation", async () => {
  it("Should create a document", async () => {
    const document = {
      uuid: v4(),
      title: "title",
      fileName: "fileName",
      creationDate: new Date(),
      clientId: "1",
      type: "application/pdf",
    };
    DocumentHelper.create(document);
    expect(DocumentHelper.documents).toContainEqual(document);
  });
  it("Should not create a document", async () => {
    const document = {
      uuid: v4(),
      title: "",
      fileName: "",
      creationDate: new Date(),
      clientId: "",
      type: "",
    };
    DocumentHelper.create(document);
    expect(DocumentHelper.documents).not.toContainEqual(document);
  });
});
