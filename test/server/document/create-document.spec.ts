import { DocumentHelper } from "../../../utils/documentHelper";
import { describe, expect, it, test } from "vitest";
import { v4 } from "uuid";

describe("Document creation", async () => {
  it("Should create a document", async () => {
    const document = {
      uuid: v4(),
      title: "title",
      fileName: "fileName",
      creationDate: new Date(),
      clientId: "1",
    };
    DocumentHelper.create(document);
    expect(DocumentHelper.documents).toContainEqual(document);
  });
});
