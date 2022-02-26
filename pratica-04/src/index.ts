import { sleep, geraIntervaloAleatorio } from "./utils";

/**
 * Utilizando o enunciado e código do exercício "as rosas não falam",
 * presentes no bloco de exercícios anterior, você deve implementar a mesma solução,
 * porém utilizando promises e funções async/await (os dois formatos).
 */

const asRosasNaoFalamPromise = () => {
  return sleep(geraIntervaloAleatorio())
    .then(() => {
      console.log("Queixo-me às rosas");

      return sleep(geraIntervaloAleatorio());
    })
    .then(() => {
      console.log("Mas que bobagem");

      return sleep(geraIntervaloAleatorio());
    })
    .then(() => {
      console.log("As rosas não falam");

      return sleep(geraIntervaloAleatorio());
    })
    .then(() => {
      console.log("Simplesmente as rosas exalam");

      return sleep(geraIntervaloAleatorio());
    })
    .then(() => {
      console.log("O perfume que roubam de ti, ai");

      return sleep(geraIntervaloAleatorio());
    })
    .catch(console.log);
};

const asRosasNaoFalamAsync = async () => {
  console.log("Queixo-me às rosas");

  await sleep(geraIntervaloAleatorio());

  console.log("Mas que bobagem");

  await sleep(geraIntervaloAleatorio());

  console.log("As rosas não falam");

  await sleep(geraIntervaloAleatorio());

  console.log("Simplesmente as rosas exalam");

  await sleep(geraIntervaloAleatorio());

  console.log("O perfume que roubam de ti, ai");

  return await sleep(geraIntervaloAleatorio());
};
