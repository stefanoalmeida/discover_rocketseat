/**
 * var é global e também local
 */

console.log("Existe x antes do bloco?", x) // undefined

{
  var x = 0
}

console.log("Existe x depois do bloco?", x) // 0