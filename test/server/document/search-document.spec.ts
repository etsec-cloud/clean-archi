import { DocumentHelper } from "../../../utils/documentHelper";
<<<<<<< HEAD
import { beforeEach, describe, expect, it, should, test } from "vitest";
=======
import { beforeEach, describe, expect, it } from "vitest";
>>>>>>> abc
import { v4 } from "uuid";

describe("Search Document", async () => {
  beforeEach(() => {
    const document = {
      uuid: v4(),
      title: "title",
      fileName: "fileName",
      creationDate: new Date(),
      clientId: "1",
<<<<<<< HEAD
=======
      type: "text/pdf",
>>>>>>> abc
    };
    DocumentHelper.documents.push(document);
  });
  it("Should search a document", async () => {
    const documents = DocumentHelper.search("title");
    expect(documents).toContainEqual(DocumentHelper.documents[0]);
  });
});
