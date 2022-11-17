import { DocumentHelper } from '../../../utils/documentHelper'
import { beforeEach, describe, expect, it, should, test } from 'vitest'
import { v4 } from 'uuid';


describe('Delete document', async () => {
    let document:IDocument
    beforeEach(() => {
         document = {
            uuid : v4(),
            title: "title",
            fileName: "fileName",
            creationDate: new Date(),
            clientId: "1",
        };
        DocumentHelper.documents.push(document);
    })
    it("should delete a document", async () => {
        DocumentHelper.delete(DocumentHelper.documents[0].uuid);
        expect(DocumentHelper.documents).not.toContainEqual(document)
    })
});
