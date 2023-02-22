const Stack = require('./stack')
const Timer = require('@gamalielmh921230/node_timer')

module.exports = class TaskStack extends Stack {

    constructor({ Interval = 2000, callback = (e) => console.log(e) }) {
        super()

        this.callback = callback
        this.timer = new Timer(Interval, this.processTask.bind(this))

    }

    async processTask() {

        if (this.length > 0 && typeof this.callback == "function") {
            await this.callback(this.pop())
        }

    }

    run = () => this.timer.start()

    stop = () => this.timer.stop()

}