import { DocumentHelper } from "~~/utils/documentHelper";

import formidable from "formidable";
// eslint-disable-next-line no-undef
export default defineEventHandler(async (event) => {
  const form = formidable({ multiples: true });
  // eslint-disable-next-line no-undef
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(event.req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }
      // @ts-ignore
      if (files.file.mimetype !== "application/pdf") {
        reject("File type is not pdf");
        return;
      }
      console.log(files);
      resolve({ fields, files });
    });
  });
  DocumentHelper.uploadDocument(fields, files);
  const body = {
    ...fields,
    creationDate: new Date(),
  };
  const isCreate = DocumentHelper.create(body);
  return {
    isCreate: isCreate,
  };
});
