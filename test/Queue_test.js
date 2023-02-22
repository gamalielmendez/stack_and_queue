const {Queue} = require('../index')

//se crea la instancia
test = new Queue();

//se agregan los elentos
test.add(1)
test.add(2)
test.add("Hola")
test.add(4)
test.add(5)

console.log('Size:',test.length)

//se recorre la cola para vaciarla
let element= test.poll()
while (element) {
    
    console.log(element)
    element= test.poll()

}