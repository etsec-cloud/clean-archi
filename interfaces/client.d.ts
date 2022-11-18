interface  IClient extends IInputClient {
    uuid : string;
    documents? : IDocument[];
}

interface IInputClient extends IClientConnection {
    name: string;
}

interface IClientConnection{
    email: string;
    password: string;
}