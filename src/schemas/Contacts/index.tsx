import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICreateContacts } from "../../interface/Contacts";

const contactsSchemas: SchemaOf<ICreateContacts> = yup.object().shape({
  name: yup.string().max(60).required("Campo obrigatório"),
  telephone: yup
    .string()
    .max(11)
    .required("Campo obrigatório")
    .matches(/^[0-9]([0-9]{8}|[0-9]{9})/, "Must be a valid phone number"),
  email: yup
    .string()
    .email("Must be a valid email")
    .max(60)
    .required("Campo obrigatório"),
  imageUrl: yup.string().notRequired(),
});

export default contactsSchemas;
