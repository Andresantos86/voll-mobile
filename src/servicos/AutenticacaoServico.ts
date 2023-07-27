import api from "./api";

export async function fazerLogun(login: string, senha: string) {
  try {
    const resultado = await api.post("/login", { login, senha });
    return resultado.data;
  } catch (error) {
    console.log(error);
  }
}
