/**
 * No código abaixo, esta música foi implementada, porém cada verso leva um tempo indefinido
 * (aleatório) para ser "cantado" na tela. A consequência disso é que raramente a música será
 * cantada da forma correta. Modifique os métodos de versos, utilizando callbacks, de forma que
 * a música seja reproduzida na sequência correta.
 */

const desafioAsRosasNaoFalam = () => {
  type CallbackFn = () => void;
  const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);

  const queixoMeAsRosas = (nextVerse: CallbackFn) => {
    setTimeout(() => {
      console.log("Queixo-me às rosas");

      nextVerse();
    }, geraIntervaloAleatório());
  };

  const masQueBobagem = (nextVerse: CallbackFn) => {
    return () => {
      setTimeout(() => {
        console.log("Mas que bobagem");

        nextVerse();
      }, geraIntervaloAleatório());
    };
  };

  const asRosasNaoFalam = (nextVerse: CallbackFn) => {
    return () => {
      setTimeout(() => {
        console.log("As rosas não falam");

        nextVerse();
      }, geraIntervaloAleatório());
    };
  };

  const simplesmenteAsRosasExalam = (nextVerse: CallbackFn) => {
    return () => {
      setTimeout(() => {
        console.log("Simplesmente as rosas exalam");

        nextVerse();
      }, geraIntervaloAleatório());
    };
  };

  const oPerfumeQueRoubamDeTi = () => {
    return () => {
      setTimeout(() => {
        console.log("O perfume que roubam de ti, ai");
      }, geraIntervaloAleatório());
    };
  };

  queixoMeAsRosas(masQueBobagem(asRosasNaoFalam(simplesmenteAsRosasExalam(oPerfumeQueRoubamDeTi()))));
};

/**
 * Neste desafio, precisamos criar duas funções: A primeira o `despertador`, deverá receber um parâmetro
 * de intervalo em segundos. O despertador deverá "tocar" após o intervalo definido pelo parâmetro.
 * A segunda função, o `relogio`, deverá escrever na tela a hora atual, a cada segundo.
 * O formato da saída deverá ser em horas:minutos:segundos.
 */
