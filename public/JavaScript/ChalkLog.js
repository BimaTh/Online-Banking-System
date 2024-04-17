const chalk = require('chalk');

module.exports = class Log {
    constructor() {
        
    }

    error(log = ''){
        if(!log) throw new TypeError('You must provide something to log.')
        return console.log(chalk.red(log))
    }

    warning(log = ''){
        if(!log) throw new TypeError('You must provide something to log.')
        return console.log(chalk.yellow(log))
    }

    passed(log = ''){
        if(!log) throw new TypeError('You must provide something to log.')
        return console.log(chalk.green(log))
    }

    warn(log = ''){
        if(!log) throw new TypeError('You must provide something to log.')
        return console.log(chalk.magenta(log))
    }
    subwarn(log = ''){
        if(!log) throw new TypeError('You must provide something to log.')
        return console.log(chalk.blue(log))
    }
}