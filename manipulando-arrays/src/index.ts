import { getNotEquals } from "./utils";

/**
 * Abaixo você tem a lista de todos os ingredientes necessários para fazer um Hambúrguer.
 * Utilizando o reduce, como você pode fazer para unir todos os itens do array em uma única string?
 */
const ingredientes = [
  "2 hambúrgueres",
  "alface",
  "queijo",
  "molho especial",
  "cebola",
  "picles",
  "pão com gergelim"
];

const fazUmBigMac = (ingredientes: string[]): string => {
  return ingredientes.reduce((acc: string, curr: string) => `${acc} ${curr}`);
};

/**
 * A lista de meses abaixo está incompleta (e incorreta!).
 * Utilize os métodos do array para adicionar os meses faltantes.
 * como adicionar os meses de "fev", "mai", "ago", "nov" nas posições corretas?
 */
const meses = ["jan", "mar", "mar", "abr", "jun", "jul", "set", "out", "dez"];

meses.splice(1, 1, "fev");
meses.splice(4, 0, "mai");
meses.splice(7, 0, "ago");
meses.splice(10, 0, "nov");

/**
 * Implementar o método de `pick` que receba um parâmetro do tipo array de objetos,
 * e outro parâmetro do tipo array de strings. Este método deverá retornar todos os itens
 * do array original, porém, mantendo somente os atributos com os nomes passados no segundo atributo.
 * Importante: o array original deve ser mantido intacto.
 */
const pick = <T extends Record<string, unknown>>(items: T[], ...filters: (keyof T)[]) => {
  return items.map((item) => {
    let filtered = {} as T;

    filters.forEach((filter) => (filtered[filter] = item[filter]));

    return filtered;
  });
};

/**
 * Implementar agora um método chamado `orderBy`. Esse método deverá receber um parâmetro
 * do tipo array de objetos, e outro parâmetro, um array de strings. O método deverá retornar
 * um novo array, com os objetos ordenados de acordo com o critério do array de strings.
 */
const orderBy = <T extends Record<string, unknown>>(items: T[], ...keys: (keyof T)[]) => {
  const copy = [...items];

  return copy.sort((itemA, itemB) => {
    const key = getNotEquals(itemA, itemB, keys);

    if (!key) {
      return 0;
    }

    if (typeof itemA[key] === "string") {
      return (itemA[key] as string).localeCompare(itemB[key] as string);
    }

    return (itemA[key] as number) - (itemB[key] as number);
  });
};

/**
 * Pede-se que, utilizando os métodos de adicionar e remover os itens nos arrays,
 * sejam implementados os movimentos corretos para cada estrutura.
 */
const fila = <T>() => {
  const fila: T[] = [];

  const adicionar = (elemento: T) => {
    fila.push(elemento);
  };

  const remover = () => {
    return fila.shift();
  };

  return { adicionar, remover };
};

const pilha = <T>() => {
  const pilha: T[] = [];

  const adicionar = (elemento: T) => {
    pilha.push(elemento);
  };

  const remover = () => {
    return pilha.pop();
  };

  return { adicionar, remover };
};

/**
 * Dada a lista de usuarios do nosso sistema, manipule o array, para gerar em duas estruturas
 * separadas a coleção de usuários que estão ativos e a coleção de usuários que estão inativos.
 */
const usuarios = [
  { nome: "Diego", idade: 23, ativo: true },
  { nome: "Gabriel", idade: 15, ativo: false },
  { nome: "Lucas", idade: 30, ativo: false }
];

const usuariosAtivos = usuarios.filter(({ ativo }) => ativo);
const usuariosInativos = usuarios.filter(({ ativo }) => !ativo);
