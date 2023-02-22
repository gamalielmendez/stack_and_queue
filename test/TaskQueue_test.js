const {TaskQueue} = require('../index')

//se crea la instancia
test = new TaskQueue({Interval:1000});

//se agregan los elentos
test.add(1)
test.add(2)
test.add("Hola")
test.add(4)
test.add(5)

console.log('Size:',test.length)

//se recorre la cola para vaciarla
test.run()

//se agregan mas elementos a la cola despues de que arranca

test.add(6)
test.add(7)
test.add("Adios")
test.add(9)
test.add(10)