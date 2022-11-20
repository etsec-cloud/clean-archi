import { DocumentHelper } from "../../../utils/documentHelper";
<<<<<<< HEAD
import { describe, expect, it, test } from "vitest";
=======
import { describe, expect, it } from "vitest";
>>>>>>> abc
import { v4 } from "uuid";

describe("Document creation", async () => {
  it("Should create a document", async () => {
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
    DocumentHelper.create(document);
    expect(DocumentHelper.documents).toContainEqual(document);
  });
<<<<<<< HEAD
=======
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
>>>>>>> abc
});
