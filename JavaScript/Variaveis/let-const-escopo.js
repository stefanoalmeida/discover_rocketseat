/**
 * const e let são locais e só funcionam no escopo onde foi criada
 */

console.log("Existe x antes do bloco?", x) // Erro de referencia

{
  let x = 0
}

//console.log("Existe x depois do bloco?", x) // Erro de referencia