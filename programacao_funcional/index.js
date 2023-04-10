/**
 * Função pura é aquela cujo comportamento é determinista,
 * isto é, dada certa combinação de parâmentros, tal função apresenta
 * somente um comportamento.
 */

function sum(...args) {
  return args.reduce((acc, el) => (acc += el), 0);
}

/**
 * Independente da ordem dos valores passados a função sum,
 * o resultado sempre será o mesmo.
 */

/**
 * Por outro lado, função impura é aquela que depende de fatores
 * externos ao escopo da função (como uma chamada ao banco ou uma API externa),
 * dependência essa que faz o comportamento da função ser aleatório,
 * isto é, mesmo que possbilidade do comportamento mudar, ainda sim não é improvável.
 */

const PI = Math.PI;

function areaCircle(radius) {
  return (radius ** 2) * PI;
}

/**
 * Mesmo que seja improvável que o valor de PI (ou até Math.PI) mude,
 * ainda sim existe a possibilidade de que o retorno da função não seja igual
 * para chamadas consecutivas de paramêtros iguais.
 */

/**
 * Outra forma de função impura é aquela que efeito colateral perceptível.
 * Por exemplo, alterar o valor de uma variável global
 */

let value = 10;

function valueSetter(a){
    value = a;
}

/**
 *  Imutabilidade é a capacidade de um objeto em resistir a mudanças.
 * No contexto da programação funcional 
 */

