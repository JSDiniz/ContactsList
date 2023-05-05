import * as yup from "yup";
import { SchemaOf } from "yup";
import { Ilogin } from "../../interface/Login";

export const loginSchema: SchemaOf<Ilogin> = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup.string().required("Senha obrigatório"),
});
