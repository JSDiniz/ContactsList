import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserReq } from "../../interface/User";

const userSchemasReq: SchemaOf<IUserReq> = yup.object().shape({
  name: yup.string().max(60).required("Nome Obrigatorio"),
  email: yup
    .string()
    .email("E-mail inválido")
    .max(60)
    .required("E-mail obrigatorioE-mail obrigatorio"),
  password: yup.string().max(120).required("Senha Obrigatória"),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha obrigatório")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
  telephone: yup
    .string()
    .max(11)
    .required("Telefone Obrigatorio")
    .matches(/^[0-9]([0-9]{8}|[0-9]{9})/, "Must be a valid phone number"),
  imageUrl: yup.string().notRequired(),
});

export { userSchemasReq };
