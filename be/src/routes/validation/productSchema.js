import yup from "yup";

export const productSchema = yup.object({
  body: yup.object({
    title: yup.string().required(),
    url: yup.string().url().required(),
    urlThumbnail: yup.string().url().required(),
    price: yup.number().required()
  }),
});