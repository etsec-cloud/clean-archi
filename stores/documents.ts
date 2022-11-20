import { defineStore } from "pinia";
// @ts-ignore
import { IDocument } from "../interfaces/document";

export const useDocumentsStore = defineStore("DocumentStore", {
  state: (): {
    documents: IDocument[];
  } => ({
    documents: [],
  }),
  getters: {
    all: (state) => state.documents,
    getDocumentById: (state) => (id: string) => {
      return state.documents.find((document) => document.uuid === id);
    },
  },
  actions: {
    add(document: IDocument) {
      this.documents.push(document);
    },
    delete(id: string) {
      this.documents = this.documents.filter(
        (document) => document.uuid !== id
      );
    },
  },
});
