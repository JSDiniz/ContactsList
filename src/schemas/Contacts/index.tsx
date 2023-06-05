import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICreateContacts } from "../../interface/Contacts";

const contactsSchemas: SchemaOf<ICreateContacts> = yup.object().shape({
  name: yup.string().max(60).required("Campo obrigatório"),
  phone: yup
    .string()
    .max(11)
    .required("Campo obrigatório")
    .matches(
      /^[0-9]([0-9]{8}|[0-9]{9})/,
      "Deve ser um número de telefone válido"
    ),
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .max(60)
    .required("Campo obrigatório"),
  imageUrl: yup.string().notRequired(),
  githubUrl: yup.string().notRequired(),
  linkedinUrl: yup.string().notRequired(),
  portfolioUrl: yup.string().notRequired(),
});

export default contactsSchemas;
