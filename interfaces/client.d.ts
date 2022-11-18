interface  IClient extends IInputClient {
    uuid : string;
}

interface IInputClient extends IClientConnection {
    name: string;
}

interface IClientConnection{
    email: string;
    password: string;
}