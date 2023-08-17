import yup from "yup";

export const commentSchema = yup.object({
  body: yup.object({
    username: yup.string().required(),
    comment: yup.string().required(),
  }),
});