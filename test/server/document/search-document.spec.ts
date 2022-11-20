import { DocumentHelper } from '../../../utils/documentHelper'
import { beforeEach, describe, expect, it, should, test } from 'vitest'
import { v4 } from 'uuid';

describe('Search Document', async () => {
    beforeEach(() => {
        const document= {
            uuid : v4(),
            title: "title",
            fileName: "fileName",
            creationDate: new Date(),
            clientId: "1",
            type: "text/pdf",
        };
        DocumentHelper.documents.push(document);
    })
    it('Should search a document', async () => {
        const documents = DocumentHelper.search("title");
        expect(documents).toContainEqual(DocumentHelper.documents[0])
    })
});
