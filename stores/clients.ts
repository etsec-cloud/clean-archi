import { defineStore } from 'pinia'

export const useClientsStore = defineStore('ClientStore', {
  state: () => ({
    clients: [],
  } as {
    clients: Array<IClient>
  }),
  getters: {
    all: (state) => state.clients
  },
  actions: {
    add(client: IClient) {
      this.clients.push(client);
    }
  }
})
