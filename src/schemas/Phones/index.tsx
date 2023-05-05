import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPhones } from "../../interface/Phones";

const phonesSchemas: SchemaOf<IPhones> = yup.object().shape({
  telephone: yup
    .string()
    .max(11)
    .required("Campo obrigatório")
    .matches(/^[0-9]([0-9]{8}|[0-9]{9})/, "Must be a valid phone number"),
});

export default phonesSchemas;
