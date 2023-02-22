const {Stack} = require('../index')

//se crea la instancia
test = new Stack();

//se agregan los elentos
test.push(1)
test.push(2)
test.push("Hola")
test.push(4)
test.push(5)

console.log('Size:',test.length)

//se recorre la cola para vaciarla

while (!test.empty()) {
   const element= test.pop()
    console.log(element)
    

}