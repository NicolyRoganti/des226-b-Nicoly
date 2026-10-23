let i = 1;

console.log("Iniciando a contagem na mesma linha ... 🚨");

const intervalo = setInterval(() => {
  // Limpa a linha atual do terminal e move o cursor para o início (coluna 0)
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  // Escreve o número atual na mesma linha
  process.stdout.write(`Contagem: ${i}`);

  if (i === 10) {
    clearInterval(intervalo); // Para o contador quando chegar a 10
    return;
  }

  i++;
}, 1000); // 1000 milissegundos = 1 segundos
