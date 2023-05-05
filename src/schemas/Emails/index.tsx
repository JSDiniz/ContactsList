import * as yup from "yup";
import { SchemaOf } from "yup";
import { IEmails } from "../../interface/Emails";

const emailsSchemas: SchemaOf<IEmails> = yup.object().shape({
  email: yup.string().email("Must be a valid email").max(60).required(),
});

export default emailsSchemas;
