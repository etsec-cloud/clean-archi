import { describe, expect, it, test } from 'vitest'
import { DocumentHelper } from '../../../utils/documentHelper'
import {v4} from 'uuid'

describe('Document', async () => {
    it('Should get documents', async () => {
        const documents = DocumentHelper.getAll()
        expect(documents).toStrictEqual([])
    })
    it('Should be an array', async () => {
        const documents = DocumentHelper.getAll()
        expect(documents).toBeInstanceOf(Array)
    })
    it('Should be a document of IDocument', async () => {
        const documentTest = {
            uuid : v4(),
            title: "title",
            fileName: "fileName",
            creationDate: new Date(),
            clientId: "1",
        }
        DocumentHelper.documents.push(documentTest);
        const documents = DocumentHelper.getAll()
        expect(documents).toContainEqual(documentTest)
    })
})
