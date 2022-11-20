import { defineStore } from "pinia";
// @ts-ignore
import { IClient } from "../interfaces/client";

export const useClientsStore = defineStore("ClientStore", {
  state: (): {
    clients: IClient[];
  } => ({
    clients: [],
  }),
  getters: {
    all: (state) => state.clients,
  },
  actions: {
    add(client: IClient) {
      this.clients.push(client);
    },
  },
});
