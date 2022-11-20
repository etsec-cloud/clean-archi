import { defineStore } from "pinia";

export const useDocumentsStore = defineStore("DocumentStore", {
  state: () => ({
    documents: [],
  } as {
    documents: IDocument[];
  }),
  getters: {
    all: (state) => state.documents,
  },
  actions: {
    add(document: IDocument) {
      this.documents.push(document);
    },
  },
});
