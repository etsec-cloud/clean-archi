import { v4 } from "uuid";
// @ts-ignore
import { IDocument } from "../interfaces/document";
import * as fs from "fs";

export class DocumentHelper {
  static documents: IDocument[] = [];
  static getAll(): IDocument[] {
    return this.documents;
  }
  static getOne(uuid: string): IDocument {
    const document = this.documents.find(
      (documents) => documents.uuid === uuid
    );
    if (document) {
      return document;
    }
    throw new Error("Document not found");
  }
  static create(document: IDocument): void {
    if (
      document.fileName !== "" &&
      document.title !== "" &&
      document.clientId !== "" &&
      document.creationDate !== undefined
    ) {
      document.uuid = v4();
      this.documents.push(document);
    }
  }
  static uploadDocument(fields: any, files: any): IDocument {
    fs.copyFileSync(files.file.filepath, `./public/${fields.fileName}.pdf`);
  }
  static deleteFile(fileName: string): Boolean {
    fs.rmSync(`./public/${fileName}.pdf`);
    return true;
  }
  static delete(uuid: string): Boolean {
    this.documents = this.documents.filter((doc) => doc.uuid !== uuid);
    return true;
  }
  static search(title: string): IDocument[] {
    return this.documents.filter((doc) => doc.title.includes(title));
  }
  static getByClient(clientId: string): IDocument[] {
    return this.documents.filter((doc) => doc.clientId === clientId);
  }
}
