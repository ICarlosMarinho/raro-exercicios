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

const fazUmBigMac = (ingredientes: string[]): string => ingredientes.join(" ");

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

const pick = <T extends Record<string, unknown>>(elements: T[], ...filters: (keyof T)[]) => {
  return elements.map((element) => {
    let filtered = {} as T;

    filters.forEach((filter) => (filtered[filter] = element[filter]));

    return filtered;
  });
};

/**
 * Implementar agora um método chamado `orderBy`. Esse método deverá receber um parâmetro
 * do tipo array de objetos, e outro parâmetro, um array de strings. O método deverá retornar
 * um novo array, com os objetos ordenados de acordo com o critério do array de strings.
 */
