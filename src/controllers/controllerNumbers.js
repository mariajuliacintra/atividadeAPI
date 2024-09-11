//conferir se é numero primo ou não
function numPrimo(primo) {
  if (primo <= 1) return false;
  if (primo <= 3) return true;

  if (primo % 2 === 0 || primo % 3 === 0) return false;

  for (let i = 5; i * i <= primo; i += 6) {
    if (primo % i === 0 || primo % (i + 2) === 0) return false;
  }

  return true;
} //FIM DA FUNÇÃO PRIMO

function numPar(par) {
  return par % 2 === 0;
} //FIM DA FUNÇÃO PAR

module.exports = class controllerNumbers {
  static async postPar(req, res) {
    const { number } = req.body;
    //conferir se é numero par ou impar
    if (typeof number !== "number") {
      res.status(400).json({ message: "Digite um número" });
    } else {
      if (numPar(number)) {
        res.status(200).json({ message: "Número par!!" });
      } else {
        res.status(200).json({ message: "Número impar!!" });
      }
    }
  } //FIM DOS PAR

  static async postPrimo(req, res) {
    const { number } = req.body;
    if (typeof number !== "number") {
      res.status(400).json({ message: "Digite um número" });
    } else {
      if (numPrimo(number)) {
        res.status(200).json({ message: "Número primo!!" });
      } else {
        res.status(200).json({ message: "Número não primo!!" });
      }
    }
  } //FIM DOS PRMOS

  static async getNumbers(req, res) {
    res.status(200).json({ nome: "number" });
  }
};
