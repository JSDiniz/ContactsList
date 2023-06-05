import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPhones } from "../../interface/Phones";

const phonesSchemas: SchemaOf<IPhones> = yup.object().shape({
  phone: yup
    .string()
    .min(9)
    .max(20)
    .required("Campo obrigatório")
    .matches(
      /^[0-9]([0-9]{8}|[0-9]{9})/,
      "Deve ser um número de telefone válido"
    ),
});

export default phonesSchemas;
