// eslint-disable-next-line no-unused-vars
interface IClient extends IInputClient {
  uuid: string;
  // eslint-disable-next-line no-undef
  documents?: IDocument[];
}

interface IInputClient extends IClientConnection {
  name: string;
}

interface IClientConnection {
  email: string;
  password: string;
}
