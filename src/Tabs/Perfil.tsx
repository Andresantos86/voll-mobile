import { Text, VStack, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../componentes/Titulo";
import { NavigationProps } from "../@types/navigation";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Paciente } from "../interfaces/Paciente";
import { pegarDadosPaciente } from "../servicos/PacienteServico";
import { Botao } from "../componentes/Botao";

export default function Perfil({ navigation }: NavigationProps<"Perfil">) {
  const [dadosPaciente, setDadosPaciente] = useState({} as Paciente);

  useEffect(() => {
    async function dadosPaciente() {
      const pacienteId = await AsyncStorage.getItem("pacienteId");
      if (!pacienteId) return null;

      const resultado = await pegarDadosPaciente(pacienteId);
      if (resultado) {
        setDadosPaciente(resultado);
        console.log(resultado);
      }
    }
    dadosPaciente();
  }, []);

  function deslogar() {
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("pacienteId");
    navigation.replace("Login");
  }

  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="blue.500">Meu Perfil</Titulo>

        <Avatar size="xl" source={{ uri: dadosPaciente?.imagem }} mt={5} />

        <Titulo color="blue.500">Informações pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>
          {dadosPaciente.nome}
        </Titulo>
        <Text>{dadosPaciente?.email}</Text>
        <Text>{dadosPaciente?.endereco?.estado}</Text>

        <Divider mt={5} />

        <Titulo color="blue.500" mb={1}>
          Planos de saúde
        </Titulo>
        {dadosPaciente?.planosSaude?.map((plano, index) => (
          <Text key={index}>{plano}</Text>
        ))}

        <Botao onPress={deslogar}>Deslogar</Botao>
      </VStack>
    </ScrollView>
  );
}
