import yup from "yup";

export const videoSchema = yup.object({
  body: yup.object({
    title: yup.string().required(),
    url: yup.string().url().required(),
    urlThumbnail: yup.string().url().required(),
    tag: yup.string().required(),
    owner: yup.string().required()
  }),
});