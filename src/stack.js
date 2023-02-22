module.exports = class Stack {

    constructor() {
        this._stack = []
    }

    push = (newElement) => this._stack.push(newElement)

    pop = () => this._stack.pop()

    empty = () => this._stack.length <= 0 ? true : false

    peek = () => (this._stack.length <= 0) ? null : this._stack[this._stack.length - 1]

    clear = () => this._stack=[]

    get length() { return this._stack.length }

}