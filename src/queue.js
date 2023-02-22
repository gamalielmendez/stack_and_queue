module.exports = class Queue {

    constructor() {
        this._queue = []
    }

    add = (newElement) => this._queue.push(newElement)

    offer = (newElement) => this._queue.push(newElement)

    element = () => this._queue[0]

    peek = () => (this._queue.length <= 0) ? null : this._queue[0]

    remove = () => this._queue.shift()

    poll = () => (this._queue.length <= 0) ? null : this._queue.shift()

    get length() { return this._queue.length }

}