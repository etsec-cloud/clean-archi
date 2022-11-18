export class DocumentHelper {
    static documents: IDocument[] = [];
    static getAll(): IDocument[] {
        return this.documents;
    }
    static getOne(uuid:string): IDocument {
        const document = this.documents.find(documents => documents.uuid === uuid);
        if (document) {
            return document;
        }
        throw new Error('Client not found');
    }
    static create(document: IDocument): void {
        this.documents.push(document);
    }
    static delete(uuid: string): Boolean {
        this.documents = this.documents.filter((doc) => doc.uuid !== uuid);
        return true
    }
    static search(title: string): IDocument[] {
        return this.documents.filter((doc) => doc.title.includes(title));
    }
}