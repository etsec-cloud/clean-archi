import { defineStore } from "pinia";
// @ts-ignore
import { IClient } from "../interfaces/client";

export const useClientsStore = defineStore("ClientsStore", {
  state: (): {
    clients: IClient[];
  } => ({
    clients: [],
  }),
  getters: {
    all: (state) => state.clients,
    getClientById: (state) => (id: string) => {
      return state.clients.find((client) => client.uuid === id);
    },
  },
  actions: {
    add(client: IClient) {
      this.clients.push(client);
    },
    delete(id: string) {
      this.clients = this.clients.filter((client) => client.uuid !== id);
    },
  },
});
