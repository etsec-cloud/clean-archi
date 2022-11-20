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
  },
  actions: {
    add(document: IDocument) {
      this.documents.push(document);
    },
  },
});
