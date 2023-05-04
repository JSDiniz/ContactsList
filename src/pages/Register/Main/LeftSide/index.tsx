import { VStack, Stack, Heading, Link, Button } from "@chakra-ui/react";
import { Input } from "../../../../components/Form";
import { FaEnvelope, FaLock, FaUser, FaMobile, FaCamera } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserReq } from "../../../../interface/User";
import { userSchemasReq } from "../../../../schemas/Register";
import { useState } from "react";
import { Api } from "../../../../services";

const LeftSide = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserReq>({
    resolver: yupResolver(userSchemasReq),
  });

  const handleSignUp = (body: IUserReq) => {
    Reflect.deleteProperty(body, "confirmPassword");

    setLoading(true);

    Api.post("/users", body)
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <VStack
      h={"full"}
      maxW={"480px"}
      w={["full", "full", "50%", "50%"]}
      style={{ margin: "0" }}
      gap={8}
    >
      <Heading as={"h1"}>Crie sua conta</Heading>

      <Stack
        as={"form"}
        w={"full"}
        style={{ margin: "0" }}
        gap={3}
        alignItems={"center"}
        onSubmit={handleSubmit(handleSignUp)}
      >
        <Input
          type={"text"}
          icon={FaUser}
          label={"Login"}
          error={errors.name}
          {...register("name")}
          placeholder={"Digite seu nome"}
        />

        <Input
          type={"email"}
          label={"Login"}
          icon={FaEnvelope}
          error={errors.email}
          {...register("email")}
          placeholder={"Digite seu login"}
        />

        <Input
          icon={FaLock}
          label={"Senha"}
          type={"password"}
          error={errors.password}
          {...register("password")}
          placeholder={"Digite sua senha"}
        />

        <Input
          icon={FaLock}
          label={"Senha"}
          type={"password"}
          error={errors.confirmPassword}
          {...register("confirmPassword")}
          placeholder={"Confirme suas senha"}
        />

        <Input
          icon={FaMobile}
          label={"Telefone"}
          type={"tel"}
          error={errors.telephone}
          {...register("telephone")}
          placeholder={"Confirme suas telefone"}
        />

        <Input
          icon={FaCamera}
          label={"Adicione foto"}
          type={"url"}
          error={errors.imageUrl}
          {...register("imageUrl")}
          placeholder={"Adicione sua foto"}
        />

        <Button variant={"toEnter"} type={"submit"}>
          Cadastrar
        </Button>
      </Stack>
    </VStack>
  );
};

export default LeftSide;
