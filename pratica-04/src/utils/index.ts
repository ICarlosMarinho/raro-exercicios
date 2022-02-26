export const sleep = <T>(timeout: number): Promise<T> => {
  return new Promise((resolve, _) => setTimeout(resolve, timeout));
};

export const geraIntervaloAleatorio = (): number => Math.floor(Math.random() * 3 * 1000);
