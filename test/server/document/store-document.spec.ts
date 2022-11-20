import { v4 } from "uuid";
import { describe, expect, it } from "vitest";
import { useDocumentsStore } from "./../../../stores/documents";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach } from "vitest";

describe("Test DocumentsStore", async () => {
  let documentsStore: any;
  beforeEach(() => {
    setActivePinia(createPinia());
    documentsStore = useDocumentsStore();
  });
  const uuid = v4();
  const documentTest = {
    uuid: uuid,
    title: "My document title",
    fileName: "My document file name",
    clientId: "super-hidden-client-id",
  };

  it("Should list nothing", async () => {
    expect(documentsStore.all).toEqual([]);
  });

  it("Should create a document in DocumentsStore", async () => {
    documentsStore.add(documentTest);
    expect(documentsStore.all).toHaveLength(1);
    expect(documentsStore.all[0].title).toBe(documentTest.title);
    expect(documentsStore.all[0].fileName).toBe(documentTest.fileName);
    expect(documentsStore.all[0].clientId).toBe(documentTest.clientId);
  });

  it("Should get a document by id in DocumentsStore", async () => {
    documentsStore.add(documentTest);
    expect(documentsStore.getDocumentById(documentTest.uuid)).toStrictEqual(
      documentTest
    );
  });

  it("Should delete a document in DocumentsStore", async () => {
    documentsStore.add(documentTest);
    documentsStore.delete(uuid);
    expect(documentsStore.all).toHaveLength(0);
  });
});
