<<<<<<< HEAD
import { describe, expect, it, test } from "vitest";
=======
import { describe, expect, it } from "vitest";
>>>>>>> abc
import { DocumentHelper } from "../../../utils/documentHelper";
import { v4 } from "uuid";

describe("Get document by Client", async () => {
  it("Should not get document if there is no client", async () => {
    const documents = DocumentHelper.getByClient("1");
    expect(documents).toStrictEqual([]);
  });
  it("Should get document if there is client", async () => {
    const document = {
      uuid: v4(),
      title: "title",
      fileName: "fileName",
      creationDate: new Date(),
      clientId: "1",
    };
    const document2 = {
      uuid: v4(),
      title: "title",
      fileName: "fileName",
      creationDate: new Date(),
      clientId: "2",
    };
    DocumentHelper.documents.push(...[document, document2]);
    const documents = DocumentHelper.getByClient("1");
    expect(documents).toStrictEqual([document]);
  });
});
