const {TaskStack} = require('../index')

//se crea la instancia
test = new TaskStack({Interval:1000});

//se agregan los elentos
test.push(1)
test.push(2)
test.push("Hola")
test.push(4)
test.push(5)

console.log('Size:',test.length)

//se recorre la cola para vaciarla
test.run()

//se agregan mas elementos a la cola despues de que arranca

test.push(6)
test.push(7)
test.push("Adios")
test.push(9)
test.push(10)