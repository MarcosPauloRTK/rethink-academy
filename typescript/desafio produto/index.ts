class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}
}

const produto_1 = new Produto("Arroz", 12)
const produto_2 = new Produto("Feijão", 10, 0.2)