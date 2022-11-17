export class DocumentHelper {
    static documents: IDocument[] = [];
    static getAll(): IDocument[] {
        return this.documents;
    }
    static add(document: IDocument): void {
        this.documents.push(document);
    }
    static delete(uuid: string): void {
        this.documents = this.documents.filter((doc) => doc.uuid !== uuid);
    }
    static search(title: string): IDocument[] {
        return this.documents.filter((doc) => doc.title.includes(title));
    }
}