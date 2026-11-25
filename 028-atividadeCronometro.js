const entrada = require("prompt-sync")();
let segundos = 0;
console.log("Cronômetro iniciado...");

const timer = setInterval(() => {
  if (segundos > 15) {
    clearInterval(timer);
    console.log("\nTempo limite de 15 segundos atingido!");
    entrada("Pressione ENTER para encerrar o programa!");

    return;
  }
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.write(`Tempo decorrido: ${segundos} segundo(s)`);
  segundos++;
}, 1000);
