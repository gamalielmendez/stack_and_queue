# stack_and_queue
### Es un paquete que contiene la deficiocion de las siguientes estructuras basicas:
- **Queue:** *contiene la funcionalidad basica de una cola*
- **TaskQueue:** *Extiende la clase **Queue** añadiendo un timer para realizar el procesamiento de los elementos de la cola automaticamente*
- **Stack:** *contiene la funcionalidad basica de una pila*
- **TaskStack:** *Extiende la clase **Stack** añadiendo un timer para realizar el procesamiento de los elementos de la pila automaticamente*

# Como se Instala
*Usando npm*
```javascript 
npm i node-fpdf
```` 
*Usando yarn*
```javascript 
yarn add node-fpdf
````

# Ejemplos
## Queue
```javascript 
    const {Queue} = require('stack_and_queue')
    //se crea la instancia
    let _queue = new Queue();

    //se agregan los elentos
    _queue.add(1)
    _queue.add(2)
    _queue.add("Hola")
    _queue.add(4)
    _queue.add(5)

    console.log('Size:',_queue.length)

    //se recorre la cola para vaciarla
    let element= _queue.poll()
    while (element) { 
        console.log(element)
        element= _queue.poll()
    }

```` 
## TaskQueue
```javascript 
    const {TaskQueue} = require('stack_and_queue')

    const task = (_tast) => console.log(_tast)
    //se crea la instancia
    let _taskQueue = new TaskQueue({Interval:1000,callback:task});

    //se agregan los elentos
    _taskQueue.add(1)
    _taskQueue.add(2)
    _taskQueue.add("Hola")
    _taskQueue.add(4)
    _taskQueue.add(5)
    _taskQueue.add(6)
    _taskQueue.add(7)
    _taskQueue.add("Adios")
    _taskQueue.add(9)
    _taskQueue.add(10)

    console.log('Size:',test.length)

    //se recorre la cola para vaciarla
    _taskQueue.run()

```` 

## Stack
```javascript 
    const {Stack} = require('stack_and_queue')

    //se crea la instancia
    const _stack = new Stack();

    //se agregan los elentos
    _stack.push(1)
    _stack.push(2)
    _stack.push("Hola")
    _stack.push(4)
    _stack.push(5)

    console.log('Size:',_stack.length)

    //se recorre la cola para vaciarla

    while (!_stack.empty()) {
    const element= _stack.pop()
        console.log(element)
    }

```` 
## TaskStack
```javascript 
    const {TaskStack} = require('stack_and_queue')

    const task = (_tast) => console.log(_tast)
    //se crea la instancia
    const _taskStack = new TaskStack({Interval:1000,callback:task});

    //se agregan los elentos
    _taskStack.push(1)
    _taskStack.push(2)
    _taskStack.push("Hola")
    _taskStack.push(4)
    _taskStack.push(5)
    _taskStack.push(6)
    _taskStack.push(7)
    _taskStack.push("Adios")
    _taskStack.push(9)
    _taskStack.push(10)

    console.log('Size:',_taskStack.length)

    //se recorre la cola para vaciarla
    _taskStack.run()

```` 
