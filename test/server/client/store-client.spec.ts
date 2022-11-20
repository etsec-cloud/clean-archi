import { v4 } from "uuid";
import { describe, expect, it } from "vitest";
import { useClientsStore } from "./../../../stores/clients";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach } from "vitest";

describe("Test ClientsStore", async () => {
  let clientsStore: any;
  beforeEach(() => {
    setActivePinia(createPinia());
    clientsStore = useClientsStore();
  });
  const uuid = v4();
  const clientTest = {
    uuid: uuid,
    name: "name",
    email: "email@gmail.com",
    password: "password",
  };

  it("Should list nothing", async () => {
    expect(clientsStore.all).toEqual([]);
  });

  it("Should create a client in ClientsStore", async () => {
    clientsStore.add(clientTest);
    expect(clientsStore.all).toHaveLength(1);
    expect(clientsStore.all[0].name).toBe(clientTest.name);
    expect(clientsStore.all[0].email).toBe(clientTest.email);
  });

  it("Should get a client by id in ClientsStore", async () => {
    clientsStore.add(clientTest);
    expect(clientsStore.getClientById(clientTest.uuid)).toStrictEqual(
      clientTest
    );
  });

  it("Should delete a client in ClientsStore", async () => {
    clientsStore.add(clientTest);
    clientsStore.delete(uuid);
    expect(clientsStore.all).toHaveLength(0);
  });
});
