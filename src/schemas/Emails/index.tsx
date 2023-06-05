import * as yup from "yup";
import { SchemaOf } from "yup";
import { IEmails } from "../../interface/Emails";

const emailsSchemas: SchemaOf<IEmails> = yup.object().shape({
  email: yup.string().email("Deve ser um e-mail válido").max(60).required(),
});

export default emailsSchemas;
