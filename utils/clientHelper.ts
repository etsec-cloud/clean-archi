import bcrypt from "bcrypt";
import { v4 } from "uuid";
import { DocumentHelper } from "./documentHelper";

// @ts-ignore
import { IClient, IInputClient, IClientConnection } from "../interfaces/client";
export class ClientHelper {
  static clients: IClient[] = [];
  static getAll(): IClient[] {
    return this.clients;
  }
  static getOne(uuid: string): IClient {
    const client = this.clients.find((client) => client.uuid === uuid);
    if (client) {
      client.documents = DocumentHelper.getByClient(uuid);
      return client;
    }
    throw new Error("Client not found");
  }

  static register(input: IInputClient): Boolean {
    const password = bcrypt.hashSync(input.password, 10);
    const client = {
      uuid: v4(),
      name: input.name,
      email: input.email,
      password,
    };
    if (
      !this.clients.find((client) => client.email === input.email) &&
      input.name !== "" &&
      input.email !== "" &&
      input.password !== "" &&
      input.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
      input.name.match(/^[a-z ,.'-]+$/i)
    ) {
      this.clients.push(client);
      return true;
    } else {
      return false;
    }
  }
  static login(input: IClientConnection): IClient | undefined {
    const client = this.clients.find((client) => client.email === input.email);
    if (client && bcrypt.compareSync(input.password, client.password)) {
      return client;
    } else {
      return undefined;
    }
  }
  static delete(uuid: string): Boolean {
    this.clients = this.clients.filter((client) => client.uuid !== uuid);
    return true;
  }
  static update(uuid: string, input: IInputClient): void {
    const client = this.clients.find((client) => client.uuid === uuid);
    if (
      client &&
      input.name !== "" &&
      input.email !== "" &&
      input.password !== "" &&
      input.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
      input.name.match(/^[a-z ,.'-]+$/i)
    ) {
      client.name = input.name;
      client.email = input.email;
    }
  }
  static resetPassword(uuid: string, password: string): void {
    const client = this.clients.find((client) => client.uuid === uuid);
    if (client) {
      client.password = bcrypt.hashSync(password, 10);
    }
  }
}
