import {
  VStack,
  Image,
  Text,
  FormControl,
  Box,
  Input,
  Button,
  Link,
  useToast,
} from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { useState } from "react";
import { fazerLogun } from "./servicos/AutenticacaoServico";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const toast = useToast();

  async function Logar() {
    const result = await fazerLogun(login, senha);
    if (result) {
      const { token } = result;
      //  AsyncStorage.setItem("token", token);
      navigation.replace("Tabs");
    } else {
      toast.show({
        title: "Erro no login",
        description: "Email ou senha inválido",
        backgroundColor: "red.500",
      });
    }
  }
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent={"center"}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo>Faça login em sua conta</Titulo>
      <Box>
        <EntradaTexto
          label="Email"
          placeholder="Insira seu endereço de e-mail"
          value={login}
          onChangeText={setLogin}
        />
        <EntradaTexto
          label="Senha"
          placeholder="Insira sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </Box>

      <Botao onPress={Logar}>Entrar</Botao>

      <Link href="https://www.andresantos.dev.br" mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w={"100%"} flexDirection={"row"} justifyContent={"center"} mt={8}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text color={"blue.500"}>Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
